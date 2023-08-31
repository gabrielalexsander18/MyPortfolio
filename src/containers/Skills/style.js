import styled from 'styled-components'

import px2vw from '../../utils/px2vw'

export const Container = styled.div`
  min-height: 100vh;
  background-color: #0a0a0a;

  display: flex;

  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding-top: 35px;
  }

  @media (max-width: 425px) {
    max-width: 100vw;

    padding-top: ${px2vw(400)};
    padding-bottom: ${px2vw(250)};
  }
`

export const LogoPortfolioEdit = styled.img`
  width: ${px2vw(135)};
  position: absolute;
  top: 35px;
  left: ${px2vw(100)};

  @media (max-width: 425px) {
    width: ${px2vw(300)};

    top: ${px2vw(50)};
    left: auto;
    right: ${px2vw(40)};
  }
`
