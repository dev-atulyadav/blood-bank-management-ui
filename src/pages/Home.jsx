import React, { useState } from 'react'
import Header from '../component/Header'
import Section from '../component/Section'
import Footer from '../component/Footer'
import Insta from "../assets/images/instagram.png"
import X from "../assets/images/x.png"
import Meta from "../assets/images/meta.png"

export default function Home() {

  const [socialLinks, setSocialLinks] = useState([
    {name:"instagram",img:Insta},
    {name:"meta",img:Meta},
    {name:"x",img:X},
  ]);
  return (
    <>
      <Header/>
      <Section/>
      <Footer socialLinks={socialLinks}/>
    </>
  )
}
