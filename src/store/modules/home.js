import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData, getHomeHotRecData, getHomeLongForData, getHomePlusData } from '@/services'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
export const fetchHomeDataAction = createAsyncThunk("fetchdata", (payload, { dispatch, getState }) => {
  // const state = getState()
  // state.xxx
  getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfoAction(res))
  })
  getHomeHighScoreData().then(res => {
    dispatch(changeHighScoreInfoAction(res))
  })
  getHomeDiscountData().then(res => {
    dispatch(changeDiscountInfoAction(res))
  })
  getHomeHotRecData().then(res => {
    dispatch(changeHotCommInfoAction(res))
  })
  getHomeLongForData().then(res => {
    dispatch(changeLognforInfoAction(res))
  })
  getHomePlusData().then(res => {
    dispatch(changePlusInfoAction(res))
  })
})


const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    hotCommInfo: {},
    longforInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
    changeHotCommInfoAction(state, { payload }) {
      state.hotCommInfo = payload
    },
    changeLognforInfoAction(state, { payload }) {
      state.longforInfo = payload
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload
    },
  }
})

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeHotCommInfoAction,
  changeLognforInfoAction,
  changePlusInfoAction
} = homeSlice.actions

export default homeSlice.reducer
