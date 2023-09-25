
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:url" element={<Home />} />
        <Route path="/test" element={<h1>test</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
