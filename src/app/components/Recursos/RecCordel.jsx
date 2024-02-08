import React from 'react'
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3} from "react-icons/tb";

function RecCordel() {
    return (
        <div className='bg-slate-100'>
            <div className='pt-8 pb-8 '>
                <div className="flex flex-col max-w-7xl mx-auto md:flex-row items-center justify-center p-8">
                    
                    <div className="px-4 md:w-1/2 md:ml-4">
                            <h1 className="text-slate-800 text-2xl md:text-4xl font-bold mb-4">Quiz</h1>
                            <p className="text-slate-800 py-2 pb-6">O quiz é uma rica oportunidade para criar um ambiente mais dinâmico e descontraído para a turma, e costuma ser uma excelente ferramenta para a motivação/participação nas aulas.</p>
                            <h1 className="text-slate-800 text-2xl md:text-3xl font-bold mb-4">Sugestão de atividade</h1>
                            <p className='py-2 text-slate-800'>A quinta e última parte do Livro do Estudante resgata o tema dos sonhos, apresentado no início, e faz uma retomada do que foi estudado ao longo do livro. Nossa sugestão é que os estudantes elaborem um jogo de perguntas e respostas sobre os assuntos, os conceitos e as ideias explorados no curso.</p>
                    </div>
                    <div className="md:w-1/2 mb-4 md:mb-0">
                        <img
                        src="/images/quiz.jpg"
                        alt="Imagem"
                        className="w-full h-full object-cover rounded-md"
                        />
                    </div>
    
                    
                    
                </div>

                <div className='py-8 max-w-5xl mx-auto'>
                    <div className="grid grid-cols-1 mx-auto max-w-7xl md:grid-cols-3">
                        
                        
                        <div className='bg-white p-6 rounded-lg border border-slate-500 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg hover:scale-105 transition-all duration-300'>
                            <div className="flex items-end justify-end">
                                <TbCircleNumber1 className="text-4xl text-primary-focus mb-4" />
                            </div>
                            
                            <p className='text-sm text-slate-600 text-left pb-4'>Em trio, elabore um quiz com até cinco perguntas sobre diferentes temas de Educação Financeira e conceitos da Matemática explorados ao longo do livro. O jogo deve ser respondido pelos demais colegas.</p>
                        </div>

                        <div className='bg-white p-6 rounded-lg border border-slate-500 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg hover:scale-105 transition-all duration-300'>
                            <div className="flex items-end justify-end">
                                <TbCircleNumber2  className="text-4xl text-primary-focus mb-4" />
                            </div>
                            
                            <p className='text-sm text-slate-600 text-left pb-4'>Exemplo de pergunta para o quiz:</p>
                            <p className='text-sm text-slate-900 font-semibold pb-4 text-center'>Orçamento é a listagem de objetos que determinada pessoa desejaria comprar?</p>
                            <p className='text-sm text-slate-600 pb-4 text-center'>( ) Verdadeiro</p>
                            <p className='text-sm text-slate-600 pb-4 text-center'>( ) Falso</p>
                        </div>

                        <div className='bg-white p-6 rounded-lg border border-slate-500 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg hover:scale-105 transition-all duration-300'>
                            <div className="flex items-end justify-end">
                                <TbCircleNumber3 className="text-4xl text-primary-focus mb-4" />
                            </div>
                            
                            <p className='text-sm text-slate-600 text-left pb-4'>Você pode inserir a resposta certa e uma explicação para o jogador como no exemplo abaixo:</p>
                            <p className='text-sm text-slate-900 font-semibold pb-4 text-center'>Resposta certa: Falso.</p>
                            <p className='text-sm text-slate-600 pb-4'>Justificativa: O orçamento é uma lista na qual as pessoas anotam tudo que gastam e ganham durante um determinado período (um dia, semana, mês ou ano).</p>
                        </div>

                        
                        
                    </div>
                </div>
                
             </div>  
        
        </div>
      )
    }

export default RecCordel