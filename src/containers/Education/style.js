import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp'
import styled from 'styled-components'

import px2vw from '../../utils/px2vw'

export const Container = styled.div``

export const LogoPortfolioEdit = styled.img`
  width: ${px2vw(135)};
  position: absolute;
  top: 35px;
  left: ${px2vw(80)};

  @media (max-width: 425px) {
    width: ${px2vw(300)};

    top: ${px2vw(80)};
    left: auto;
    right: ${px2vw(50)};
  }
`

export const ContainerUp = styled.div`
  min-height: 100vh;
  background-color: #0a0a0a;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  padding: 50px;

  @media (max-width: 1008px) {
    gap: ${px2vw(30)};
  }

  @media (max-width: 425px) {
    min-width: 100%;
    flex-direction: column;
    justify-content: flex-start;

    padding: 0px;
    padding-top: ${px2vw(130)};
  }
`

export const ContainerLeft = styled.div`
  display: flex;
`

export const LogoDevClubEdit = styled.img`
  width: 300px;

  @media (max-width: 768px) {
    width: ${px2vw(400)};
  }
`

export const ContainerRigth = styled.div`
  display: flex;
  flex-direction: column;
  width: 720px;

  color: #f0f0f0;

  h2 {
    font-size: 50px;
    margin-bottom: 20px;
  }

  p {
    font-size: 20px;

    color: #7f8f9f;
  }

  .Vs_Code {
    color: #8b008b;
  }

  @media (max-width: 1008px) {
    width: ${px2vw(820)};
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 45px;
      margin-bottom: 20px;
    }

    p {
      font-size: 18px;
    }
  }

  @media (max-width: 425px) {
    margin-top: ${px2vw(50)};
    padding: ${px2vw(50)};
    width: ${px2vw(1200)};

    justify-content: center;

    h2 {
      font-size: ${px2vw(130)};
      width: ${px2vw(700)};
    }

    p {
      font-size: ${px2vw(70)};
    }
  }
`

export const ContainerDown = styled.div`
  min-height: calc(100vh - 65px);
  background-color: #1c1c1c;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  padding: 30px 50px;

  @media (max-width: 1008px) {
    gap: ${px2vw(40)};
  }

  @media (max-width: 768px) {
    padding: 25px 25px;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    justify-content: flex-start;

    padding: 0px;
    padding-top: ${px2vw(100)};
    padding-bottom: ${px2vw(220)};
  }
`

export const ContainerLeftDown = styled.div`
  display: flex;
  position: relative;
  margin: 0;

  div {
    position: absolute;
    margin: 140px 0 0 240px;
  }

  @media (max-width: 1008px) {
    div {
      margin: 110px 0 0 190px;
    }
  }

  @media (max-width: 768px) {
    div {
      margin: 95px 0 0 150px;
    }
  }

  @media (max-width: 425px) {
    div {
      margin-top: ${px2vw(250)};
      margin-left: ${px2vw(550)};
    }
  }
`

export const CodeEdit = styled.img`
  height: 200px;
  background: none;

  @media (max-width: 1008px) {
    height: 150px;
  }

  @media (max-width: 768px) {
    height: 130px;
  }

  @media (max-width: 425px) {
    height: ${px2vw(450)};
  }
`

export const LogoVsCodeEdit = styled.img`
  width: 130px;
  background: none;

  &:hover {
    width: 180px;

    transition: 0.5s;
  }

  @media (max-width: 1008px) {
    width: 100px;

    &:hover {
      width: 150px;
    }
  }

  @media (max-width: 425px) {
    width: ${px2vw(330)};
  }
`

export const ContainerSetaTop = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 0 45px;

  position: fixed;
  bottom: 1px;

  width: 100vw;
  height: 100px;

  @media (max-width: 1008px) {
    bottom: -5px;
    right: -15px;
  }

  @media (max-width: 425px) {
    display: none;
  }
`

export const SetaTop = styled(KeyboardDoubleArrowUpIcon)`
  font-size: large;
  color: #bababa;

  height: 50px;
  background: #363636;
  border-radius: 50px;
  border: 0.5px solid #bababa;

  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 0.8;
  }

  @media (max-width: 425px) {
    display: none;
  }
`
