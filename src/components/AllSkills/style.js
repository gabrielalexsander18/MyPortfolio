import styled from 'styled-components'

import px2vw from '../../utils/px2vw'

export const Container = styled.div`
  min-width: 850px;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 45px;
  justify-items: center;
  align-items: center;

  @media (max-width: 1008px) {
    min-width: 700px;

    gap: 30px;
  }

  @media (max-width: 768px) {
    min-width: 550px;
  }

  @media (max-width: 425px) {
    min-width: ${px2vw(500)};

    grid-template-columns: repeat(3, 1fr);
    gap: ${px2vw(60)};
  }
`

export const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 23px;
  background: rgba(70, 130, 180, 0.25);

  box-shadow: -15px 10px 25px rgba(50, 50, 50, 0.5);

  @media (max-width: 425px) {
    width: ${px2vw(350)};
    height: ${px2vw(350)};
  }
`
