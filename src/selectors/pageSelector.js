import { createSelector } from '@reduxjs/toolkit'

const getPages = state => state?.pages
const pages = createSelector([getPages], (page) => {
  return page
})

export default pages