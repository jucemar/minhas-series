import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const NovaSerie = () => {
    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)
    const save = () => {
        axios
            .post('/api/serie', {
                name
            })
            .then(res => {
                setSuccess(true)
            })
    }

    if (success) {
        return <Redirect to='/series' />
    }

    const onChange = evt => {
        setName(evt.target.value)
    }

    return (
        <div className='container'>
            <h1>Nova Série</h1>
            <div className='form-group'>
                <label htmlFor='name'>Nome</label>
                <input type='text' className='form-control' value={name} onChange={onChange} id='name' placeholder='Nome da série' />
            </div>
            <button onClick={save} type='button' className='btn btn-primary'>Salvar</button>
        </div>
    )
}

export default NovaSerie
