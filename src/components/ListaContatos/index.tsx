import { useAppSelector } from '../../store/hooks'
import ContatoItem from '../ContatoItem'
import * as S from './styles'

const ListaContatos = () => {
const { itens } = useAppSelector((state) => state.contatos)

if (itens.length === 0) {
return (
    <S.Container>
    <S.MensagemVazia>
        Nenhum contato cadastrado. Adicione o primeiro! 📒
    </S.MensagemVazia>
    </S.Container>
)
}

return (
<S.Container>
    <ul>
    {itens.map((c) => (
        <ContatoItem
        key={c.id}
        id={c.id}
        nome={c.nome}
        email={c.email}
        telefone={c.telefone}
        />
    ))}
    </ul>
</S.Container>
)
}

export default ListaContatos