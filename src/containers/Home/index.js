import React from 'react'

import LogoPortfolio from '../../assets/logo-portfolio.png'
import { Header } from '../../components'
import {
  Container,
  LogoPortfolioEdit,
  ContainerLeft,
  ContainerRigth,
  Line
} from './style'

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <ContainerLeft>
          <LogoPortfolioEdit src={LogoPortfolio} alt="logo-gabriel" />
        </ContainerLeft>
        <ContainerRigth>
          <h2>Olá,</h2>
          <h2 className="gabriel">sou o Gabriel Alexsander</h2>
          <Line></Line>
          <h2 className="entusiasta">Entusiasta da programação</h2>
          <p>
            Sou um apaixonado desenvolvedor de software com um forte interesse
            em tecnologia e soluções inovadoras. Ao longo dos anos, tenho me
            dedicado a aprimorar minhas habilidades em várias linguagens de
            programação e tecnologias, e agora estou animado em compartilhar
            meus projetos mais recentes com você.
          </p>
          <h5>
            Neste site você irá ver um pouco sobre os meus projetos,
            habilidades, etc.
          </h5>
        </ContainerRigth>
      </Container>
    </>
  )
}
