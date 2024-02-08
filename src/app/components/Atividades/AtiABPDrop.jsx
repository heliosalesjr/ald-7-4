import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";

function AtiABPDrop() {
    return (
        <div className="max-w-7xl mx-auto p-8 flex flex-col md:flex-row justify-center items-center">
          <div className="text-center md:w-1/3">
            <h1 className="text-2xl md:text-4xl text-slate-600 font-bold mb-4">Estratégias</h1>
            <p className="text-slate-600">
            Aqui podemos ver algumas estratégias de avaliação na Aprendizagem Baseada em Projetos.
            </p>
          </div>
    
          
          <div className="w-full py-8 md:w-2/3 ml-0 md:ml-8 pb-8 md:pb-0">
          <Accordion variant="shadow">
          <AccordionItem key="1" aria-label="Accordion 1" title="Avaliação por rubricas">
            <p className='py-2 font-bold'>O que é</p>
            <p className='py-2'>A rubrica é uma breve descrição de procedimentos ou um guia de pontuação que lista e organiza diferentes critérios para classificar o desempenho dos alunos. Estes critérios são chamados indicadores. Os indicadores devem conter quatro itens:</p>
            <ul className='py-2'>
                <li className='py-2'>Descrição detalhada da tarefa</li>
                <li className='py-2'>Aspectos que serão avaliados</li>
                <li className='py-2'>Escalas de diferentes níveis de desempenho</li>
                <li className='py-2'>Descrição dos diferentes níveis de desempenho</li>
                <li className='py-2'>Pode ser utilizada tanto para avaliar projetos quanto para aprendizagem de conteúdos.</li>
            </ul>
            <p className='py-2 font-bold'>Tipos</p>
            <p className='py-2'>Rubrica holística: Oferece indicadores somente voltados para o desenvolvimento do trabalho desenvolvido pelo aluno. Confira um exemplo de rubrica holística aqui. (quadro 4.3)</p>
            <p className='py-2'>Rubrica analítica/descritiva: Possuem múltiplos indicadores que permitem a análise de várias partes da tarefa. Estas são mais preferíveis que as rubricas holísticas, pois fornecem mais orientações aos alunos. Confira um exemplo de rubrica analítica/ descritiva {' '}<a href="https://docs.google.com/spreadsheets/d/1vwi7PhbgHWGBV_rjRzPg4kOGKXsxq9hs0iPYnKAvHEE/edit?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='underline text-sky-700 hover:text-purple-700'>
                        aqui
                    </a>{''}.</p>
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Autoavaliação ">
            <p className='py-2 font-bold'>O que é</p>
            <p className='py-2'>É o processo no qual os alunos podem refletir e avaliar seu próprio desempenho durante a execução de uma determinada atividade.</p>
            <p className='py-2 font-bold'>Tipos</p>
            <p className='py-2'>Autoavaliação reflexiva: É um tipo de autoavaliação onde o estudante registra seu progresso e reflete sobre sua própria aprendizagem. Pode ser feita através de registro em diário, ou diário de bordo.</p>
            <p className='py-2'>Autoavaliação numérica: Este tipo de avaliação é composto por descritores acompanhados de uma escala numérica e os alunos devem atribuir uma nota ao seu desempenho em cada descritor.</p>
            <p className='py-2'>Autoavaliação aberta: Este é o tipo de autoavaliação mais parecido com o que os estudantes encontrarão no mercado de trabalho, pois é composto de perguntas abertas que levam a respostas específicas sobre um determinado aspecto de seu trabalho.</p>
            </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Avaliação de colegas">
            <p className='py-2 font-bold'>O que é</p>
            <p className='py-2'>É a oportunidade de membros de grupos oferecerem um feedback formalizado sobre o desempenho de seus colegas. Possui a estrutura de uma autoavaliação, mas é voltada para a avaliação de seus colegas de grupo.</p>
            <p className='py-2 font-bold'>Tipos</p>
            <p className='py-2'>Autoavaliação numérica: Este tipo de avaliação é composto por descritores acompanhados de uma escala numérica e os alunos devem atribuir uma nota ao desempenho de cada colega em cada descritor.</p>
            <p className='py-2'>Autoavaliação aberta: É composta de perguntas abertas onde os estudantes devem fornecer respostas específicas sobre um determinado aspecto do desenvolvimento do trabalho de seu(s) colega(s) durante a execução de um projeto.</p>
          </AccordionItem>
          <AccordionItem key="4" aria-label="Accordion 4" title="Avaliação de portfólio">
            <p className='py-2 font-bold'>O que é</p>
            <p className='py-2'>Durante o desenvolvimento do projeto os alunos produzirão diversos artefatos. O conjunto destes artefatos compõem o portfólio. É indicado que professores e professoras avaliem estes artefatos, juntamente com demais registros do desenvolvimento das atividades, para compor a nota final do projeto.</p>
            <p className='py-2 font-bold'>Tipos</p>
            <p className='py-2'>Autoavaliação de artefatos individuais: Os alunos fazem uma autoavaliação do artefato produzido e o professor analisa e corrige esta autoavaliação.</p>
            <p className='py-2'>Avaliação de artefatos por colegas: Neste caso um grupo pede a outro grupo que avalie o artefato produzido e considere as notas e comentários recebidos pelos colegas.</p>
            <p className='py-2'>Rubricas para avaliação de artefatos individuais: O professor propõe atividades a serem desenvolvidas e com elas as rubricas para a avaliação. Estas guiarão a avaliação do artefato e comporá a nota do portfólio.</p>
            <p className='py-2'>Impacto do produto da ABP: Neste tipo de avaliação deve-se considerar se a comunidade adotou, de alguma forma, recomendações geradas através do projeto.</p>
          </AccordionItem>
        </Accordion>
          </div>
        </div>
      );
    };

export default AtiABPDrop