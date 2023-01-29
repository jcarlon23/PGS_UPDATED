import React from 'react';
import "./Gallery.css";
import Gallery1 from "./Gallery1.png";
import { ImageViewer } from "react-image-viewer-dv"







const Gallery = () => {



  return (


            <div className="image-gallery">


           <ImageViewer>
            <img src={Gallery1} height={500} alt="" />
          </ImageViewer>

          <ImageViewer>
            <img src={Gallery1} height={500} alt="" />
          </ImageViewer>
          <ImageViewer>
            <img src={Gallery1} height={500} alt="" />
          </ImageViewer>

          <ImageViewer>
            <img src={Gallery1} height={500} alt="" />
          </ImageViewer>
          <ImageViewer>
            <img src={Gallery1} height={500} alt="" />
          </ImageViewer>
          </div>












  )
}

export default Gallery
