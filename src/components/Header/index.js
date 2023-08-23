import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { Container, PageLink, ContainerRigth } from './style'

export function Header() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <Container>
      <ContainerRigth>
        <PageLink onClick={() => navigate('/')} isActive={pathname === '/'}>
          Home
        </PageLink>

        <PageLink
          onClick={() => navigate('/projetos')}
          isActive={pathname.includes('/projetos')}
        >
          Projetos
        </PageLink>

        <PageLink
          onClick={() => navigate('/habilidades')}
          isActive={pathname.includes('/habilidades')}
        >
          Habilidades
        </PageLink>

        <PageLink
          onClick={() => navigate('/educacao')}
          isActive={pathname.includes('/educacao')}
        >
          Educação
        </PageLink>

        <PageLink
          onClick={() => navigate('/contatos')}
          isActive={pathname.includes('/contatos')}
        >
          Contatos
        </PageLink>
      </ContainerRigth>
    </Container>
  )
}
