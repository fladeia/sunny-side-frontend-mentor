import { Wrapper } from './components/Wrapper/styles'
import { Hero } from './components/Hero'
import { Section1 } from './components/Section1'
import { Section2 } from './components/Section2'
import { Section3 } from './components/Section3'
import { Testimonials } from './components/Testimonials'
import { Illustrations } from './components/Illustrations'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <Wrapper>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Testimonials />
      <Illustrations />
      <Footer />
    </Wrapper>
  )
}
