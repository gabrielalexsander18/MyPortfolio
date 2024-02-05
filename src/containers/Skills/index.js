import React from 'react'

import LogoPortfolio from '../../assets/logo-portfolio.svg'
import { Header, AllSkills } from '../../components'
import { Container, LogoPortfolioEdit } from './style'

export function Skills() {
  return (
    <>
      <Header />
      <Container>
        <div>
          <LogoPortfolioEdit src={LogoPortfolio} alt="logo-gabriel" />
        </div>
        <AllSkills />
      </Container>
    </>
  )
}
