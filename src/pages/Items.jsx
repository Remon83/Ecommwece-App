import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import {itemFilter} from '../state/itemSlice'
import { GridList } from '../components/Layout'
import { Item } from '../components/ecom-ui'

const Items = () => {
  const dispatch = useDispatch();
  const {error, loading, records} = useSelector(state => state.items)
  const {prefix} = useParams()
  // console.log(records)

  useEffect(() => {
    dispatch(itemFilter(prefix))
    // unmount the component
    return () => {
      dispatch({type: 'items/clearRecords'})
    }
  }, [dispatch, prefix])

  return (
    <div>
      <GridList error={error} loading={loading} items={records}>
        <Item actionType='add'/>
      </GridList>
    </div>
  )
}

export default Items