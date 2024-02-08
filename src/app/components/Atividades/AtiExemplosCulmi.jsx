
import { FaBookBookmark } from "react-icons/fa6";
import { GiPartyHat } from "react-icons/gi";
import { FaCameraRetro } from "react-icons/fa";
import { MdSocialDistance } from "react-icons/md";

function AtiExemplosCulmi() {
    return (
        <div className='py-8 mt-8'>
          <div className="flex flex-col mx-auto max-w-3xl">
            <div>
              <h2 className="mb-4 text-4xl text-slate-800 font-semibold px-8 text-center">Exemplos de apresentação de Culminância de um projeto</h2>
                <p className='text-slate-500 px-8 pb-8 text-center'>
               A culminância é a etapa final de um projeto. Apresentar um projeto gera engajamento e é essencial para dar visibilidade. Existem diversas formas de trabalhar a culminância:
                </p>
            </div>
            <div className='bg-slate-100 p-4 mx-4 rounded-lg border items-center justify-center shadow-md m-2 flex flex-row hover:shadow-lg hover:scale-105 transition-all duration-300'>
              <div className="m-4">
                <FaBookBookmark className="text-4xl text-primary ml-4" />
              </div>
              <div className="m-4">
              <h1 className="text-slate-800 font-semibold py-2">Portfólio</h1>
              <p className='text-sm text-slate-800 mr-8'>Criar um portfólio com os registros do projeto. Este portfólio poderá ser físico ou digital.</p>
              </div> 
            </div>

            <div className='bg-slate-100 p-4 mx-4 rounded-lg border items-center justify-center shadow-md m-2 flex flex-row hover:shadow-lg hover:scale-105 transition-all duration-300'>
              <div className="m-4">
                <GiPartyHat className="text-4xl text-primary ml-4" />
              </div>
              <div className="m-4">
              <h1 className="text-slate-800 font-semibold py-2">Evento</h1>
              <p className='text-sm text-slate-800 mr-8'>Celebração de conclusão em um evento que apresente o projeto, com depoimentos orais, imagens e vídeos para a comunidade escolar.</p>
              </div> 
            </div>

            <div className='bg-slate-100 p-4 mx-4 rounded-lg border items-center justify-center shadow-md m-2 flex flex-row hover:shadow-lg hover:scale-105 transition-all duration-300'>
              <div className="m-4">
                <FaCameraRetro className="text-4xl text-primary ml-4" />
              </div>
              <div className="m-4">
              <h1 className="text-slate-800 font-semibold py-2">Mostra fotográfica</h1>
              <p className='text-sm text-slate-800 mr-8'>Criação de uma mostra fotográfica com os registros de imagem do desenvolvimento do projeto.</p>
              </div> 
            </div>

            <div className='bg-slate-100 p-4 mx-4 rounded-lg border items-center justify-center shadow-md m-2 flex flex-row hover:shadow-lg hover:scale-105 transition-all duration-300'>
              <div className="m-4">
                <MdSocialDistance className="text-4xl text-primary ml-4" />
              </div>
              <div className="m-4">
              <h1 className="text-slate-800 font-semibold py-2">Sites e redes sociais</h1>
              <p className='text-sm text-slate-800 mr-8'>Toda forma de dar visibilidade à culminância é essencial nesse momento. É importante divulgar por meio de notícias em sites e redes sociais da escola, da Secretaria de Educação, Município, etc.</p>
              </div> 
            </div>

            
                
            
          </div>
        </div>
      );
    };

export default AtiExemplosCulmi