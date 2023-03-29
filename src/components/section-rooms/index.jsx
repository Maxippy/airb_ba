import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItem from '../room-item'
import { RoomWrapper } from './style'

const SectionRoom = memo((props) => {
  const { roomList = [], itemWidth = "25%" } = props
  return (
    <RoomWrapper className="room-list">
      {
        roomList.slice(0, 8)?.map((item, index) => {
          return (
            <RoomItem itemData={item} key={item.id} itemWidth={itemWidth}></RoomItem>
          )
        })
      }
    </RoomWrapper>
  )
})

SectionRoom.propTypes = {
  roomList: PropTypes.array,
  itemWidth: PropTypes.string
}

export default SectionRoom