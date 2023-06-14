/* eslint-disable array-callback-return */
import React from 'react'
import {Category} from '../components/ecom-ui'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getCategories} from '../state/categorySlice'
import {GridList} from '../components/Layout'


const Categories = () => {
  const dispatch = useDispatch()
  useEffect(() => {dispatch(getCategories())}, [dispatch])
  const {loading, records, error} = useSelector((state) => state.categories)

  return (
    <div>
      <GridList items={records} loading={loading} error={error}>
        <Category/>
      </GridList>
    </div>
  )
}

export default Categories