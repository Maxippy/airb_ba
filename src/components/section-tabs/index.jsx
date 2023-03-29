import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import classNames from 'classnames'
import { SectionTabsWrapper } from './style'
import ScrollView from '@/base-ui/scroll-view'

const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  function handleItemClick(item, index) {
    setCurrentIndex(index)
    tabClick(item)
  }

  return (
    <SectionTabsWrapper>
      <ScrollView>
      {
        tabNames.map((item, index) => {
          return (
            <div 
              className={classNames("item", { active: index === currentIndex })}
              key={item}
              onClick={e => handleItemClick(item, index)}
            >{item}</div>
          )
        })
      }
      </ScrollView>
    </SectionTabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array
}

export default SectionTabs