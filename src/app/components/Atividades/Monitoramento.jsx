import React from 'react';

const Monitoramento = () => {
  return (
    <div className="bg-white max-w-7xl mx-auto py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col overflow-hidden rounded-lg bg-gradient-to-tl from-primary to-primary-focus sm:flex-row md:h-80">
           
            <div className="order-first h-48 w-full sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
            <img
                src="images/monitoramento.jpg"
                loading="lazy"
                alt="Photo by Helio Sales Jr."
                className="h-full w-full object-cover object-center"
            />
            </div>
            
            <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
            <h2 className="mb-4 mx-4 text-xl font-bold text-white md:text-2xl lg:text-4xl">Monitoramento</h2>
    
            <p className="mb-8 mx-4 text-white">
            À medida que o PPDA avança, novos conceitos e novos procedimentos são aprendidos. Então, mais do que nunca, será importante monitorar o quanto esses processos estão dando resultado, por meio de jogos avaliativos coletivos e pequenos testes individuais que podem, inclusive, ser corrigidos pelos próprios jovens ou pelos colegas. Discussões também ajudam a tirar dúvidas e a aprofundar conhecimentos.
            </p>
    
            
            </div>
            {/* content - end */}
        </div>
        </div>
    </div>
  

  );
};

export default Monitoramento;