import styled from 'styled-components'

export const Container = styled.div`
  width: 500px;
  height: 65px;
  background-color: #1c1c1a;
  top: 17px;
  right: 60px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  position: absolute;
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
`

export const ContainerRigth = styled.div`
  background: none;
  display: flex;
  align-items: center;
  gap: 25px;
`
