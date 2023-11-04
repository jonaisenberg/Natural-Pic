/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
import Card from 'react-bootstrap/Card'
import { UseFotos } from '../context/MyContext'
import IconHeart from './IconHeart'

function Gallery () {
  const { fotos, like } = UseFotos()

  return (
    <div className='gallery grid-columns-5 p-3'>
      {fotos.map((foto) => (
        <Card key={foto.id} style={{ width: '18rem' }}>
          <div
            style={{
              backgroundImage: `url(${foto.src.tiny})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '150px',
              position: 'relative'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px'
              }}
            >
              <IconHeart Filled={foto.liked} OnClick={() => like(foto.id)} />
            </div>
          </div>
          <Card.Body>
            <Card.Text>{foto.alt}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}

export default Gallery
