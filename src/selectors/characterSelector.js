import { createSelector } from '@reduxjs/toolkit'

const getCharacter = state => state?.character
const character = createSelector([getCharacter], (character) => {
  return character
})

export default character