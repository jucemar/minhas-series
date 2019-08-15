import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Series = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios
            .get('/api/series')
            .then(res => {
                setData(res.data.data)
            })
    }, [])

    const deleteSerie = id => {
        axios
            .delete('/api/series/' + id)
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
                    <Link className='btn btn-warning' to={'/series/'+record.id}>Info</Link>
                    <button className='btn btn-danger' type='button' onClick={() => deleteSerie(record.id)}>Remover</button>
                    
                    
                    </td>
            </tr>

        )
    }

    if (data.length === 0) {
        return (
            <div className='container'>
                <h1>Séries</h1>
                <Link className='btn btn-primary' to='/series/novo'>Nova série</Link>
                <div className='alert alert-warning' role='alert'>
                    Você não possui séries criados.
            </div>
            </div>
        )
    }

    return (
        <div className='container'>
            <h1>Séries</h1>
            <Link className='btn btn-primary' to='/series/novo'>Nova série</Link>
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

export default Series