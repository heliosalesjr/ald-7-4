import React from 'react';
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3, TbCircleNumber4, TbCircleNumber5, TbCircleNumber6 } from "react-icons/tb";

const AtiCulminancia = () => {
  return (
    <div className='bg-slate-600 py-8'>
        <div className="flex flex-col max-w-7xl mx-auto md:flex-row items-center justify-center sm:p-8">
        
            <div className="md:w-1/2 md:ml-4">
                <h2 className="mb-4 text-4xl text-white font-semibold px-8 ">A Culminância</h2>
                <p className='text-white px-8 pb-8'>
                É chegada a hora de celebrar as conquistas ao final do programa, destacando os resultados didáticos obtidos por você (aquisição dos conteúdos previstos) e os resultados do Projeto Coletivo dos estudantes. Para isso, vamos executar duas tarefas: o Evento de Culminância e a Discussão Final.
                </p>
                <h2 className="mb-4 text-3xl text-white font-semibold px-8 ">O Evento de Culminância</h2>
                <p className='text-white px-8'>A conclusão do projeto é um evento para a apresentação e celebração de resultados, e não o “objetivo” do projeto. Assim, se os estudantes decidirem, por exemplo, organizar uma feira, esta não é a culminância, mas sim a conclusão do projeto. A culminância abrange a organização e um encontro após a feira, o momento onde será discutido todo o processo, inclusive o que envolve o evento de conclusão do projeto.</p>
            </div>

            
            <div className="md:w-1/2 mb-4 md:mb-0 py-4">
                    <img
                    src="/images/celebrate.jpg"
                    alt="Imagem"
                    className="w-full h-full object-cover rounded-md"
                    />
                </div>
        </div>

        <div className='max-w-md sm:max-w-3xl border-3 border-primary m-4 p-4 mx-auto rounded-xl'>
            <p className='text-white m-4 p-4'>Para o evento de culminância o educador deve marcar, junto com os estudantes e com a gestão da escola, uma data para apresentar os resultados do projeto para o público a ser escolhido: outros professores, outras turmas, a comunidade do bairro, entre outros.</p>
        </div>

        
    </div>
    
  );
};

export default AtiCulminancia;
