    import { createSlice, PayloadAction } from '@reduxjs/toolkit'
    import { Contato } from '../../models/Contato'

    type ContatosState = {
    itens: Contato[]
    }

    const initialState: ContatosState = {
    itens: [
        {
        id: 1,
        nome: 'Ana Silva',
        email: 'ana.silva@email.com',
        telefone: '(11) 99999-1111'
        },
        {
        id: 2,
        nome: 'Bruno Costa',
        email: 'bruno.costa@email.com',
        telefone: '(21) 98888-2222'
        }
    ]
    }

    const contatosSlice = createSlice({
    name: 'contatos',
    initialState,
    reducers: {
        adicionar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
        const ultimo = state.itens[state.itens.length - 1]
        const novoContato: Contato = {
            ...action.payload,
            id: ultimo ? ultimo.id + 1 : 1
        }
        state.itens.push(novoContato)
        },
        remover: (state, action: PayloadAction<number>) => {
        state.itens = state.itens.filter((c) => c.id !== action.payload)
        },
        editar: (state, action: PayloadAction<Contato>) => {
        const index = state.itens.findIndex((c) => c.id === action.payload.id)
        if (index >= 0) {
            state.itens[index] = action.payload
        }
        }
    }
    })

    export const { adicionar, remover, editar } = contatosSlice.actions
    export default contatosSlice.reducer