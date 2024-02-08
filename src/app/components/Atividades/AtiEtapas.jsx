'use client'
import React from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

import { motion } from 'framer-motion'



const cardData = [
  {
    title: "I - Diagnóstico",
    description:
      "Traçar o perfil da turma como um todo, destacando suas qualidades e seus potenciais, e identificando dificuldades e limites que devem ser superados.",
  },
  {
    title: "II - Conteúdos e Habilidades",
    description:
      "Descrever os principais conteúdos de matemática e habilidades da BNCC a serem trabalhados.",
  },
  {
    title: "III - Planejamento",
    description:
      "Planejar o PPDA escolhendo estratégias e ferramentas que incitem a participação dos estudantes.",
  },
  {
    title: "IV - Atividades",
    description: "Executar as atividades planejadas.",
  },
  {
    title: "V - Avaliação",
    description:
      "Avaliar os resultados, verificando até que ponto os objetivos propostos foram alcançados.",
  },
  {
    title: "VI - Conclusão",
    description:
      "Planejar a Culminância das conquistas ao fim do programa, comunicando os resultados.",
  },
];

export default function AtiEtapas() {
  return (
    <>
    <div className="container mx-auto max-w-7xl">
      <h1 className="font-bold text-2xl md:text-4xl sm:text-3xl text-slate-700 py-4 text-center">Localizando-se nas Etapas do Projeto</h1>
      <p className="text-lg mt-4 py-4 text-slate-600 p-4">
      Chegamos na Etapa VI da execução do Pequeno Projeto Didático Ativo (PPDA). Aqui o projeto está finalizado e os resultados devem ser compartilhados e celebrados. Com o fim do projeto é importante também que sejam avaliadas as competências socioemocionais desenvolvidas durante o trajeto. Relembre abaixo as Etapas de desenvolvimento do PPDA.
      </p>
    </div>
    <motion.div className="container mx-auto flex flex-wrap justify-center text-center py-4"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      >
      {cardData.map((card, index) => (
        <Card key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mx-1 my-1 text-center">
              <CardHeader className="flex gap-3 text-center">
                
                <div className="flex flex-col">
                  <p className=" text-md text-primary font-black ">{card.title}</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>{card.description}</p>
              </CardBody>
            </Card>
          ))}
    </motion.div>
    
    </>
  );
}
