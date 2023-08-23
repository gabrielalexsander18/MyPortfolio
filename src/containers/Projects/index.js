import React from 'react'

import LogoPortfolio from '../../assets/logo-portfolio.png'
import { Header, CardsProjects } from '../../components'
import { Container, LogoPortfolioEdit } from './style'

export function Projects() {
  return (
    <>
      <Header />
      <Container>
        <div>
          <LogoPortfolioEdit src={LogoPortfolio} alt="logo-gabriel" />
        </div>
        <CardsProjects />
      </Container>
    </>
  )
}
