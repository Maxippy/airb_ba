import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner/index'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from '@/views/Home/c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { isEmptyO } from '@/utils'
import HomeLongfor from './c-cpns/home-longfor'
import HomeSectionV3 from './c-cpns/home-section-v3'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Home = memo(() => {
  /**从redux中获取数据 */
  const { 
    goodsPriceInfo, 
    highScoreInfo, 
    discountInfo, 
    hotRecommendInfo,
    longforInfo,
    plusInfo
  } = useSelector((state) => ({
    goodsPriceInfo: state.home.goodsPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    hotRecommendInfo: state.home.hotRecommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual)

  // const tabNames = discountInfo.dest_address?.map(item => item.name)

  /** 派发异步事件：发送网络请求 */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, isHeader: true, topAlpha: true }))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
        <div className="content">
          { isEmptyO(discountInfo) && <HomeSectionV2 list={discountInfo}/> }
          { isEmptyO(hotRecommendInfo) && <HomeSectionV2 list={hotRecommendInfo}/> }
          { isEmptyO(goodsPriceInfo) && <HomeSectionV1 list={goodsPriceInfo}/> }
          { isEmptyO(highScoreInfo) && <HomeSectionV1 list={highScoreInfo}/> }
          { isEmptyO(longforInfo) && <HomeLongfor list={longforInfo}/>}
          { isEmptyO(plusInfo) && <HomeSectionV3 list={plusInfo}/>}
          {/* <div className="high-score"> */}
            {/* <SectionHeader title={highScoreInfo.title} subtitle={highScoreInfo.subtitle}></SectionHeader>
            <SectionRoom roomList={highScoreInfo.list}></SectionRoom> */}
            {/* <HomeSectionV1 list={highScoreInfo} /> */}
          {/* </div> */}
        </div>
    </HomeWrapper>
  )
})

export default Home