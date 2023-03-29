import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV1Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRoom from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'
const HomeSectionV1 = memo((props) => {
  const { list } = props
  return (
    <SectionV1Wrapper>
      <SectionHeader title={list.title} subtitle={list.subtitle ?? ''}/>
      {/* <SectionTabs tabNames={tabNames}/> */}
      <SectionRoom roomList={list.list}/>
      <SectionFooter />
    </SectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {
  list: PropTypes.object,
  itemWidth: PropTypes.string,
}

export default HomeSectionV1