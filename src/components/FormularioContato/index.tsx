import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { adicionar } from '../../store/reducers/contatos'
import * as S from './styles'

const FormularioContato = () => {
const dispatch = useAppDispatch()
const [nome, setNome] = useState('')
const [email, setEmail] = useState('')
const [telefone, setTelefone] = useState('')

function cadastrar(e: FormEvent) {
e.preventDefault()

if (!nome.trim() || !email.trim() || !telefone.trim()) {
    alert('Preencha todos os campos!')
    return
}

dispatch(adicionar({ nome, email, telefone }))
setNome('')
setEmail('')
setTelefone('')
}

return (
<S.Form onSubmit={cadastrar}>
    <S.Titulo>Adicionar novo contato</S.Titulo>
    <S.Campo
    type="text"
    placeholder="Nome completo"
    value={nome}
    onChange={(e: ChangeEvent<HTMLInputElement>) => setNome(e.target.value)}
    />
    <S.Campo
    type="email"
    placeholder="E-mail"
    value={email}
    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
    />
    <S.Campo
    type="tel"
    placeholder="Telefone"
    value={telefone}
    onChange={(e: ChangeEvent<HTMLInputElement>) =>
        setTelefone(e.target.value)
    }
    />
    <S.BotaoAdicionar type="submit">Adicionar contato</S.BotaoAdicionar>
</S.Form>
)
}

export default FormularioContato