import { ChangeEvent, useEffect, useState } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { remover, editar } from '../../store/reducers/contatos'
import { Contato } from '../../models/Contato'
import * as S from './styles'

type Props = Contato

const ContatoItem = ({ id, nome, email, telefone }: Props) => {
const dispatch = useAppDispatch()
const [editando, setEditando] = useState(false)
const [nomeLocal, setNomeLocal] = useState(nome)
const [emailLocal, setEmailLocal] = useState(email)
const [telefoneLocal, setTelefoneLocal] = useState(telefone)

useEffect(() => {
setNomeLocal(nome)
setEmailLocal(email)
setTelefoneLocal(telefone)
}, [nome, email, telefone])

function salvar() {
dispatch(
    editar({
    id,
    nome: nomeLocal,
    email: emailLocal,
    telefone: telefoneLocal
    })
)
setEditando(false)
}

function cancelar() {
setNomeLocal(nome)
setEmailLocal(email)
setTelefoneLocal(telefone)
setEditando(false)
}

return (
<S.Card>
    {editando ? (
    <>
        <S.Campo
        value={nomeLocal}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNomeLocal(e.target.value)
        }
        placeholder="Nome completo"
        />
        <S.Campo
        value={emailLocal}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmailLocal(e.target.value)
        }
        placeholder="E-mail"
        />
        <S.Campo
        value={telefoneLocal}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTelefoneLocal(e.target.value)
        }
        placeholder="Telefone"
        />
        <S.BarraAcoes>
        <S.Botao variante="salvar" onClick={salvar}>
            Salvar
        </S.Botao>
        <S.Botao variante="neutro" onClick={cancelar}>
            Cancelar
        </S.Botao>
        </S.BarraAcoes>
    </>
    ) : (
    <>
        <S.Nome>{nome}</S.Nome>
        <S.Info>📧 {email}</S.Info>
        <S.Info>📞 {telefone}</S.Info>
        <S.BarraAcoes>
        <S.Botao variante="neutro" onClick={() => setEditando(true)}>
            Editar
        </S.Botao>
        <S.Botao
            variante="perigo"
            onClick={() => dispatch(remover(id))}
        >
            Remover
        </S.Botao>
        </S.BarraAcoes>
    </>
    )}
</S.Card>
)
}

export default ContatoItem