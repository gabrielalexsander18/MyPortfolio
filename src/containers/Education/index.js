import React from 'react'

import Code from '../../assets/Background.png'
import LogoDevClub from '../../assets/DevClub.png'
import LogoPortfolio from '../../assets/logo-portfolio.png'
import LogoVsCode from '../../assets/VsCode.png'
import { Header } from '../../components'
import {
  LogoPortfolioEdit,
  Container,
  ContainerUp,
  ContainerDown,
  LogoDevClubEdit,
  LogoVsCodeEdit,
  CodeEdit,
  ContainerLeft,
  ContainerLeftDown,
  ContainerRigth,
  ContainerSetaTop,
  SetaTop
} from './style'

export function Education() {
  function ScrollToTop() {
    window.scrollTo(0, 0)
  }

  return (
    <>
      <Header />
      <Container>
        <ContainerUp>
          <div>
            <LogoPortfolioEdit src={LogoPortfolio} alt="logo-gabriel" />
          </div>
          <ContainerLeft>
            <LogoDevClubEdit src={LogoDevClub} alt="logo-dev-club" />
          </ContainerLeft>
          <ContainerRigth>
            <h2>
              <b className="dev">Dev</b>
              <b className="club">Club</b> Full-Stack
            </h2>

            <p>
              Neste curso é para pessoas que estão começando na área e querem
              estar mudando a sua área de atuação ou para quem ainda não tem
              nenhum emprego e está querendo começar e é decidido a começar pela
              programação que vai desde o HTML5, CSS3 (básico) até o React,
              React Native, Node, nos preparando para os desafios na carreira
              que teremos em nossa caminhada.
            </p>
            {/* <Button>Baixar Certificado</Button> */}
          </ContainerRigth>
        </ContainerUp>

        <ContainerDown>
          <ContainerLeftDown>
            <CodeEdit src={Code} alt="img-code" />
            <div>
              <LogoVsCodeEdit src={LogoVsCode} alt="logo-VsCode" />
            </div>
          </ContainerLeftDown>
          <ContainerRigth>
            <h2 className="Vs_Code">Vs Code</h2>
            <p>
              Todo o desenvolvimento feito no Vs Code muito famoso entre nós
              desenvolvedores.
              <br></br>
              Como objetivo de desenvolver interfaces ou até mesmo bancos
              intuitivos, atraentes que consequentemente melhoram a satisfação e
              a usabilidade.
            </p>
          </ContainerRigth>
        </ContainerDown>
        <ContainerSetaTop>
          <SetaTop
            onClick={ScrollToTop}
            style={{ width: '50px', height: '50px' }}
          />
        </ContainerSetaTop>
      </Container>
    </>
  )
}
