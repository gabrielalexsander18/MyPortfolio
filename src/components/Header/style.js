import styled from 'styled-components'

import px2vw from '../../utils/px2vw'

export const Container = styled.div`
  width: 500px;
  height: 65px;
  background-color: #1c1c1a;
  top: 17px;
  right: ${px2vw(65)};
  border-radius: 40px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  position: absolute;

  @media (max-width: 1008px) {
    width: 450px;
    height: 60px;
  }

  @media (max-width: 768px) {
    width: 375px;
    height: 55px;
  }

  @media (max-width: 425px) {
    width: 100vw;
    height: ${px2vw(215)};
    background-color: #1c1a1a;
    top: auto;
    bottom: 0;
    right: auto;
    border-radius: 10px 10px 0 0;

    position: fixed;
    z-index: 1;
  }
`

export const PageLink = styled.a`
  cursor: pointer;
  background: none;
  text-decoration: none;
  color: ${props => (props.isActive ? '#DEB887' : '#ffffff')};
  border-bottom: ${props => props.isActive && '2px solid #DEB887'};
  font-size: 14px;
  line-height: 19px;
  font-weight: ${props => (props.isActive ? '700' : '200')};
  padding-bottom: 3px;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 425px) {
    font-size: ${px2vw(50)};
  }
`

export const ContainerRigth = styled.div`
  background: none;
  display: flex;
  align-items: center;
  gap: 25px;

  @media (max-width: 1008px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 425px) {
    gap: ${px2vw(50)};
  }
`
