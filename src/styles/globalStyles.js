import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Dosis', sans-serif;
    font-family: 'Montserrat', sans-serif;
    outline: none;
 }

 &::-webkit-scrollbar {
    width: 9px;
  }
  /* &::-webkit-scrollbar-button {
    width: 10px;
    border-radius: 0 0 2px 2px;
    background: #ff0023;
  } */
  &::-webkit-scrollbar-track {

    background-color: #0a0a0a;
  }
  /* &::-webkit-scrollbar-track-piece {
    width: 100px;
    border-radius: 30px;
    background: #ff0023;
  } */
  &::-webkit-scrollbar-thumb {
    border-radius: 30px;
    background: #C0C0C0;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(192,192,192, .7);
  }

  &::-webkit-scrollbar-thumb:active {
    background: rgba(192,192,192, .9);
  }
  /* &::-webkit-scrollbar-corner {
    width: 100px;
    color: #ff0023;
  } */
  /* &::-webkit-resizer {
    width: 100px;
    background: #ff0023;
  } */
`
