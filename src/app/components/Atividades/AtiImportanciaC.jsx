import React from 'react'

function AtiImportanciaC() {
    return (
        <div className="relative w-full mt-16">
          {/* Camada com gradiente e opacidade */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary-focus opacity-40"></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('images/alunos4.png')",
            }}
          ></div>
    
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-focus opacity-70"></div>
    
          {/* Conteúdo sobreposto */}
          <div className="relative z-10 text-white text-center py-20 max-w-3xl mx-auto">
            <div className='border-white border rounded-xl p-4'>
                <h1 className="text-4xl font-bold mb-4 pt-8 px-8">A importância da Culminância</h1>
                <p className="text-lg font-semibold px-8 py-4">
                Com ela, os alunos:
                </p>
                <p className='py-2'>Reconhecem sua aprendizagem.</p>
                <p className='py-2'>Fortalecem a autoestima.</p>
                <p className='py-2'>Aumentam seu interesse pelos estudos.</p>
                <p className='py-2'>Se sentem valorizados e respeitados em suas diferenças.</p>
                <p className='py-2'>Descobrem habilidades diversas entre si.</p>
                <p className='py-2'>Despertam para seus sonhos.</p>
                <p className='py-2'>Fazem a autoavaliação.</p>
            </div>
            
          </div>
        </div>
      );
    };

export default AtiImportanciaC