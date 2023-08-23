import React from 'react'

import mongo from '../../assets/Mongo.png'
import muimaterial from '../../assets/muimaterial.png'
import node from '../../assets/Node.png'
import postgres from '../../assets/postgresql.png'
import react from '../../assets/react.png'
import { Container, Img } from './style'

export function AllSkills() {
  return (
    <>
      <Container>
        <Img
          src={`https://skillicons.dev/icons?i=typescript`}
          alt="logo_typescript"
        />
        <Img
          src={`https://skillicons.dev/icons?i=javascript`}
          alt="logo_javascript"
        />
        <Img src={react} alt="logo_react" />
        <Img src={node} alt="logo_node" />
        <Img
          src={`https://skillicons.dev/icons?i=styledcomponents`}
          alt="logo_styledcomponents"
        />
        <Img src={muimaterial} alt="logo_muimaterial" />
        <Img src={mongo} alt="logo_mongo" />
        <Img src={postgres} alt="logo_postgresql" />
        <Img
          src={`https://skillicons.dev/icons?i=express`}
          alt="logo_express"
        />
        <Img
          src={`https://skillicons.dev/icons?i=sequelize`}
          alt="logo_sequelize"
        />
        <Img src={`https://skillicons.dev/icons?i=docker`} alt="logo_docker" />
        <Img src={`https://skillicons.dev/icons?i=figma`} alt="logo_figma" />
        <Img src={`https://skillicons.dev/icons?i=git`} alt="logo_git" />
        <Img src={`https://skillicons.dev/icons?i=vercel`} alt="logo_vercel" />
        <Img
          src={`https://railway.app/brand/logo-light.png`}
          alt="logo_railwai"
        />
      </Container>
    </>
  )
}
