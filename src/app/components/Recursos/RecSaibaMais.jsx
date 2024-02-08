import React from 'react';

const RecSaibaMais = () => {
  return (
    <div className="bg-white max-w-7xl mx-auto py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col overflow-hidden rounded-lg bg-gradient-to-tl from-primary to-primary-focus sm:flex-row md:h-80">
           
            <div className="order-first h-48 w-full sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
            <img
                src="images/mobile.jpg"
                loading="lazy"
                alt="Photo by Helio Sales Jr."
                className="h-full w-full object-cover object-center"
            />
            </div>
            
            <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
            <h2 className="mb-4 mx-4 mt-4 text-xl font-bold text-white md:text-2xl lg:text-3xl">Artigos interessantes sobre as redes sociais</h2>

            <p className=" mx-4 text-white py-2">
                <a href='https://www.google.com/url?q=https%3A%2F%2Fwww.oficinadanet.com.br%2Fpost%2F16064-quais-sao-as-dez-maiores-redes-sociais&sa=D&sntz=1&usg=AOvVaw3vVQ_UuiX8afJS_SSH7OsD' target='blank' className='underline text-white hover:text-purple-200'>
                As 10 maiores redes sociais utilizadas no mundo.
                </a>
                
            </p>
            <p className="mx-4 text-white py-2">
                <a href='https://www.google.com/url?q=https%3A%2F%2Fnews.comschool.com.br%2Fvantagens-e-desvantagens-das-redes-sociais-news-comschool%2F&sa=D&sntz=1&usg=AOvVaw3P3psru48Sg19f0quFFCOR' target='blank' className='underline text-white hover:text-purple-200'>
                    Vantagens e desvantagens do uso das redes sociais.
                </a>
            </p>
            
            <p className="mx-4 text-white py-2 mb-4">
                <a href='https://www.google.com/url?q=https%3A%2F%2Fnovaescola.org.br%2Fconteudo%2F1325%2F4-redes-sociais-para-usar-na-educacao%3Fgclid%3DCj0KCQiA8vSOBhCkARIsAGdp6RQ8D2FfBPkJ_Fgt7c4xt358Aw2vNz09WyH26GJKX5m0YhwB0Trz75oaAilsEALw_wcB&sa=D&sntz=1&usg=AOvVaw2mOCOiSGr0AA89M8ptvhmh' target='blank' className='underline text-white hover:text-purple-200'>
                    Usando redes sociais na educação.
                </a>
            </p>
            
            </div>
            
        </div>
        </div>
    </div>
  

  );
};

export default RecSaibaMais;