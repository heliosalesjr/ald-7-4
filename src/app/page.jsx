'use client'

import { Divider } from "@nextui-org/react"
import HeroSection from "./components/HeroSection"
import IntroButons from "./components/IntroButons"
import MainButton from "./components/MainButton"
import OSite4 from "./components/OSite4"
import Relembrando from "./components/Relembrando"



export default function Home() {
  return (
    <>
      
      <HeroSection />
      <OSite4 />
      <Divider className="max-w-3xl mx-auto mb-12" />  
      <Relembrando />
      <IntroButons />
      <Divider className="max-w-3xl mx-auto mt-8" />
      <MainButton />
      
    </>
  )
}
