import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home'
import About from './components/About'
import Department from './components/department'
import Covid from './components/covid'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ComingSoon from './components/ComingSoon'
import Contact from './components/Contact'
import Accreditations from './components/Accreditations'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/department" element={<Department />} />
        <Route path="/covid" element={<Covid />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/accreditations" element={<Accreditations />} />
        <Route path="*" element={<ComingSoon />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
