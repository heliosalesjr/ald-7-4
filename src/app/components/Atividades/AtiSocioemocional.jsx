import { GiMirrorMirror } from "react-icons/gi";
import { GiGloves } from "react-icons/gi";
import { FaPhoenixSquadron } from "react-icons/fa6";
import { MdTaskAlt } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

const AtiSocioemocional = () => {
  return (
    <div className='py-8'>
        <h2 className="mb-4 text-4xl text-slate-800 font-bold px-8 max-w-7xl text-center mx-auto">Autoavaliação e Competências Socioemocionais</h2>
        <div className="flex flex-col max-w-7xl mx-auto md:flex-row items-center justify-center sm:p-8">
            
            <div className="md:w-1/2 md:ml-4">
                
                <p className='text-slate-800 px-4 py-2'>
                Com o projeto chegando ao fim é importante não só aferir quais e quanto dos conteúdos escolares os alunos absorveram, mas ajudá-los a detectar progressos pessoais.
                </p>
                <p className='text-slate-800 px-4 py-2'>Desenvolver projetos na escola traz uma série de benefícios que vão além do aprendizado escolar. Estes aprendizados permitem que o indivíduo conheça melhor a si e seus sentimentos, o que impacta diretamente em sua capacidade de lidar com estas emoções e também de se relacionar com outras pessoas. Estas capacidades são as Competências Socioemocionais. Conheça algumas delas:</p>
            </div>

            
            <div className="p-8 md:w-1/2 mb-4 md:mb-0">
                <img
                className="w-full h-full object-cover rounded-md"
                src="/images/emotions.jpg"  // Substitua pelo caminho da sua imagem
                alt="Descrição da Imagem"
                />
            </div>
        </div>

        <div className='py-8'>
            <div className="grid grid-cols-1 mx-auto max-w-7xl md:grid-cols-3">
                
                
                <div className='bg-white p-6 rounded-lg border border-slate-300 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg hover:scale-105 transition-all duration-300'>
                    <div className="flex items-end justify-end">
                        <GiMirrorMirror className="text-5xl text-slate-500 mb-4" />
                    </div>
                    <h1 className='text-primary text-lg font-semibold py-2'>Autoconhecimento</h1>
                    <p className='text-sm text-slate-800 text-left pb-4'>Ler e compreender suas emoções, reconhecendo seu impacto em si próprio e nos outros. Em sua perspectiva social, possibilita a criação de estratégias eficazes para manejo das emoções nos diferentes contextos sociais.</p>
                </div>

                <div className='bg-white p-6 rounded-lg border border-slate-300 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg hover:scale-105 transition-all duration-300'>
                <div className="flex items-end justify-end">
                        <GiGloves className="text-5xl text-slate-500 mb-4" />
                    </div>
                    <h1 className='text-primary text-lg font-semibold py-2'>Empatia</h1>
                    
                    <p className='text-sm text-slate-800 text-left pb-4'>Escutar, entender, compartilhar e considerar sentimentos, necessidades e perspectivas do outro, de forma que a outra pessoa se sinta respeitada e acolhida. Dimensão social que considera a atuação pautada nas normas éticas para a vida comunitária.</p>
                </div>

                <div className='bg-white p-6 rounded-lg border border-slate-300 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg hover:scale-105 transition-all duration-300'>
                <div className="flex items-end justify-end">
                        <FaPhoenixSquadron className="text-5xl text-slate-500 mb-4" />
                    </div>
                    <h1 className='text-primary text-lg font-semibold py-2'>Resiliência</h1>
                    
                    <p className='text-sm text-slate-800 text-left'>Demonstrar flexibilidade para lidar com situações adversas, resistir às frustrações e buscar estratégias positivas, adaptando-se sempre. Considera a importância da criação de vínculos e redes de apoio para enfrentamento de desafios e situações de risco.</p>
                </div>

                
            </div>
            <div className="grid grid-cols-1 mx-auto max-w-7xl md:grid-cols-3">
                
                
                <div className='bg-white p-6 rounded-lg border border-slate-300 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg hover:scale-105 transition-all duration-300'>
                    <div className="flex items-end justify-end">
                        <MdTaskAlt className="text-5xl text-slate-500 mb-4" />
                    </div>
                    <h1 className='text-primary text-lg font-semibold py-2'>Responsabilidade</h1>
                    <p className='text-sm text-slate-800 text-left pb-4'>Fazer escolhas construtivas para cumprir obrigações com firmeza, organização e clareza para completar com qualidade o que lhe foi proposto. Avaliação realista das consequências de ações com consideração ao bem-estar de si mesmo e dos outros.</p>
                </div>

                <div className='bg-white p-6 rounded-lg border border-slate-300 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg hover:scale-105 transition-all duration-300'>
                <div className="flex items-end justify-end">
                        <FaTools className="text-5xl text-slate-500 mb-4" />
                    </div>
                    <h1 className='text-primary text-lg font-semibold py-2'>Resolução de Problemas</h1>
                    
                    <p className='text-sm text-slate-800 text-left pb-4'>Identificar, entender, refletir e analisar problemas para rever informações relacionadas, a fim de desenvolver e avaliar opções. Na sua dimensão social, considera fatores éticos para tomada de decisões responsáveis.</p>
                </div>

                <div className='bg-white p-6 rounded-lg border border-slate-300 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg hover:scale-105 transition-all duration-300'>
                <div className="flex items-end justify-end">
                        <GiBrain className="text-5xl text-slate-500 mb-4" />
                    </div>
                    <h1 className='text-primary text-lg font-semibold py-2'>Pensamento Crítico</h1>
                    
                    <p className='text-sm text-slate-800 text-left'>Investigar, refletir e argumentar, empregando regras de lógica e análise para formular hipóteses e se posicionar em determinado assunto. Na sua dimensão social, prevê o exercício da cidadania e dos direitos humanos.</p>
                </div>

                
            </div>
        </div>
        <div className="max-w-5xl mx-auto bg-slate-100 rounded-xl p-4 m-4">
        <p className='text-slate-800 px-8 max-w-7xl mx-auto text-center py-8'>Para auxiliar os estudantes a identificar aprendizados pessoais e avaliar seu desempenho no desenvolvimento do projeto podem ser usadas Autoavaliações, <a href="https://docs.google.com/spreadsheets/d/16L9cRzGH9fUyWy2cQgI4moBGziHTVHjiwKk8KiJAMEY/edit?usp=sharing" target="blank" className="text-blue-800 underline hover:text-purple-900">veja aqui</a> {' '}alguns modelos. Pode-se também pedir que os alunos avaliem o desempenho de seus pares, através da Avaliação de colegas, <a href="https://docs.google.com/spreadsheets/d/16L9cRzGH9fUyWy2cQgI4moBGziHTVHjiwKk8KiJAMEY/edit?usp=sharing" target="blank" className="text-blue-800 underline hover:text-purple-900">acesse aqui</a> {' '} alguns modelos.</p>
        </div>
    </div>
    
  );
};

export default AtiSocioemocional;