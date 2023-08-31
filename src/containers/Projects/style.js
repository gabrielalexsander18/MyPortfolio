import styled from 'styled-components'

import px2vw from '../../utils/px2vw'

export const Container = styled.div`
  min-height: 100vh;
  padding: 175px 10px 90px;
  background-color: #0a0a0a;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1008px) {
    padding-bottom: 50px;
    padding-top: 150px;
  }

  @media (max-width: 768px) {
    padding-bottom: 30px;
    padding-top: 130px;
  }

  @media (max-width: 425px) {
    padding-bottom: ${px2vw(240)};
    padding-top: ${px2vw(410)};
  }
`

export const LogoPortfolioEdit = styled.img`
  width: ${px2vw(135)};
  position: absolute;
  top: 35px;
  left: ${px2vw(120)};

  @media (max-width: 425px) {
    width: ${px2vw(300)};

    top: ${px2vw(60)};
    left: auto;
    right: ${px2vw(40)};
  }
`
