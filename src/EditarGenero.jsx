import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const EditarGenero = ({ match }) => {
    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        axios
            .get('/api/genres/' + match.params.id)
            .then(res => {
                setName(res.data.name)
            })
    }, [match.params.id])

    const save = () => {
        axios
            .put('/api/genres/' + match.params.id, {
                name: name
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
            <h1>Editar Genero</h1>
            <div className='form-group'>
                <label htmlFor='name'>Nome</label>
                <input type='text' className='form-control' value={name} onChange={onChange} id='name' placeholder='Nome do gênero' />
            </div>
            <button onClick={save} type='button' className='btn btn-primary'>Salvar</button>
        </div>
    )
}

export default EditarGenero