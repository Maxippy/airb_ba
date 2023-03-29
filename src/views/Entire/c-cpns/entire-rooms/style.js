import styled from 'styled-components'

export const RoomWrapper = styled.div`
  padding: 40px 20px;
  position: relative;
  margin-top: 128px;

  .title {
    font-size: 22px;
    color: #222;
    font-weight: 700;
    margin: 0 0 10px 10px;
    margin-top: 30px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }

  > .cover {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, .8);
  }
`