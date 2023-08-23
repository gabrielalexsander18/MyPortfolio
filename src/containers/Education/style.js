import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp'
import styled from 'styled-components'

export const Container = styled.div``

export const LogoPortfolioEdit = styled.img`
  width: 100px;
  position: absolute;
  top: 35px;
`

export const ContainerUp = styled.div`
  min-height: 100vh;
  background-color: #0a0a0a;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  padding: 50px;
`

export const ContainerLeft = styled.div`
  display: flex;
`

export const LogoDevClubEdit = styled.img`
  width: 270px;
`

export const ContainerRigth = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 720px;
  min-width: 400px;
  color: #f0f0f0;

  h2 {
    font-size: 50px;
    margin-bottom: 20px;
  }

  p {
    font-size: 20px;
    margin-bottom: 30px;

    color: #7f8f9f;
  }

  .Vs_Code {
    color: #8b008b;
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
`

export const ContainerLeftDown = styled.div`
  display: flex;
  position: relative;
  margin: 0;

  div {
    position: absolute;
    margin: 140px 0 0 240px;
  }
`

export const CodeEdit = styled.img`
  height: 200px;
  background: none;
`

export const LogoVsCodeEdit = styled.img`
  width: 130px;
  background: none;

  &:hover {
    width: 180px;

    transition: 0.5s;
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
`
