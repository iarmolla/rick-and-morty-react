import { createSelector } from '@reduxjs/toolkit'

const getEpisodes = state => state?.episodes
const episodes = createSelector([getEpisodes], (episode) => {
  return episode
})

export default episodes