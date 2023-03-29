import { fetchRoomListAction } from '@/store/modules/entire/createActions'
import { changeHeaderConfigAction } from '@/store/modules/main'
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import EntireRooms from './c-cpns/entire-rooms'
import { EntireWrapper } from './style'

const Entire = memo(() => {
  // 发送网络请求，放在生命周期里面
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, isHome: false }))
  }, [dispatch])
  return (
    <EntireWrapper>
      {/* <div className="filter"> */}
        <EntireFilter />
      {/* </div> */}
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  )
})

export default Entire