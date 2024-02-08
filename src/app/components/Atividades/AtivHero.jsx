import React from 'react';

const AtivHero = () => {
  return (
    <div className="bg-gradient-to-b from-primary to-primary-focus mx-auto h-[40rem] flex items-center justify-center text-white">
      <div className='max-w-screen-xl'>
        <div className="text-center flex items-center justify-between px-12">
            <div>
            <h1 className=" text-5xl font-bold tracking-tight text-white md:text-5xl xl:text-6xl">
            Atividades do Projeto: Diagnóstico
            </h1>
            <p className="text-lg text-white py-8">
            Com as atividades em andamento começam a surgir os resultados. Vamos conhecer diferentes métodos avaliativos para diversificar maneiras de identificar dificuldades e aprendizados e também enriquecer a experiência dos estudantes.
            </p>
            </div>
            <div className="hidden md:block">
                <img src="images/ilustra_mercado.png" alt="Capa" className="px-8 w-[2000px]" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default AtivHero;