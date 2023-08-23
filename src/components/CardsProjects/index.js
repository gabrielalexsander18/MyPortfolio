import React from 'react'

import Cartaovisita from '../../assets/Cartao Visita.png'
import Convertmoney from '../../assets/Convert Money.png'
import Codeburguer from '../../assets/DevBurguer.png'
import Easyshopping from '../../assets/Easy Shopping.png'
import Wecare from '../../assets/WeCare.png'
import Widecoverage from '../../assets/Wide Coverage.png'
import { Button } from '../../components'
import {
  CardProject,
  AllCardsProjects,
  ImageProductEdit,
  Name,
  Resume,
  Line
} from './style'

export function CardsProjects() {
  function CodeBurguer() {
    window.open('https://front-end-code-burguer.vercel.app/login', '_blank')
  }

  function CodeBurguerRepositorio() {
    window.open(
      'https://github.com/gabrielalexsander18/FrontEnd-codeBurguer',
      '_blank'
    )
  }

  function CartaoVisita() {
    window.open(
      'https://gabrielalexsander18.github.io/cartao-de-visita/',
      '_blank'
    )
  }

  function CartaoVisitaRepositorio() {
    window.open(
      'https://github.com/gabrielalexsander18/cartao-de-visita',
      '_blank'
    )
  }

  function ConvertMoney() {
    window.open(
      'https://gabrielalexsander18.github.io/Convert-money/',
      '_blank'
    )
  }

  function ConvertMoneyRepositorio() {
    window.open(
      'https://github.com/gabrielalexsander18/Convert-money',
      '_blank'
    )
  }

  function EasyShopping() {
    window.open(
      'https://gabrielalexsander18.github.io/Easy-shopping/',
      '_blank'
    )
  }

  function EasyShoppingRepositorio() {
    window.open(
      'https://github.com/gabrielalexsander18/Easy-shopping',
      '_blank'
    )
  }

  function WeCare() {
    window.open('https://gabrielalexsander18.github.io/We-care/', '_blank')
  }

  function WeCareRepositorio() {
    window.open('https://github.com/gabrielalexsander18/We-care', '_blank')
  }

  function WideCoverage() {
    window.open(
      'https://gabrielalexsander18.github.io/Wide-coverage/',
      '_blank'
    )
  }

  function WideCoverageRepositorio() {
    window.open(
      'https://github.com/gabrielalexsander18/Wide-coverage',
      '_blank'
    )
  }

  return (
    <AllCardsProjects>
      <CardProject>
        <ImageProductEdit src={Codeburguer} alt="imagem-do-projeto" />
        <Name>Dev Burguer</Name>
        <Line></Line>
        <Resume>
          Site completo feito em React.js e Node.js com algumas bibliotecas como
          styled components, express entre outras. O front-end foi feito bem
          simples com funcionalidades de mandar para o carrinho, os produtos e
          finalizar o pedido, já no back-end foi feita uma api que salva as
          imagens, as acounts feitas, além de pedidos, etc.
        </Resume>
        <div>
          <Button onClick={CodeBurguer}>Visualizar</Button>
          <Button
            onClick={CodeBurguerRepositorio}
            style={{
              backgroundColor: 'rgba(139, 0, 0, .2)',
              border: '1px solid #bababa'
            }}
          >
            Repositório
          </Button>
        </div>
      </CardProject>

      <CardProject>
        <ImageProductEdit src={Convertmoney} alt="imagem-do-projeto" />
        <Name>Convert Money</Name>
        <Line></Line>
        <Resume>
          Uma pequena página feita para aprendizado em HTML5, CSS3 e JavaScript.
          A sua finalidade é converter de moeda brasileira para Euro, Bitcoin e
          Dólar americano.
        </Resume>
        <div>
          <Button onClick={ConvertMoney}>Visualizar</Button>
          <Button
            onClick={ConvertMoneyRepositorio}
            style={{
              backgroundColor: 'rgba(139, 0, 0, .2)',
              border: '1px solid #bababa'
            }}
          >
            Repositório
          </Button>
        </div>
      </CardProject>

      <CardProject>
        <ImageProductEdit src={Cartaovisita} alt="imagem-do-projeto" />
        <Name>Cartão de Visitas</Name>
        <Line></Line>
        <Resume>
          Feito pensado em um cartão de visita como o monocard porém feito
          somente em HTML5 e CSS3. Contém links que ao clicar irão direto para
          os destinatários referentes como o telefone, WhatsApp, LinkedIn e
          e-mail.
        </Resume>

        <div>
          <Button onClick={CartaoVisita}>Visualizar</Button>
          <Button
            onClick={CartaoVisitaRepositorio}
            style={{
              backgroundColor: 'rgba(139, 0, 0, .2)',
              border: '1px solid #bababa'
            }}
          >
            Repositório
          </Button>
        </div>
      </CardProject>

      <CardProject>
        <ImageProductEdit src={Easyshopping} alt="imagem-do-projeto" />
        <Name>Easy Shopping</Name>
        <Line></Line>
        <Resume>
          Foi feito em HTML5 e CSS3, e uma das páginas que foi essenciais para o
          aprendizado e a minha prática com estas tecnologias.
        </Resume>
        <div>
          <Button onClick={EasyShopping}>Visualizar</Button>
          <Button
            onClick={EasyShoppingRepositorio}
            style={{
              backgroundColor: 'rgba(139, 0, 0, .2)',
              border: '1px solid #bababa'
            }}
          >
            Repositório
          </Button>
        </div>
      </CardProject>

      <CardProject>
        <ImageProductEdit src={Wecare} alt="imagem-do-projeto" />
        <Name>We Care</Name>
        <Line></Line>
        <Resume>
          Uma página simples, porém muito importante para o meu aprendizado no
          início, pois neste mesmo projeto foi feito um trabalho de deixar
          responsivos para os demais dispositivos. E feito com HTML5 e CSS3.
        </Resume>
        <div>
          <Button onClick={WeCare}>Visualizar</Button>
          <Button
            onClick={WeCareRepositorio}
            style={{
              backgroundColor: 'rgba(139, 0, 0, .2)',
              border: '1px solid #bababa'
            }}
          >
            Repositório
          </Button>
        </div>
      </CardProject>

      <CardProject>
        <ImageProductEdit src={Widecoverage} alt="imagem-do-projeto" />
        <Name>Wide Coverage</Name>
        <Line></Line>
        <Resume>
          Feita bem simples com HTML5 e CSS3 para ir praticando, aprendendo
          sobre essas tecnologias para manter em dia os estudos.
        </Resume>
        <div>
          <Button onClick={WideCoverage}>Visualizar</Button>
          <Button
            onClick={WideCoverageRepositorio}
            style={{
              backgroundColor: 'rgba(139, 0, 0, .2)',
              border: '1px solid #bababa'
            }}
          >
            Repositório
          </Button>
        </div>
      </CardProject>
    </AllCardsProjects>
  )
}
