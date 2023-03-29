import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { SectionFooterWrapper } from './style'
import IconMore from '@/assets/svg/icon_iconMore'

const SectionFooter = memo((props) => {
  const { name } = props
  let showMessage = "显示全部"
  if (name) {
    showMessage = `显示${name}更多房源`
  }

  /**事件处理逻辑 */
  const navigate = useNavigate()
  function moreClickHandle() {
    navigate("/entire")
  }

  return (
    <SectionFooterWrapper color={name ? '#00848A': "#000"}>
      <div className="info" onClick={moreClickHandle}>
        <span className="text">{showMessage}</span>
        <IconMore />
      </div>
    </SectionFooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter
