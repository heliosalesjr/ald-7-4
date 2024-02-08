'use client'

import AtiBotaoNext from '../components/Atividades/AtiBotaoNext'
import AtiEtapas from '../components/Atividades/AtiEtapas'
import AtiAvalia from '../components/Atividades/AtiAvalia'
import AtiCulminancia from '../components/Atividades/AtiCulminancia'
import AtivHero from '../components/Atividades/AtivHero'
import AtiDiscussaoFinal from '../components/Atividades/AtiDiscussaoFinal'
import AtiSugestao from '../components/Atividades/AtiSugestao'
import { Divider } from '@nextui-org/react'
import Monitoramento from '../components/Atividades/Monitoramento'
import AtiDiarioBordo from '../components/Atividades/AtiDiarioBordo'
import AtiABPDrop from '../components/Atividades/AtiABPDrop'
import AtiExemplosCulmi from '../components/Atividades/AtiExemplosCulmi'
import AtiImportanciaC from '../components/Atividades/AtiImportanciaC'
import AtiSocioemocional from '../components/Atividades/AtiSocioemocional'

function Atividades() {
  return (
    <>
        
        <AtivHero />
        <AtiEtapas />
        <AtiCulminancia />
        <AtiExemplosCulmi />
        <AtiDiscussaoFinal />
        <AtiImportanciaC />
        <AtiSocioemocional />
        <Divider className='max-w-5xl ms-auto'/>
        <AtiBotaoNext />
        
        
    </>
    
  )
}

export default Atividades