import { useState } from 'react'
import Header from './component/Header'
import Hero from './component/Hero'
import DonateHero from './component/DonateHeros'
import AboutSection from './component/AboutSection'
import Donationbox from './component/Donationbox'
import DonationCarousel from './component/DonationCarousel'
import HeroSection from './component/HeroSection'
import DonationSection from './component/DonationSection'
import DonationForm from './component/DonationForm'
import DonateWithUs from './component/DonateWithUs'
import RecentPostsCarousel from './component/RecentPostsCarousel'
import LogoCarousel from './component/LogoCarousel'
import Footer from './component/Footer'
// import Donationimage from './component/Donationimage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <DonateHero/>
      <AboutSection/>
      <Donationbox/>
      <DonationCarousel/>
      <HeroSection/>
      <DonationSection/>
      <DonationForm/>
      <DonateWithUs/>
      <RecentPostsCarousel/>
      <LogoCarousel/>
      <Footer/>
    </>
  )
}

export default App
