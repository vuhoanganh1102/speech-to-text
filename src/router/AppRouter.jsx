import { Routes, Route } from 'react-router-dom'
import Home from '@pages/Home'
import SpeechDemo from '@pages/SpeechDemo'
import NotFound from '@pages/NotFound'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/speech" element={<SpeechDemo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
