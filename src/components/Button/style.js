import styled from 'styled-components'

export const ContainerButton = styled.button`
  width: 145px;
  height: 36px;
  background: #8b0000;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: #ffffff;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  margin: 0 auto 10px;
`
