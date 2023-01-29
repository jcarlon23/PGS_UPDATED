import React from 'react';
import "./Gallery.css";
import Gallery1 from "./Gallery1.png";
import { ImageViewer } from "react-image-viewer-dv"







const Gallery = () => {



  return (


            <div className="image-gallery">

          <div className="photo">
           <ImageViewer>
            <img src={Gallery1} height={200} alt="" />
          </ImageViewer>
          </div>
          <div className="photo">
          <ImageViewer>
            <img src={Gallery1} height={200} alt="" />
          </ImageViewer>
          </div>
          <div className="photo">
          <ImageViewer>
            <img src={Gallery1} height={200} alt="" />
          </ImageViewer>
          </div>
          <div className="photo">
          <ImageViewer>
            <img src={Gallery1} height={200} alt="" />
          </ImageViewer>
          </div>
          <div className="photo">
          <ImageViewer>
            <img src={Gallery1} height={200} alt="" />
          </ImageViewer>
          </div>
          <div className="photo">
          <ImageViewer>
            <img src={Gallery1} height={200} alt="" />
          </ImageViewer>
          </div>
          <div className="photo">
          <ImageViewer>
            <img src={Gallery1} height={200} alt="" />
          </ImageViewer>
          </div>
          <div className="photo">
          <ImageViewer>
            <img src={Gallery1} height={200} alt="" />
          </ImageViewer>
          </div>
          </div>












  )
}

export default Gallery
