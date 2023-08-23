import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  background-color: #0a0a0a;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  padding: 50px;
`

export const LogoPortfolioEdit = styled.img`
  width: 270px;
  background: none;
`

export const ContainerLeft = styled.div`
  display: flex;
`

export const ContainerRigth = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 750px;
  color: #ffffff;

  .gabriel {
    margin-bottom: 25px;
  }

  .entusiasta {
    margin: 25px 0;
  }

  h2 {
    font-size: 50px;
    color: #8b0000;
  }

  p {
    font-size: 20px;
    margin-bottom: 30px;
  }

  h5 {
    font-size: 15px;
  }
`

export const Line = styled.div`
  height: 2px;
  border: 0.5px solid #bababa;
`
