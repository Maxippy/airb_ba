import styled from 'styled-components'

export const SectionsWrapper = styled.div`
  display: flex;

  .item {
    display: flex;
    flex-direction: column;
    position: relative;

    .title {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    .subtitle {
      flex: 1;
    }
  }
`