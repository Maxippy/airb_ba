import IconArrowLeft from '@/assets/svg/icon-arrowLeft'
import IconArrowRight from '@/assets/svg/icon-arrowRight'
import IconClose from '@/assets/svg/icon_close'
import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import classNames from 'classnames'
import Indicator from '../indicator'
import { BrowserWrapper } from './style'

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isNext, setNext] = useState()
  const [showList, setShowList] = useState(true)

  // 当图片浏览器展示出来时，让滚动消失
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  function handleClose() {
    if (closeClick) {
      closeClick();
    }
  }

  function controlClickHandle(isNext) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    if (newIndex === pictureUrls.length) {
      newIndex = 0
    }
    if (newIndex < 0) newIndex = pictureUrls.length - 1
    setCurrentIndex(newIndex)
    setNext(isNext)
  }

  function handlePicClick(index) {
    setNext(index > currentIndex)
    setCurrentIndex(index)
  }

  return (
    <BrowserWrapper isNext={isNext} showList={showList}>
      <div className="top">
        <div className="close-btn" onClick={e => handleClose()}>
          <IconClose/>
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={e => controlClickHandle(false)}>
            <IconArrowLeft width="77" height="77" />
          </div>
          <div className="btn right" onClick={e => controlClickHandle(true)}>
            <IconArrowRight width="77" height="77"/>
          </div>
        </div>
        <div className="pictures">
          <SwitchTransition mode="in-out">
            <CSSTransition key={pictureUrls[currentIndex]} classNames="pic" timeout={200}>
              <img src={pictureUrls[currentIndex]} alt=""/>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>{currentIndex + 1}/{pictureUrls.length}:</span>
              <span>room apartment图片{currentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={e => setShowList(!showList)}>
              <span>{showList ? '隐藏': '显示'}图片列表</span>
            </div>
          </div>
          <div className='list'>
            <Indicator selectIndex={currentIndex}>
              {
                pictureUrls.map((item, index) => {
                  return (
                    <div 
                      className={classNames("item", { active: currentIndex === index })} 
                      key={item}
                      onClick={e => handlePicClick(index)}
                    >
                      <img src={item} alt=""/>
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array
}

export default PictureBrowser