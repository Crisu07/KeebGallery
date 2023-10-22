import React, {useState} from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import './ReactImageGallery.css'

import yeti5 from './keebs/yeti5.jpg'
import yeti6 from './keebs/yeti6.jpg'
import yeti4 from './keebs/yeti4.jpg'

import eighty1 from './keebs/eighty1.jpg'
import eighty2 from './keebs/eighty2.jpg'
import eighty3 from './keebs/eighty3.jpg'

import abasic1 from './keebs/abasic1.jpg'
import abasic2 from './keebs/abasic2.jpg'
import abasic3 from './keebs/abasic3.jpg'

import tiger1 from './keebs/tiger1.jpg'
import tiger2 from './keebs/tiger2.jpg'
import tiger3 from './keebs/tiger3.jpg'

import zoomr1 from './keebs/zoomr1.jpg'
import zoomr2 from './keebs/zoomr2.jpg'
import zoomr3 from './keebs/zoomr3.jpg'

import zoom1 from './keebs/zoom1.jpg'
import zoom2 from './keebs/zoom2.jpg'
import zoom3 from './keebs/zoom3.jpg'

// test images
const images = [
    yeti5, yeti4, yeti6,
    eighty1, eighty2, eighty3,
    abasic3, abasic1, abasic2,
    tiger3, tiger2, tiger1,
    zoomr3, zoomr1, zoomr2,
    zoom1, zoom3, zoom2,
  ]

  const title = [
    'Persona 5 Theme', 
    'Mai Sakurajima Theme',
    'Bocchi the Rock Kikuri Theme',
  ]

  // could maybe break the parts up into their own arrays?
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
    console.log(img, i);
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