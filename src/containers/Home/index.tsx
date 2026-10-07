import styled from 'styled-components'
import FormularioContato from '../../components/FormularioContato'
import ListaContatos from '../../components/ListaContatos'
import { Cores } from '../../styles/global'

const Container = styled.main`
max-width: 700px;
margin: 0 auto;
padding: 40px 20px;
`

const Titulo = styled.h1`
font-size: 28px;
color: ${Cores.principal};
margin-bottom: 8px;
`

const Subtitulo = styled.p`
font-size: 15px;
color: ${Cores.textoClaro};
margin-bottom: 32px;
`

const Home = () => (
<Container>
<Titulo>📒 Lista de Contatos</Titulo>
<Subtitulo>Gerencie seus contatos de forma simples</Subtitulo>
<FormularioContato />
<ListaContatos />
</Container>
)

export default Home