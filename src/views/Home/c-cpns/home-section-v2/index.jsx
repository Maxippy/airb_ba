import PropTypes from 'prop-types'
import React, { memo, useState, useCallback } from 'react'
import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRoom from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'
const HomeSectionV2 = memo((props) => {
  const { list } = props
  const tabNames = list.dest_address?.map(item => item.name)
  const initialName = Object.keys(list.dest_list?? {})[0] ?? ""
  const [name, setName] = useState(initialName)
  const tabClickHandler = useCallback(function(name, index) {
    setName(name)
  }, [])
  return (
    <SectionV2Wrapper>
      <SectionHeader title={list.title} subtitle={list.subtitle ?? ''}/>
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandler}/>
      <SectionRoom roomList={list.dest_list?.[name]} itemWidth={"33.33333%"}/>
      <SectionFooter name={name}/>
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  list: PropTypes.object
}

export default HomeSectionV2