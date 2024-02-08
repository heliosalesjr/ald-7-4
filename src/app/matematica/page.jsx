'use client'


import { Divider } from '@nextui-org/react'
import MatButton from '../components/Matematica/MatButton'

import MatHero from '../components/Matematica/MatHero'
import MatFrac from '../components/Matematica/MatFrac'
import MatVideo1 from '../components/Matematica/MatVideo1'
import MatVideo2 from '../components/Matematica/MatVideo2'




function Matematica() {
  return (
    <>
        
        <MatHero />
        
        <MatVideo1 />
        <Divider className='max-w-5xl mx-auto'/>
        <MatVideo2 />
        <Divider className='max-w-5xl mx-auto'/>
        <MatButton />
        
    
    </>
    
  )
}

export default Matematica