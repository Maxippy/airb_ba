// import PropTypes from 'prop-types'
import IconArrowLeft from '@/assets/svg/icon-arrowLeft'
import IconArrowRight from '@/assets/svg/icon-arrowRight'
import { ViewWrapper } from './style'
import React, { memo, useState, useRef, useEffect } from 'react'
import classNames from 'classnames'

const ScrollView = memo((props) => {
  const [showRight, setShowRight] = useState(false)
  const [showLeft, setShowLeft] = useState(false)
  const [curIndex, setCurIndex] = useState(0)
  const scrollContentRef = useRef()
  const totalDistanceRef = useRef()
  // 控制右边按钮是否显示
  useEffect(() => {
    const scrollLength = scrollContentRef.current.scrollWidth
    const clientLength = scrollContentRef.current.clientWidth
    const totalDistance = scrollLength - clientLength
    totalDistanceRef.current = totalDistance
    setShowRight(totalDistance > 0)
  }, [scrollContentRef])

  // 控制按钮移动tab
  function handleClick(isRight=true) {
    const newIndex = isRight ? curIndex + 1 : curIndex - 1
    // 找到新的元素
    const newEl = scrollContentRef.current.children[newIndex]
    // 计算新元素父元素的偏移量
    const newOffsetLeft = newEl.offsetLeft
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    setCurIndex(newIndex)
    // 是否继续显示右边按钮
    setShowRight(totalDistanceRef.current > newOffsetLeft)
    setShowLeft(newOffsetLeft > 0)
  }
  return (
    <ViewWrapper>
      { showLeft && (
        <div onClick={e => handleClick(false)} className={classNames("control", "left")}>
          <IconArrowLeft />
        </div>
      )}
      { showRight && (
        <div onClick={e => handleClick()} className={classNames("control", "right")}>
          <IconArrowRight />
        </div>
      )}

      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})

// ScrollView.propTypes = {}

export default ScrollView