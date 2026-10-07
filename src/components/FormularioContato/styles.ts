import styled from 'styled-components'
import { Cores } from '../../styles/global'

export const Form = styled.form`
background-color: ${Cores.branco};
padding: 20px;
border-radius: 8px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
margin-bottom: 24px;
display: flex;
flex-direction: column;
gap: 12px;
`

export const Titulo = styled.h2`
font-size: 18px;
color: ${Cores.texto};
margin-bottom: 4px;
`

export const Campo = styled.input`
padding: 10px;
border: 1px solid ${Cores.borda};
border-radius: 6px;
font-size: 14px;
width: 100%;

&:focus {
outline: none;
border-color: ${Cores.principal};
}
`

export const BotaoAdicionar = styled.button`
background-color: ${Cores.principal};
color: ${Cores.branco};
font-weight: bold;
font-size: 14px;
padding: 10px 16px;
border: none;
border-radius: 6px;
cursor: pointer;
align-self: flex-start;
transition: background-color 0.2s;

&:hover {
background-color: ${Cores.principalEscuro};
}
`