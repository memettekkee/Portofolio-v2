import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Training from './components/Training'
import Skills from './components/Skills'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

const Divider = ({ maxWidth = '1060px' }) => (
  <div style={{ maxWidth, margin: '0 auto', padding: '0 2rem' }}>
    <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />
  </div>
)

function App() {
  return (
    <div style={{ background: '#080b12', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Experience />
      <Divider />
      <Training />
      <Divider />
      <Skills />
      <Divider />
      <Education />
      <Divider maxWidth="900px" />
      <Certifications />
      <Divider maxWidth="900px" />
      <Contact />
    </div>
  )
}

export default App
