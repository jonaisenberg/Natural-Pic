import { createContext, useContext, useState } from 'react'
import PhotoUrl from '../../public/photos.json'

const ImagenContext = createContext()

// eslint-disable-next-line react/prop-types
export function ImageProvider ({ children }) {
  const [fotos, setFotos] = useState(PhotoUrl.photos)

  const like = (id) => {
    setFotos((imagenes) =>
      imagenes.map((imagen) =>
        imagen.id === id ? { ...imagen, liked: !imagen.liked } : imagen
      )
    )
  }
  return (
    <ImagenContext.Provider value={{ fotos, like }}>
      {children}
    </ImagenContext.Provider>
  )
}

export function UseFotos () {
  return useContext(ImagenContext)
}
