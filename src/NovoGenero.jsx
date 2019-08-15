import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const NovoGenero = () => {
    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)
    const save = () => {
        axios
            .post('/api/genres', {
                name
            })
            .then(res => {
                setSuccess(true)
            })
    }

    if (success) {
        return <Redirect to='/generos' />
    }

    const onChange = evt => {
        setName(evt.target.value)
    }

    return (
        <div className='container'>
            <h1>Novo Genero</h1>
            <div className='form-group'>
                <label htmlFor='name'>Nome</label>
                <input type='text' className='form-control' value={name} onChange={onChange} id='name' placeholder='Nome do gênero' />
            </div>
            <button onClick={save} type='button' className='btn btn-primary'>Salvar</button>
        </div>
    )
}

export default NovoGenero
