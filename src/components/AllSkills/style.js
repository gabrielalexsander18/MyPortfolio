import styled from 'styled-components'

export const Container = styled.div`
  min-width: 850px;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 45px;
  justify-items: center;
  align-items: center;
`

export const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 23px;
  background: rgba(70, 130, 180, 0.25);

  box-shadow: -15px 10px 25px rgba(50, 50, 50, 0.5);
`
