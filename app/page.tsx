import HEADER from "./components/Navbar/page"
import Hero from "./components/HERO/page"
import Shop from "./Shop/page"
import About from "./AboutUs/page"
import Footer from "./components/Footer/page"
export default function Home() {
  return (
    <div className="bg-[url('/makeup.jpg')] h-[800px] w-full bg-cover bg-no-repeat " >
      <HEADER />
     <Hero/>
     <br/><br/>
     <Shop/>
     <About/>
     <Footer/>
       </div>

  )
}