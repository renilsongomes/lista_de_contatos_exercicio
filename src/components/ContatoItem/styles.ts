import styled from 'styled-components'
import { Cores } from '../../styles/global'

export const Card = styled.li`
background-color: ${Cores.branco};
border-radius: 8px;
padding: 16px;
margin-bottom: 16px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
display: flex;
flex-direction: column;
gap: 8px;
`

export const Nome = styled.h3`
font-size: 18px;
color: ${Cores.texto};
`

export const Info = styled.p`
font-size: 14px;
color: ${Cores.textoClaro};
`

export const Campo = styled.input`
padding: 8px;
border: 1px solid ${Cores.borda};
border-radius: 4px;
font-size: 14px;
width: 100%;
`

export const BarraAcoes = styled.div`
display: flex;
gap: 8px;
margin-top: 8px;
`

export const Botao = styled.button<{ variante?: 'salvar' | 'perigo' | 'neutro' }>`
font-size: 13px;
font-weight: bold;
padding: 8px 14px;
border: none;
border-radius: 6px;
cursor: pointer;
color: ${Cores.branco};
transition: opacity 0.2s;
background-color: ${(props) => {
if (props.variante === 'salvar') return Cores.sucesso
if (props.variante === 'perigo') return Cores.perigo
return Cores.principal
}};

&:hover {
opacity: 0.85;
}
`