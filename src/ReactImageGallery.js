import React, {useState} from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import './ReactImageGallery.css'

// importing the images in separate file for cleanliness
import images from './keebsImages'

const title = [
  'Persona 5 Theme', 
  'Mai Sakurajima Theme',
  'Bocchi the Rock Kikuri Theme',
]

const board = [
  'Yeti Polycarbonate Clear by Axol Studios\nDurock T1 Tactile Switches Lubed with 205g0\nGMK Metaverse R2 Keycap Set\nS-Craft Studio Psyduck Artisan Keycap\nDykeycap Mew Artisan Keycap\nShiba Artian Keycap',
  'Mode Eighty by Mode Designs\nEMT Emilia v2 Switches Lubed with 205g0\nKenoKeys Bunny Girl Keycap Set\nS-Craft Studio Chikorita Artisan\nBalloondog Keycaps Ditto Gengar and Annihilape Artisan\nokeydokey Studio Taro Bat Artisan',
  'AVA Alice Polycarb by Sneakbox, Betty switches lubed with 205g0'
]

const ReactImageGallery = () => {
  const [data, setData] = useState({img: '', i:0})
  const [imageText, setimageText] = useState(title[0])
  const [imageBody, setimageBody] = useState(board[0])

  // Update the description for images
  const updateText = (i) => {
    if (i === 0 || i === 1 || i === 2){
      setimageText(title[0])
      setimageBody(board[0])
    }
    if (i === 3 || i === 4 || i === 5){
      setimageText(title[1])
      setimageBody(board[1])
    }
    if (i === 6 || i === 7 || i === 8){
      setimageText(title[2])
      setimageBody(board[2])
    }
  }
  
  // upon clicking on an image
  const viewImage = (img, i)=>{
    //console.log(img, i);
    setData({img, i})
    updateText(i)
  }

  const imgClick = (action) =>{
    let i = data.i;
    // move on to next image in gallery/masonry
    if (action === 'next-img'){
      setData({img: images[i+1], i: i+1});
      //console.log(i+1);
      updateText(i+1);
    }
    // move to previous image in gallery
    // when hitting prev on first image, it will just exit out the view
    if (action === 'prev-img'){
      setData({img: images[i-1], i: i-1});
      // console.log(i-1);
      updateText(i-1);
    }
    // Exiting the close up on images
    // when hitting next on the last image, it will exit out the view
    if (!action){
      setData({img: '', i: 0});
      // console.log(i);
      updateText(i-1);
    }
  }

  return (
    <>
      {data.img &&
        <div className='viewImg'>
          <button className='btn btn-primary btn-close' onClick={() => imgClick()} >X</button>
          <button className='btn btn-primary btn-left' onClick={() => imgClick('prev-img')}>Previous</button>
          <img src={data.img} className='dataImg'/>
          <div className='detailImg'>
            <h3>{imageText}</h3>
            <pre>{imageBody}</pre>
          </div>
          <button className='btn btn-primary btn-right' onClick={() => imgClick('next-img')}>Next</button>
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