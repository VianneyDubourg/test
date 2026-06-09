import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PopularFormations from './components/PopularFormations'
import Testimonial from './components/Testimonial'
import CreateFormation from './components/CreateFormation'
import NosFormations from './components/NosFormations'
import WhyProformed from './components/WhyProformed'
import Blog from './components/Blog'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-14">
        <Hero />
        <PopularFormations />
        <Testimonial />
        <CreateFormation />
        <NosFormations />
        <WhyProformed />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
