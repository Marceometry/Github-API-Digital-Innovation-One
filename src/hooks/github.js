import { useContext } from 'react'
import { GithubContext } from '../contexts/GithubContext'

export const useGithub = () => {
  const {
    data,
    getAllInfo,
    getUser,
    getUserRepos,
    getUserStarred
  } = useContext(GithubContext)

  return { data, getAllInfo, getUser, getUserRepos, getUserStarred }
}
