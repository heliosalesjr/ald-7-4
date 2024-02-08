'use client'
import React from 'react';
import ReactPlayer from 'react-player';



function MatVideo1() {
    return (
        <div className='max-w-7xl mx-auto py-12'>
          <div className=" p-4 ">
            
    
            <div className="p-4 flex flex-col md:flex-row items-center">
            
              <div className="w-full md:w-1/2 pr-4">
                <div className=" mb-4">
                    <h1 className="text-4xl font-bold text-slate-700">Leitura e interpretação de tabelas e gráficos</h1>
                </div>
                <h1 className=" text-slate-700 mb-4 pr-8">Existem várias formas de organizar informações. Vamos ver um pouco sobre tabelas e dados:  Neste vídeo temos uma introdução sobre tabelas e gráficos de colunas que são utilizados para organizar algumas informações ou dados para melhor visualização. Neste primeiro vídeo iniciamos montando uma tabela a partir de uma estante de brinquedos para em seguida construir um gráfico e interpretá-lo.</h1>
              </div>
              <div className="w-full md:w-1/2">
                <ReactPlayer url='https://youtu.be/BrxdHW5ajho' width="100%" />
              </div>
            </div>
          </div>
        
        </div>
      );
    }

export default MatVideo1