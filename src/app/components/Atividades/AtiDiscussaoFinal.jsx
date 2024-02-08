import React from 'react';


const AtiDiscussaoFinal = () => {
  return (
    <>
        <div className='pt-8'>
            <div className="flex flex-col max-w-7xl mx-auto md:flex-row items-center justify-center p-8">
                
                <div className="md:w-1/2 mb-4 md:mb-0">
                    <img
                    src="/images/hi5_2.jpg"
                    alt="Imagem"
                    className="w-full h-full object-cover rounded-md"
                    />
                </div>

                
                <div className="px-4 md:w-1/2 md:ml-4">
                    <h1 className="text-slate-800 text-2xl md:text-4xl font-bold mb-4">A discussão final</h1>
                    <p className="text-slate-700 py-2">Ao planejar o projeto, os estudantes devem decidir qual a maneira de divulgar seus resultados. À medida que o projeto vai se aproximando do fim, é necessário organizar o evento de divulgação. Com isto, se dá início ao fechamento do projeto.</p>
                    <p className='py-2 text-slate-700'>Após o evento de divulgação, deve-se organizar um último encontro para a discussão de  desafios e aprendizados do trajeto. Veja abaixo sobre o que alunos e professores podem refletir neste encontro:</p>
                </div>
            </div>

            
        </div>

        <div className="flex flex-col md:flex-row justify-center bg-slate-100 max-w-5xl mx-auto rounded-2xl p-8">
    {/* Coluna 1 */}
    <div className="flex flex-col items-center mx-4 md:w-1/2 md:order-1">
        <h1 className="text-center text-2xl font-semibold text-primary-focus py-2">Alunos</h1>
        <ul className="text-center">
            <li className='text-slate-700 m-4'>• Estratégias para melhorar a comunicação do projeto;</li>
            <li className='text-slate-700 m-4'>• Quais foram os aprendizados referentes à conteúdos escolares;</li>
            <li className='text-slate-700 m-4'>• Quais competências e habilidades foram aprendidas para a vida além da escola.</li>
        </ul>
    </div>

    {/* Coluna 2 */}
    <div className="flex flex-col items-center mx-4 md:w-1/2 md:order-2 mt-4 md:mt-0">
        <h1 className="text-center text-2xl font-semibold text-primary-focus py-2">Professores</h1>
        <ul className="text-center">
            <li className='text-slate-700 m-4'>• Maneiras de apresentar o planejamento para a comunidade;</li>
            <li className='text-slate-700 m-4'>• Revisão de estratégias e processos para uma aplicação futura;</li>
            <li className='text-slate-700 m-4'>• Vislumbrar novas aplicações do programa.</li>
        </ul>
    </div>
</div>
    </>
    
  );
};

export default AtiDiscussaoFinal;

