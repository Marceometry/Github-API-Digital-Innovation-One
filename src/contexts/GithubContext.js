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
    hasError: false,
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

  async function getAllInfo(username) {
    setGithubData((prevState) => ({
      ...prevState,
      isLoadingUser: true,
      isLoadingRepos: true,
      isLoadingStarred: true,
    }))

    const hasUser = await getUser(username)

    if (!hasUser) return
    getUserRepos(username)
    getUserStarred(username)
  }

  async function getUser(username) {
    try {
      const { data } = await api.get(`users/${username}`)
      setGithubData((prevState) => ({
        ...prevState,
        hasUser: true,
        hasError: false,
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
      return true
    } catch (err) {
      console.error(err)
      setGithubData((prevState) => ({
        ...prevState,
        hasUser: false,
        hasError: true,
        isLoadingUser: false,
      }))
      return false
    }
  }

  async function getUserRepos(username) {
    try {
      const { data } = await api.get(`users/${username}/repos`)

      setGithubData((prevState) => ({
        ...prevState,
        hasError: false,
        repositories: data,
        isLoadingRepos: false,
      }))
    } catch (err) {
      console.error(err)

      setGithubData((prevState) => ({
        ...prevState,
        hasError: true,
        isLoadingRepos: false,
      }))
    }
  }

  async function getUserStarred(username) {
    try {
      const { data } = await api.get(`users/${username}/starred`)

      setGithubData((prevState) => ({
        ...prevState,
        hasError: false,
        starred: data,
        isLoadingStarred: false,
      }))
    } catch (err) {
      console.error(err)

      setGithubData((prevState) => ({
        ...prevState,
        hasError: true,
        isLoadingStarred: false,
      }))
    }
  }

  const contextValue = {
    data: githubData,
    getAllInfo: useCallback((username) => getAllInfo(username), []),
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
