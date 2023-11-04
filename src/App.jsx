import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { ImageProvider } from './context/MyContext'
import Favorites from './views/Favorites'
import Home from './views/Home'

const App = () => {
  return (
    <>
      <ImageProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favoritos' element={<Favorites />} />
        </Routes>
      </ImageProvider>
    </>
  )
}

export default App
