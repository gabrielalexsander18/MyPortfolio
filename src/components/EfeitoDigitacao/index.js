import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'

export const EfeitoDigitacao = ({ children }) => {
  const textOriginal = children
  const [textoAtual, setTextoAtual] = useState('')
  const [indice, setIndice] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTextoAtual(prevTexto => prevTexto + textOriginal.charAt(indice))
      setIndice(prevIndice => prevIndice + 1)
    }, 100) // Intervalo de 100 milissegundos

    return () => {
      clearInterval(timer)
    }
  }, [indice, textOriginal])

  return (
    <div>
      <h2>{textoAtual}</h2>
    </div>
  )
}

EfeitoDigitacao.propTypes = {
  children: PropTypes.string
}
