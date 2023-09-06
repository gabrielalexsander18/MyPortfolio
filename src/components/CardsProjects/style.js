import styled from 'styled-components'

import px2vw from '../../utils/px2vw'

export const AllCardsProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  justify-items: center;
  align-items: center;

  @media (max-width: 1008px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${px2vw(60)};
  }

  @media (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const CardProject = styled.div`
  color: #ffffff;
  background-color: #1c1c1c;
  border-radius: 20px;

  display: flex;
  flex-direction: column;

  width: 340px;
  height: 480px;

  &:hover {
    transform: translate(2.5px, -2.5px);
    transition: 0.5s;
    border-bottom: 1px solid #bababa;
    border-left: 1px solid #bababa;
    box-shadow: -25px 20px 45px rgba(50, 50, 50, 0.5);
  }

  .div {
    display: flex;
    align-items: flex-end;
    justify-content: space-around;

    width: 340px;
    height: 480px;
    position: absolute;

    border: none;
    background: none;
  }

  @media (max-width: 768px) {
    width: 303px;
    height: 500px;

    .div {
      width: 303px;
      height: 500px;
    }
  }

  @media (max-width: 425px) {
    width: ${px2vw(1365)};

    .div {
      width: ${px2vw(1365)};
    }
  }
`

export const ImageProductEdit = styled.img`
  width: 340px;
  border-radius: 20px 20px 2px 2px;

  margin-bottom: 5px;

  @media (max-width: 768px) {
    width: 303px;

    margin-bottom: 5px;
  }

  @media (max-width: 425px) {
    width: ${px2vw(1365)};
  }
`

export const ContainerStackIcon = styled.div`
  display: flex;
  flex-direction: row;
  /* position: relative; */
  align-items: center;
  justify-content: flex-start;

  /* width: 340px;
  height: 480px;
  position: absolute; */

  border: none;
  background: none;

  .stack_Icon {
    height: 25px;

    margin-bottom: 5px;
    margin-left: 7px;

    @media (max-width: 768px) {
      .stack_Icon {
        height: 20px;

        margin-bottom: 5px;
        margin-left: 5px;
      }
    }
  }
`

export const Name = styled.h2`
  font-weight: 700;
  color: #f5deb3;
  margin: 0 10px 5px;
`

export const Line = styled.line`
  margin: 0 10px 20px;
  width: 270px;
  height: 2px;
  border: 0.5px solid #bababa;

  @media (max-width: 425px) {
    width: ${px2vw(1000)};
  }
`

export const Resume = styled.p`
  font-family: 'Dosis', sans-serif;
  font-weight: 400;
  letter-spacing: 0.5px;
  margin: 0 10px 20px;
`
