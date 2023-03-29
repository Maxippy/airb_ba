import React, { memo, useState } from 'react'
import classNames from 'classnames'
import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter-data.json'

const EntireFilter = memo(() => {
  const [selectedItems, setSelectedItems] = useState([])

  function itemClickHandler(item) {
    const newItems = [...selectedItems]
    if (newItems.includes(item)) {
      const itemIndex = newItems.findIndex(filterItem => filterItem === item)
      console.log(newItems);
      newItems.splice(itemIndex, 1)
    } else {
      newItems.push(item)
    }
    setSelectedItems(newItems)
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {
          filterData.map((item, index) => {
            return (
              <div 
                key={item} 
                className={classNames("item", { active: selectedItems.includes(item) })}
                onClick={e => itemClickHandler(item)}
              >{item}</div>
            )
          })
        }
      </div>
    </FilterWrapper>
  )
})

export default EntireFilter