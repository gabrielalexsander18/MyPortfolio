import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import styled from 'styled-components'

import px2vw from '../../utils/px2vw'

export const Container = styled.div`
  min-height: 100vh;
  background-color: #0a0a0a;
  display: flex;
  flex-direction: column;

  align-items: center;

  padding: 50px;

  .container_download {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-direction: column;
    align-items: center;

    position: absolute;
    bottom: 80px;

    width: 100%;

    p {
      color: #ffffff;
      font-size: 25px;
    }
  }

  .container_curricolo {
    display: flex;
    justify-content: center;
    gap: 35px;
    flex-direction: row;
  }

  .baixar_cv {
    color: #f0f0f0;
    text-decoration: none;
    background-color: #a020f0;
    padding: 10px 10px;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.6;
    }
  }

  @media (max-width: 1366px) {
    padding: ${px2vw(1)};

    .container_download {
      gap: 15px;
      bottom: 35px;
    }

    .container_curricolo {
      gap: 25px;
    }
  }

  @media (max-width: 1008px) {
    .container_download {
      gap: 10px;

      bottom: 30px;
    }

    .container_curricolo {
      gap: 25px;
    }
  }

  @media (max-width: 425px) {
    padding: ${px2vw(10)};

    .container_download {
      gap: ${px2vw(15)};
      position: fixed;
      bottom: ${px2vw(400)};

      p {
        font-size: ${px2vw(80)};
      }
    }

    .container_curricolo {
      gap: ${px2vw(50)};
    }

    .baixar_cv {
      font-size: ${px2vw(60)};
    }
  }
`

export const LogoPortfolioEdit = styled.img`
  width: ${px2vw(135)};
  position: absolute;
  top: 35px;
  left: ${px2vw(120)};

  @media (max-width: 425px) {
    width: ${px2vw(300)};

    top: ${px2vw(80)};
    left: auto;
    right: ${px2vw(60)};
  }
`

export const ContainerRigth = styled.div`
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  margin-top: 100px;
  color: #f0f0f0;

  h2 {
    font-size: 60px;
    margin-bottom: 40px;
  }

  a {
    text-decoration: none;
    color: #9400d3;
    display: flex;
    gap: 35px;
    margin-bottom: 15px;
    align-items: center;

    width: 300px;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 35px;
    font-weight: 700;
  }

  @media (max-width: 1008px) {
    margin-top: 90px;

    h2 {
      margin-bottom: 30px;
    }

    a {
      margin-bottom: 10px;
    }
  }

  @media (max-width: 768px) {
    margin-top: 85px;

    h2 {
      margin-bottom: 27px;
    }
  }

  @media (max-width: 425px) {
    align-items: center;
    margin-top: ${px2vw(390)};

    h2 {
      font-size: ${px2vw(190)};
      margin-bottom: ${px2vw(90)};
    }

    a {
      gap: 25px;
      margin-bottom: 8px;
      width: ${px2vw(750)};
    }

    p {
      font-size: ${px2vw(110)};
    }
  }
`

export const EmailIconEdit = styled(EmailIcon)`
  color: #9400d3;
`

export const GitHubIconEdit = styled(GitHubIcon)`
  color: #9400d3;
`

export const InstagramIconEdit = styled(InstagramIcon)`
  color: #9400d3;
`

export const LinkedInIconEdit = styled(LinkedInIcon)`
  color: #9400d3;
`

export const WhatsAppIconEdit = styled(WhatsAppIcon)`
  color: #9400d3;
`
