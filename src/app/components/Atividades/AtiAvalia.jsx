import React from 'react';
import { PiChalkboardTeacher } from 'react-icons/pi';
import { PiMathOperationsFill } from 'react-icons/pi';
import { MdOutlineSafetyDivider } from 'react-icons/md';

const AtiAvalia = () => {
  return (
    <div className="container mt-12 mx-auto max-w-7xl md:px-6">
      {/* Section: Design Block */}
      <section className="mb-32 text-center">
        <h2 className="mb-8 text-4xl text-slate-600 font-bold">
        Avaliação de conteúdos
        </h2>
        <p className='max-w-5xl text-center text-slate-700 p-2 mb-8'>Este é o tipo mais tradicional de avaliação, pois visa identificar a bagagem de conteúdo que o aluno já possui e/ou que foi adquirido durante certo período letivo. Veja abaixo alguns tipos mais tradicionais de avaliação.</p>
        <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
          <div className="mb-4 md:mb-0">
            <div className="mb-6 inline-block rounded-full bg-gradient-to-tl from-primary-focus to-primary p-4 text-primary">
              <PiChalkboardTeacher className="h-8 w-8 text-white" />
            </div>
            <h1 className='font-semibold py-2 pb-4'>Avaliação Diagnóstica</h1>
            <p className="text-slate-600 px-4">
            Serve para que o professor identifique os conteúdos que o estudante já domina ou que apresenta defasagem. Deve ser aplicada antes e durante o ensino de determinado conteúdo.
            </p>
          </div>

          <div className="mb-4 md:mb-0">
            <div className="mb-6 inline-block rounded-full bg-gradient-to-tl from-primary-focus to-primary p-4 text-primary">
              <PiMathOperationsFill className="h-8 w-8 text-white" />
            </div>
            <h1 className='font-semibold py-2 pb-4'>Avaliação Formativa</h1>
            <p className="text-slate-600 dark:text-neutral-600 px-4">
            Serve como forma de acompanhar se os alunos estão atingindo os objetivos propostos para uma determinada sequência de aulas. Deve ser aplicada durante o ensino de determinado conteúdo.
            </p>
          </div>

          <div className="mb-4 md:mb-0">
            <div className="mb-6 inline-block rounded-full bg-gradient-to-tl from-primary-focus to-primary p-4 text-primary">
              <MdOutlineSafetyDivider className="h-8 w-8 text-white" />
            </div>
            <h1 className='font-semibold py-2 pb-4'>Avaliação Somativa</h1>
            <p className="text-slate-600 dark:text-neutral-600 px-4">
            Serve para determinar, através de nota ou menção, o grau de domínio do conteúdo ensinado. Deve ser aplicada ao final do ensino de determinado conteúdo.
            </p>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default AtiAvalia;
