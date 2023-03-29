import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import { Carousel } from 'antd';
import { Rate } from 'antd'
import classNames from 'classnames';
import { ItemWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrowLeft';
import IconArrowRight from '@/assets/svg/icon-arrowRight';
import Indicator from '@/base-ui/indicator';

const RoomItem = memo((props) => {
  const { itemData = [], itemWidth="25%", itemClick } = props
  const [selectIndex, setSelectedIndex] = useState(0)
  const swiperRef = useRef()
  // const navigator = useNavigate()

  function handleBtnClick(isRight, event) {
    isRight ? swiperRef.current.next() : swiperRef.current.prev()

    // 拿到最新的索引
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
    if (newIndex < 0) newIndex = itemData.picture_urls.length - 1
    if (newIndex > itemData.picture_urls.length - 1) newIndex = 0
    setSelectedIndex(newIndex)
    
    event.stopPropagation()
  }

  function itemClickHandle() {
    // navigator('/detail')
    if (itemClick) itemClick(itemData)

  }

  return (
    <ItemWrapper 
      verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth}
      onClick={itemClickHandle}
    >
      <div className="inner">
        {
          itemData.picture_urls ? 
          <div className="swiper" if={itemData.picture_urls}>
          <div className="control">
            <div className="btn left" onClick={e => handleBtnClick(false, e)}>
              <IconArrowLeft width="30" height="30"/>
            </div>
            <div className="btn right" onClick={e => handleBtnClick(true, e)}>
              <IconArrowRight width="30" height="30"/>
            </div>
          </div>
          <div className="indicator">
            <Indicator selectIndex={selectIndex}>
              {
                itemData?.picture_urls?.map((item, index) => {
                  return (
                    <div className="dot-item" key={item}>
                      <span className={classNames("dot", { active: selectIndex === index })}></span>
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
          <Carousel ref={swiperRef} dots={false}>
            {
              itemData?.picture_urls?.map(item => {
                return (
                  <div className="cover" key={item}>
                    <img src={item} alt=""/>
                  </div>
                )
              })
            }
          </Carousel>
        </div>:
        <div className="cover">
          <img src={itemData.picture_url} alt=""/>
        </div>
        }
        {/* <div className="cover" elif>
          <img src={itemData.image_url} alt=""/>
        </div> */}
        <div className="dec">
          {itemData.verify_info.message?.join("·")}
        </div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}/晚</div>

        <div className='bottom'>
          <Rate allowHalf disabled defaultValue={itemData.star_rating ?? 5} className="rate"></Rate>
          <span className='count'>{itemData.reviews_count}</span>
          {
            itemData?.bottom_info?.content &&
            <span className='extra'>·{itemData?.bottom_info?.content}</span>
          }
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem