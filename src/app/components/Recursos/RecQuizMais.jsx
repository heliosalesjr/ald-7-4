import React from 'react'

function RecQuizMais() {
    return (
        <div className="relative w-full ">
          {/* Camada com gradiente e opacidade */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary-focus opacity-40"></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('images/stud4.png')",
            }}
          ></div>
    
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-focus opacity-70"></div>
    
          {/* Conteúdo sobreposto */}
          <div className="relative z-10 text-white text-center py-20 max-w-3xl mx-auto">
            <div className='border-white border rounded-xl p-4'>
                <h1 className="text-4xl font-bold mb-4 pt-8 px-8">Dicas para montar um Quiz</h1>
                <p className="text-lg font-semibold px-8 py-4">
                O quiz é uma rica oportunidade para criar um ambiente mais dinâmico e descontraído para a turma, e costuma ser uma excelente ferrameta para a motivação e participação nas aulas.
                </p>
                <p className='py-2'>As alternativas de cada pergunta do quiz devem ser de múltipla escolha ou verdadeiro e falso.</p>
                <p className='py-2'>O quiz pode ser elaborado em fichas, com uso de lápis e papel, ou por meio de sites.</p>
                <p className='py-2'>Verifique a clareza e coerência de cada uma das perguntas para que seja fácil de entender o que se pede.</p>
                <p className='py-2'>Apesar de ser uma aula diferente, reforce a necessidade de um ambiente descontraído e respeitoso.</p>
                
            </div>
            
          </div>
        </div>
      );
    };

export default RecQuizMais