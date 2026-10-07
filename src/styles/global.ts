import { createGlobalStyle } from 'styled-components'

export const Cores = {
principal: '#1E90FF',
principalEscuro: '#0d6efd',
perigo: '#dc3545',
sucesso: '#28a745',
texto: '#333',
textoClaro: '#666',
fundo: '#f5f5f5',
branco: '#fff',
borda: '#ddd'
}

const EstiloGlobal = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
list-style: none;
}

body {
background-color: ${Cores.fundo};
color: ${Cores.texto};
}
`

export default EstiloGlobal