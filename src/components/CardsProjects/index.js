import {
  useGithubAutomatedRepos,
  StackIcon
} from 'github-automated-repos/index'
import React, { useEffect, useState } from 'react'

import { Button } from '../../components'
import {
  CardProject,
  AllCardsProjects,
  ImageProductEdit,
  ContainerStackIcon,
  Name,
  Resume,
  Line
} from './style'

export function CardsProjects() {
  const { dataReposGithub } = useGithubAutomatedRepos()
  const [repository, setRepository] = useState([])

  useEffect(() => {
    fetch(
      'https://api.github.com/users/gabrielalexsander18/repos?sort=created&per_page=999'
    )
      .then(response => response.json())
      .then(data => setRepository(dataReposGithub(data, 'deploy')))
  }, [])

  return (
    <AllCardsProjects className="App">
      {repository.map(item => {
        return (
          <CardProject key={item.id}>
            {/* Project Image */}
            <ImageProductEdit
              src={`/img/${item.name.toLocaleLowerCase()}.png`}
              alt={item.name}
            />

            {/* Stacks Icon */}
            <ContainerStackIcon>
              {item.topics.map(icon => {
                return (
                  <StackIcon
                    key={icon}
                    className="stack_Icon"
                    iconItem={icon}
                  />
                )
              })}
            </ContainerStackIcon>

            {/* Name Project */}
            <Name>{item.name}</Name>
            <Line></Line>

            {/* Description */}
            <Resume>{item.description}</Resume>

            <div className="div">
              <a href={item.homepage} target="_blank" rel="noreferrer">
                <Button>Visualizar</Button>
              </a>
              {/* html Url */}
              <a href={item.html_url} target="_blank" rel="noreferrer">
                <Button
                  style={{
                    backgroundColor: 'rgba(139, 0, 0, .2)',
                    border: '1px solid #bababa'
                  }}
                >
                  Repositório
                </Button>
              </a>
            </div>
          </CardProject>
        )
      })}
    </AllCardsProjects>
  )
}
