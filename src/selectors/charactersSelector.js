import { createSelector } from '@reduxjs/toolkit'

const getCharacters = state => state?.characters
const characters = createSelector([getCharacters], (character) => {
  return character
})

export default characters