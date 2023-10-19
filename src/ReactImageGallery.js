import React, {useState} from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

// test images
const images = [
    "https://picsum.photos/2000/3000",
    "https://picsum.photos/3000/2000",
    "https://picsum.photos/4000/3000",
    "https://picsum.photos/3000/1500",
    "https://picsum.photos/1000/2500",
    "https://picsum.photos/1500/2000",
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
          background: 'black',
          position: 'fixed',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}>
          <button onClick={() => imgClick()} style={{position: 'absolute', top: '10px', right: '10px'}}>X</button>
          <button onClick={() => imgClick('prev-img')}>Previous</button>
          <img src={data.img} style={{width: 'auto', maxWidth: '90%', maxHeight: '90%'}} />
          <button onClick={() => imgClick('next-img')}>Next</button>
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