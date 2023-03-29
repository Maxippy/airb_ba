import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongforWrapper } from './style'
import SectionHeader from '@/components/section-header'
import LongforItem from '@/components/longfor-item'
import ScrollView from '@/base-ui/scroll-view'

const HomeLongfor = memo((props) => {
  const { list } = props
  return (
    <LongforWrapper>
      <SectionHeader title={list.title} subtitle={list.subtitle} />
      <ScrollView>
      {/* <div className="longfor-list"> */}
        {
          list.list.map(item => {
            return <LongforItem itemData={item} key={item.city} />
          })
        }
      {/* </div> */}
      </ScrollView>
    </LongforWrapper>
  )
})

HomeLongfor.propTypes = {
  list: PropTypes.object
}

export default HomeLongfor