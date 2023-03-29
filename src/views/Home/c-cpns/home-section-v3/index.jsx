import ScrollView from '@/base-ui/scroll-view'
import RoomItem from '@/components/room-item'
import SectionHeader from '@/components/section-header'
import SectionFooter from '@/components/section-footer'

import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeSectionV3Wrapper } from './style'

const HomeSectionV3 = memo((props) => {
  const { list } = props
  return (
    <HomeSectionV3Wrapper>
      <SectionHeader title={list.title} subtitle={list.subtitle}/>
      <div className="room-list">
        <ScrollView>
        {
          list.list.map(item => {
            return <RoomItem itemData={item} key={item.id} itemWidth={"20%"} />
          })
        }
        </ScrollView>
      </div>
      <SectionFooter />
    </HomeSectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  list: PropTypes.object
}

export default HomeSectionV3