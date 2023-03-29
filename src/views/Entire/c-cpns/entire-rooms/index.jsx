import RoomItem from '@/components/room-item'
import { changeDetailInfoAction } from '@/store/modules/detail'
import React, { memo, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RoomWrapper } from './style'

const EntireRooms = memo(() => {
  // 从redux中获取roomList数据
  const {
    roomList,
    totalCount,
    isLoading
  } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading
  }), shallowEqual)
  // console.log(roomList);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const itemClick = useCallback((item) => {
    // console.log(item);
    dispatch(changeDetailInfoAction(item))
    navigate("/detail")
  },[navigate, dispatch]) 

  return (
    <RoomWrapper>
      <div className="title">共{totalCount}处住所</div>
      <div className="list">
        {
          roomList.map(item => {
            return (
              <RoomItem 
                itemData={item} 
                itemWidth={"20%"} 
                key={item._id}
                itemClick={itemClick}
              />
            )
          })
        }
      </div>

      { isLoading && <div className='cover'></div> }
    </RoomWrapper>
  )
})

export default EntireRooms