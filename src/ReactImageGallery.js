import React, {useState} from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import './ReactImageGallery.css'

// importing the images in separate file for cleanliness
import images, {title, board} from './keebsImages'

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
    if (i === 9 || i === 10 || i === 11){
      setimageText(title[3])
      setimageBody(board[3])
    }
    if (i === 12 || i === 13 || i === 14){
      setimageText(title[4])
      setimageBody(board[4])
    }
    if (i === 15 || i === 16 || i === 17){
      setimageText(title[5])
      setimageBody(board[5])
    }
    if (i === 18 || i === 19 || i === 20){
      setimageText(title[6])
      setimageBody(board[6])
    }
    if (i === 21 || i === 22 || i === 23){
      setimageText(title[7])
      setimageBody(board[7])
    }
    if (i === 24 || i === 25 || i === 26){
      setimageText(title[8])
      setimageBody(board[8])
    }
    if (i === 27 || i === 28 || i === 29){
      setimageText(title[9])
      setimageBody(board[9])
    }
    if (i === 30 || i === 31 || i === 32){
      setimageText(title[10])
      setimageBody(board[10])
    }
    if (i === 33 || i === 34 || i === 35){
      setimageText(title[11])
      setimageBody(board[11])
    }
    if (i === 36 || i === 37){
      setimageText(title[12])
      setimageBody(board[12])
    }
    if (i === 38) {
      setimageText(title[13])
      setimageBody(board[13])
    }
    if (i === 39 || i === 40 || i === 41){
      setimageText(title[14])
      setimageBody(board[14])
    }
    if (i === 42 || i === 43 || i === 44){
      setimageText(title[15])
      setimageBody(board[15])
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
          <button className='btn btn-primary btn-left' onClick={() => imgClick('prev-img')}>{'<'}</button>
          <img src={data.img} className='dataImg'/>
          <div className='detailImg'>
            <h3>{imageText}</h3>
            <pre>{imageBody}</pre>
          </div>
          <button className='btn btn-primary btn-right' onClick={() => imgClick('next-img')}>{'>'}</button>
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