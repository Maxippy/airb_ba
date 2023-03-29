import { 
  getHomeDiscountData, 
  getHomeGoodsPriceData, 
  getHomeHighScoreData, 
  getHomeHotRecommendData, 
  getHomeLongforData, 
  getHomePlusData
} from '@/services'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHomeDataAction = createAsyncThunk("fetchdata", async (payload, { dispatch }) => {
  // const res = await getHomeGoodsPriceData()
  // return res
  getHomeGoodsPriceData().then(res => {
    dispatch(changeGoodsPriceInfoAction(res))
  })
  getHomeHighScoreData().then(res => {
    dispatch(changeHighScoreInfoAction(res))
  })
  getHomeDiscountData().then(res => {
    dispatch(changeDiscountInfoAction(res))
  })
  getHomeHotRecommendData().then(res => {
    dispatch(changeHotRecommendInfoAction(res))
  })
  getHomeLongforData().then(res => {
    dispatch(changeLongforInfoAction(res))
  })
  getHomePlusData().then(res => {
    dispatch(changePlusInfoAction(res))
  })
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodsPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    hotRecommendInfo: {},
    longforInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeGoodsPriceInfoAction(state, { payload }) {
      state.goodsPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
    changeHotRecommendInfoAction(state, { payload }) {
      state.hotRecommendInfo = payload
    },
    changeLongforInfoAction(state, { payload }) {
      state.longforInfo = payload
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload
    }
  },
  extraReducers: {
    // [fetchHomeDataAction.fulfilled](state, { payload }) {
    //   state.goodsPriceInfo = payload
    // }
  }
})

export const { 
  changeGoodsPriceInfoAction, 
  changeHighScoreInfoAction, 
  changeDiscountInfoAction, 
  changeHotRecommendInfoAction,
  changeLongforInfoAction,
  changePlusInfoAction
} = homeSlice.actions

export default homeSlice.reducer