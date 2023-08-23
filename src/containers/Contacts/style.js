import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import styled from 'styled-components'

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
  }
`

export const LogoPortfolioEdit = styled.img`
  width: 100px;
  position: absolute;
  top: 35px;
  left: 150px;
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

    width: 300px;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 35px;
    font-weight: 700;
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
