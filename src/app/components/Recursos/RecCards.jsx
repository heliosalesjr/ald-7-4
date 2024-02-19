import React from 'react';
import { SiKahoot } from "react-icons/si";
import { MdQuiz } from "react-icons/md";
import { SiGoogleforms } from "react-icons/si";
import { IoRocket } from "react-icons/io5";
import { TbGoGame } from "react-icons/tb";
const RecCards = () => {
  return (
    <div className='bg-slate-200'>
      <div className='max-w-7xl mx-auto'>
          <div className="py-16 overflow-hidden">
            <div className="container m-auto px-6 space-y-8 text-slate-700 md:px-12">
              <div>
                
                <h2 className="mt-4 text-2xl text-slate-900 font-bold md:text-4xl">Ferramentas online para montagem de Quiz</h2>
              </div>
              <div className="pb-8 mt-16 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
                
                <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                  <div className="relative p-8 space-y-8">
                      <TbGoGame className='text-3xl text-slate-800 hover:text-primary'/>
                    <div className="space-y-2">
                      <h5 className="text-xl pb-4 font-bold text-primary transition group-hover:text-primary"><a 
                          href="https://wordwall.net/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className='underline text-blue-700 hover:text-purple-900'>Wordwall
                        </a></h5>
                      <p className="text-sm text-gray-600">
                      Esta plataforma permite a criação de até cinco jogos gratuitos utilizando diversos modelos de atividades como jogo da memória, roda da fortuna, perguntas e respostas e associação de alternativas. Veja um tutorial dessa ferramenta
                        {' '}<a 
                          href="https://youtu.be/khKkS_T5V3s" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className='underline text-blue-700 hover:text-purple-900'>aqui
                        </a>{''}.
                      </p>
                    
                    </div>
                    
                  </div>
                </div>
                
                <div className="relative group pb-4 bg-white transition hover:z-[1] hover:shadow-2xl">
                  <div className="relative p-8 space-y-8">
                      <SiKahoot className='text-3xl text-slate-800 hover:text-primary'/>
                    <div className="space-y-2">
                    <h5 className="text-xl pb-4 font-bold text-primary transition group-hover:text-primary"><a 
                          href="https://kahoot.com/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className='underline text-blue-700 hover:text-purple-900'>Kahoot
                        </a></h5>
                    
                      <p className="text-sm text-gray-600">
                      Esta é uma plataforma digital e colaborativa para a criação de quizzes. A versão gratuita permite a criação de jogos com dois tipos de perguntas: perguntas e respostas e verdadeiro ou falso. Veja um tutorial dessa ferramenta
                        {' '}<a 
                          href="https://www.youtube.com/watch?v=6MWUMYmAImo" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className='underline text-blue-700 hover:text-purple-900'>aqui
                        </a>{''}.
                      </p>
                      
                    
                    </div>
                    
                  </div>
                </div>

                <div className="relative group pb-4 bg-white transition hover:z-[1] hover:shadow-2xl">
                  <div className="relative p-8 space-y-8">
                      <MdQuiz className='text-3xl text-slate-800 hover:text-primary'/>
                    <div className="space-y-2">
                    <h5 className="text-xl pb-4 font-bold text-primary transition group-hover:text-primary"><a 
                          href="https://quizizz.com/?lang=pt-br&lng=pt-BR" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className='underline text-blue-700 hover:text-purple-900'>Quizizz
                        </a></h5>
                    
                      <p className="text-sm text-gray-600">
                      É uma plataforma on-line amigável para criação de quizes. Veja um tutorial dessa ferramenta
                        {' '}<a 
                          href="https://youtu.be/dI--a1xIsEY" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className='underline text-blue-700 hover:text-purple-900'>aqui
                        </a>{''}.
                      </p>
                    </div>
                    
                  </div>
                </div>

                <div className="relative group pb-4 bg-white transition hover:z-[1] hover:shadow-2xl">
                  <div className="relative p-8 space-y-8">
                      <SiGoogleforms className='text-3xl text-slate-800 hover:text-primary'/>
                    <div className="space-y-2">
                    <h5 className="text-xl pb-4 font-bold text-primary transition group-hover:text-primary"><a 
                          href="https://forms.google.com/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className='underline text-blue-700 hover:text-purple-900'>Google Formulários
                        </a></h5>
                      
                      <p className="text-sm text-gray-600">
                      A ferramenta Google para criação de formulários permite a criação de diferentes tipos de perguntas e mostra gráficos e estatísticas interessantes sobre o desempenho coletivo e individual no quiz. Acesse um tutorial e um modelo de quiz 
                        {' '}<a 
                          href="https://www.youtube.com/watch?v=Sz3dtCKkWNk" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className='underline text-blue-700 hover:text-purple-900'>aqui
                        </a>{''}.
                      </p>

                    </div>
                    
                  </div>
                </div>
                
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default RecCards;

