import React from 'react';
import {Accordion, AccordionItem} from "@nextui-org/react";

const AtiDiarioBordo = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 flex justify-center items-center">
     
      <div className="text-center md:w-1/2">
        <h1 className="text-2xl md:text-4xl text-slate-600 font-bold mb-4">Diário de Bordo</h1>
        <p className="text-slate-600">
        Ao longo de toda a execução do programa Aprendendo a Lidar com Dinheiro, será importante registrar o que acontece: os temas tratados em cada aula, a reação dos estudantes, como eles avançam em seu Projeto Coletivo, como se saem nos exercícios propostos no Livro do Estudante, e assim por diante. Para isso, você pode elaborar um Diário de Bordo.
        </p>
      </div>

      
      <div className="md:w-1/2 ml-8 pb-8">
        <Accordion variant="shadow">
          <AccordionItem key="1" aria-label="Accordion 1" title="Anotações">
            <p>As anotações podem ser feitas em um texto narrativo, como quem conta um caso ou de forma esquemática. Você pode anexar fotos ou vídeos que mostrem algum momento do processo. Assim, você poderá visualizar e avaliar toda a jornada quando esta chegar ao fim.</p>
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Relato">
            <p>Da mesma forma que você está produzindo seu Diário de Bordo, peça aos jovens que também mantenham um, registrando as aulas e principalmente as atividades do Projeto Coletivo. Os registros podem ser em forma de textos, fotos, vídeos, entre outros. Essas anotações vão compor o relato da experiência de seu projeto, importante para o monitoramento da aprendizagem.</p>
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Saiba mais">
            <p>Na seção “Para o Professor”, vamos conhecer uma ferramenta digital para o desenvolvimento do diário. Enquanto isso, para saber mais sobre Diário de Bordo, você pode acessar {' '}
                    <a href="https://sites.google.com/beieducacaopedagogico.com/ef-6-ano-ciclo-2/atividades-do-projeto#:~:text=Na%20se%C3%A7%C3%A3o%20%E2%80%9CPara%20o%20Professor%E2%80%9D%2C%20vamos%20conhecer%20uma%20ferramenta%20digital%20para%20o%20desenvolvimento%20do%20di%C3%A1rio.%20Enquanto%20isso%2C%20para%20saber%20mais%20sobre%20Di%C3%A1rio%20de%20Bordo%2C%20voc%C3%AA%20pode%20acessar%20este%20site." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='underline hover:text-sky-700'>
                        este site
                    </a>
                .</p>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default AtiDiarioBordo;
