import styled from 'styled-components'

export const AllCardsProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  justify-items: center;
  align-items: center;
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

  div {
    display: flex;
    align-items: flex-end;

    width: 340px;
    height: 480px;
    position: absolute;

    border: none;
    background: none;
  }
`

export const ImageProductEdit = styled.img`
  position: relative;
  width: 340px;
  border-radius: 20px 20px 2px 2px;

  margin-bottom: 20px;
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
`

export const Resume = styled.p`
  font-family: 'Dosis', sans-serif;
  font-weight: 400;
  letter-spacing: 0.5px;
  margin: 0 10px 20px;
`
