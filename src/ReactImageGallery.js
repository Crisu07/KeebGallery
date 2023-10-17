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
          <button style={{position: 'absolute', top: '10px', right: '10px'}}>X</button>
          <button>Previous</button>
          <img src={data.img} style={{width: 'auto', maxWidth: '90%', maxHeight: '90%'}} />
          <button>Next</button>
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