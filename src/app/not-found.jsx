import React from 'react'

export default function NotFound() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4'>
            <div className='text-center max-w-md w-full'>
                <h1 className='text-8xl md:text-9xl font-bold text-gray-800 mb-6'>404</h1>
                <h2 className='text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>Página não encontrada</h2>
                <p className='text-lg md:text-xl text-gray-600 mb-8'>
                    A página que você está procurando não existe ou foi movida.
                </p>
                <button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-4 px-8 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105'>
                    <a href="/" className='text-white no-underline'>Voltar para a página inicial</a>
                </button>
            </div>
        </div>
    )
}
