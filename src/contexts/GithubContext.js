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
    loading: false,
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
      loading: !prevState.loading,
    }))

    const { data } = await api.get(`users/${username}`)

    setGithubData((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
      hasUser: true,
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
    const { data } = await api.get(`users/${username}/repos`)

    console.log('res: ' + JSON.stringify(data))

    setGithubData((prevState) => ({
      ...prevState,
      repositories: data,
    }))
  }

  async function getUserStarred(username) {
    const { data } = await api.get(`users/${username}/starred`)

    console.log('res: ' + JSON.stringify(data))

    setGithubData((prevState) => ({
      ...prevState,
      starred: data,
    }))
  }

  const contextValue = {
    githubData,
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
