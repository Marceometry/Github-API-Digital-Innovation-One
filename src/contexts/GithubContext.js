import React, { createContext, useCallback, useState } from 'react'
import api from '../services/api'

export const GithubContext = createContext({
  loading: false,
  user: {},
  repositories: [],
  starred: [],
})

function GithubProvider({ children }) {
  const [githubData, setGithubData] = useState({
    hasUser: false,
    isLoadingUser: false,
    isLoadingRepos: false,
    isLoadingStarred: false,
    user: {
      id: undefined,
      avatar: undefined,
      login: undefined,
      name: undefined,
      html_url: undefined,
      blog: undefined,
      company: undefined,
      location: undefined,
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0,
    },
    repositories: [],
    starred: [],
  })

  async function getUser(username) {
    setGithubData((prevState) => ({
      ...prevState,
      isLoadingUser: true,
    }))

    const { data } = await api.get(`users/${username}`)

    setGithubData((prevState) => ({
      ...prevState,
      hasUser: true,
      isLoadingUser: false,
      user: {
        id: data.id,
        avatar: data.avatar_url,
        login: data.login,
        name: data.name,
        html_url: data.html_url,
        blog: data.blog,
        company: data.company,
        location: data.location,
        followers: data.followers,
        following: data.following,
        public_gists: data.public_gists,
        public_repos: data.public_repos,
      },
    }))
  }

  async function getUserRepos(username) {
    setGithubData((prevState) => ({
      ...prevState,
      isLoadingRepos: true,
    }))

    const { data } = await api.get(`users/${username}/repos`)

    setGithubData((prevState) => ({
      ...prevState,
      repositories: data,
      isLoadingRepos: false,
    }))
  }

  async function getUserStarred(username) {
    setGithubData((prevState) => ({
      ...prevState,
      isLoadingStarred: true,
    }))

    const { data } = await api.get(`users/${username}/starred`)

    setGithubData((prevState) => ({
      ...prevState,
      starred: data,
      isLoadingStarred: false,
    }))
  }

  const contextValue = {
    data: githubData,
    getUser: useCallback((username) => getUser(username), []),
    getUserRepos: useCallback((username) => getUserRepos(username), []),
    getUserStarred: useCallback((username) => getUserStarred(username), []),
  }

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubProvider
