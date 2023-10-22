import React, {useState} from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import './ReactImageGallery.css'

import yeti1 from './keebs/yeti1.jpg'
import yeti2 from './keebs/yeti2.jpg'
import yeti3 from './keebs/yeti3.jpg'

import eighty1 from './keebs/eighty1.jpg'
import eighty2 from './keebs/eighty2.jpg'
import eighty3 from './keebs/eighty3.jpg'

import abasic1 from './keebs/abasic1.jpg'
import abasic2 from './keebs/abasic2.jpg'
import abasic3 from './keebs/abasic3.jpg'

// test images
const images = [
    yeti2, yeti1, yeti3,
    eighty1, eighty2, eighty3,
    abasic3, abasic1, abasic2,
  ]

const ReactImageGallery = () => {
  const [data, setData] = useState({img: '', i:0})

  // upon clicking on an image
  const viewImage = (img, i)=>{
    // console.log(image, i);
    setData({img, i})
  }
  const imgClick = (action) =>{
    let i = data.i;
    // move on to next image in gallery/masonry
    if (action === 'next-img'){
      setData({img: images[i+1], i: i+1});
    }
    // move to previous image in gallery
    // when hitting prev on first image, it will just exit out the view
    if (action === 'prev-img'){
      setData({img: images[i-1], i: i-1});
    }
    // Exiting the close up on images
    if (!action){
      setData({img: '', i: 0});
    }
  }

  return (
    <>
      {data.img &&
        <div style={{
          width: '100%',
          height: '100vh',
          background: 'var(--color-bg-variant)',
          position: 'fixed',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}>
          <button className='btn btn-primary btn-close' onClick={() => imgClick()} >X</button>
          <button className='btn btn-primary' onClick={() => imgClick('prev-img')}>Previous</button>
          <img src={data.img} style={{width: 'auto', maxWidth: '90%', maxHeight: '90%'}} />
          <button className='btn btn-primary' onClick={() => imgClick('next-img')}>Next</button>
        </div>
      }
      <div style={{padding: '10px'}}>
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
            <Masonry gutter='20px'>
                {images.map((image, i) => (
                    <img
                        key={i}
                        src={image}
                        style={{width: "100%", display: "block", cursor: 'pointer'}}
                        alt=""
                        // Upon clicking on an image
                        onClick={()=> viewImage(image, i)}
                    />
                ))}
            </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};

export default ReactImageGallery