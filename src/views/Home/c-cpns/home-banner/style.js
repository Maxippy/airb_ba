import styled from 'styled-components'
import coverImg from '@/assets/img/wantLive.jpg'


export const BannerWrapper = styled.div`
  height: 529px;
  // 如果不用${coverImg}，还可以使用require
  // background: url(${require("@/assets/img/wantLive.jpg")}) center/cover;
  background: url(${coverImg}) center/cover;
`