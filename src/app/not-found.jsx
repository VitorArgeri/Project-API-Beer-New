import React from 'react'

export default function NotFound() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <h1 className='text-4xl font-bold'>Erro 404</h1>
            <h2 className='text-2xl'>Página não encontrada</h2>
            <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded'>
                <a href="/" className='text-white no-underline'>Voltar para a página inicial</a>
            </button>
        </div>
    )
}
