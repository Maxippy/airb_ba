import React, { memo } from 'react'
import { SectionsWrapper } from './style'
import { PropTypes } from 'prop-types'

const SearchSections = memo((props) => {
  const { searchInfos } = props
  return (
    <SectionsWrapper>
      {
        searchInfos.map(item => {
          return (
            <div className="item" key={item.title}>
              <span className="title">{item.title}</span>
              <span className="subtitle">{item.desc}</span>
            </div>
          )
        })
      }
    </SectionsWrapper>
  )
})

SearchSections.propTypes = {
  searchInfos: PropTypes.array
}

export default SearchSections