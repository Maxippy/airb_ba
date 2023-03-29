import React, { memo } from 'react'
import { Pagination } from 'antd'
import { PaginationWrapper } from './style'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { changeCurrentPageAction, fetchRoomListAction } from '@/store/modules/entire/createActions'

const EntirePagination = memo(() => {
  const { totalCount, currentPage, roomList } = useSelector((state) => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList
  }), shallowEqual)

  // const totalPage = Math.ceil(totalCount / 20)
  const start = currentPage * 20 + 1
  const end = (currentPage + 1) * 20

  const dispatch = useDispatch()
  function pageChangeHandle(event, pageCount) {
    window.scroll(0, 0)
    dispatch(changeCurrentPageAction(event - 1))
    dispatch(fetchRoomListAction())
  }

  return (
    <PaginationWrapper>
      {
        !!roomList.length && (
          <div className="info">
            <Pagination defaultCurrent={1} total={totalCount} onChange={pageChangeHandle} />
            <div className="desc">
              第 { start } - {end} 个房源，共超过{totalCount}个
            </div>
          </div>
        )
      }
    </PaginationWrapper>
  )
})

export default EntirePagination