import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Generos = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios
            .get('/api/genres')
            .then(res => {
                setData(res.data.data)
            })
    }, [])

    const deleteGenero = id => {
        axios
            .delete('/api/genres/' + id)
            .then(res => {
                const filtrados = data.filter(item => item.id !== id)
                setData(filtrados)
            })
    }

    const renderizaLinha = record => {
        return (
            <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.name}</td>
                <td>
                    <Link className='btn btn-warning' to={'/generos/'+record.id}>Editar</Link>
                    <button className='btn btn-danger' type='button' onClick={() => deleteGenero(record.id)}>Remover</button>
                    
                    
                    </td>
            </tr>

        )
    }

    if (data.length === 0) {
        return (
            <div className='container'>
                <h1>Generos</h1>
                <div className='alert alert-warning' role='alert'>
                    Você não possui gêneros criados.
            </div>
            </div>
        )
    }

    return (
        <div className='container'>
            <h1>Generos</h1>
            <Link className='btn btn-primary' to='/generos/novo'>Novo gênero</Link>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>Nome</th>
                        <th scope='col'>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(renderizaLinha)}

                </tbody>
            </table>
        </div>
    )
}

export default Generos