import React from 'react'
import Link from 'next/link';

function MatButton() {
  return (
    <>
        <div className="items-center justify-center pt-8">
       
            <p className="p-6 text-center text-gray-700 text-lg">
            Na próxima seção, apresentaremos uma ferramenta e uma estratégia didática ativa para facilitar a aplicação do programa.</p>

           
        </div>
        <div className='flex items-center justify-center pb-8'>
            <Link href="/recursos">
              <button className='btn btn-primary text-white'>Recursos didáticos</button>
            </Link>
        </div>
    
    </>
  )
}

export default MatButton