import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { rootState } from '@/store'
import Slider from '@/components/slider2'
import SaleDetail from '@/components/SaleDetail'
import { getBannersList2, getDetailList } from './store/actionCreators'
import { Wrapper, HeaderWrapper } from './style'

interface FoodProps {
  bannersList2: any[];
  detailList: any[];
  getBannerData2Dispatch: () => void;
  getDetailDataDispatch: () => void;
}

const Food:React.FC<FoodProps> = (props) => {
  const { bannersList2, detailList } = props
  const { getBannerData2Dispatch, getDetailDataDispatch } = props

  useEffect(() => {
    getBannerData2Dispatch(),
    getDetailDataDispatch()
  }, [])

  return (
    <Wrapper>
      <HeaderWrapper>
        <div className='sousuo'>
          <input type="text" placeholder='搜索商品' />
          <i className='iconfont icon-sousuo'></i>
        </div>
        <div className='shop'>
          <h2>南昌市东华理工大学店</h2>
          <i className='iconfont icon-xiangyoujiantou'></i>
        </div>
        <div>

        </div>
      </HeaderWrapper>
      <Slider bannersList2={bannersList2}></Slider>
      <SaleDetail detailList={detailList} />
    </Wrapper>
  )
}

const mapStateToProps = (state:rootState) => ({
  bannersList2: state.food.bannersList2,
  detailList: state.food.detailList
})

const mapDispatchToProps = (dispatch: any) => ({
  getBannerData2Dispatch() {
    dispatch(getBannersList2())
  },
  getDetailDataDispatch() {
    dispatch(getDetailList())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Food)
