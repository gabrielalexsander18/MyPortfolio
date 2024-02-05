import React from 'react'

import LogoPortfolio from '../../assets/logo-portfolio.svg'
import { Header } from '../../components'
import {
  LogoPortfolioEdit,
  Container,
  ContainerRigth,
  EmailIconEdit,
  GitHubIconEdit,
  InstagramIconEdit,
  WhatsAppIconEdit,
  LinkedInIconEdit
} from './style'

export function Contacts() {
  return (
    <>
      <Header />
      <Container>
        <div>
          <LogoPortfolioEdit src={LogoPortfolio} alt="logo-gabriel" />
        </div>

        <ContainerRigth>
          <h2>Contate-me</h2>

          <a
            href="https://github.com/gabrielalexsander18"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIconEdit sx={{ fontSize: 40 }} /> <p>GitHub</p>
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-alexsander-faria-abreu-b461b1250/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIconEdit sx={{ fontSize: 40 }} /> <p>LinkedIn</p>
          </a>
          <a
            href="https://wa.me/5531974006306"
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIconEdit sx={{ fontSize: 40 }} /> <p>WhatsApp</p>
          </a>
          <a
            href="https://www.instagram.com/bielx_dfend/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIconEdit sx={{ fontSize: 40 }} /> <p>Instagram</p>
          </a>
          <a
            href="mailto:gabrielfaria257@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <EmailIconEdit sx={{ fontSize: 40 }} /> <p>E-mail</p>
          </a>
        </ContainerRigth>
        <div className="container_download">
          <p>Baixar Currículo</p>
          <div className="container_curricolo">
            <a href="/CVFrontEnd.pdf" download className="baixar_cv">
              Front-End
            </a>
            <a href="/CVFullStack.pdf" download className="baixar_cv">
              Full-Stack
            </a>
          </div>
        </div>
      </Container>
    </>
  )
}
