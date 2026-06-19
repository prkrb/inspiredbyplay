import { Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StickyCallBar from './components/StickyCallBar'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Programs from './pages/Programs'
import ProgramDetail from './pages/ProgramDetail'
import HowItWorks from './pages/HowItWorks'
import CityPage from './pages/CityPage'
import Guide from './pages/Guide'
import Contact from './pages/Contact'
import Schools from './pages/Schools'
import Corporate from './pages/Corporate'
import Events from './pages/Events'

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <ScrollToTop />
      <main className="flex-1 pb-16 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <StickyCallBar />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="programs" element={<Programs />} />
        <Route path="programs/:slug" element={<ProgramDetail />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="locations/:city" element={<CityPage />} />
        <Route path="corporate" element={<Corporate />} />
        <Route path="schools" element={<Schools />} />
        <Route path="events" element={<Events />} />
        <Route path="guide" element={<Guide />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
