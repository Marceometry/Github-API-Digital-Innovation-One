import { useContext } from 'react'
import { GithubContext } from '../contexts/GithubContext'

export const useGithub = () => {
  const {
    getUser,
    data,
    getUserRepos,
    getUserStarred
  } = useContext(GithubContext)

  return { getUser, data, getUserRepos, getUserStarred }
}
