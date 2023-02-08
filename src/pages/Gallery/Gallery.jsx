
import React, { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Gallery.css";
import Gallery1 from "./Gallery1.png";
import Golfo from "./Golfo.png";
import School from "./School.mp4";
import Gambarie from "./Gambarie.png";
import foot from "./foot.png";
import { ImageViewer } from "react-image-viewer-dv";




gsap.registerPlugin(ScrollTrigger);














const Gallery = () => {





  useEffect(() => {

  gsap.to('.footprint', {
    opacity: 1,
    stagger: 0.1,
    scrollTrigger: {
      start: 0,
      end: 'max',
      scrub: 1

    }
  })

});







  return (







            <div className="image-gallery">
          <div className="photo">
          <ImageViewer>
           <div className="card1">
            <img src={Gallery1} height={100} alt="" />
            <div className="caption">I Miss London</div>
            </div>
          </ImageViewer>
          </div>
          <div className="photo">
          <div className="card2">
          <ImageViewer>
            <img src={Gallery1} height={100} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
            <div className="card3">
          <ImageViewer>
            <img src={Gallery1} height={100} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
          <div className="card4">
          <ImageViewer>
            <img src={Gallery1} height={100} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>

          <div>
          <div className="middle">
          <ImageViewer>
          <div className="middle">
            <img src={Gambarie} height={400} alt="middle" />
          </div>
          </ImageViewer>
          </div>
          </div>

          <div className="photo">
          <div className="card5">
          <ImageViewer>
            <img src={Gallery1} height={100} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
          <div className="card6">
          <ImageViewer>
            <img src={Gallery1} height={100} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
          <div className="card7">
          <ImageViewer>
            <img src={Gallery1} height={100} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
          <div className="card8">
          <ImageViewer>
            <img src={Gallery1} height={100} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
          <div className="card9">
          <ImageViewer>
            <img src={Gallery1} height={100} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
          <div className="card10">
          <ImageViewer>
            <img src={Gallery1} height={100} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>




<div className='footprint'>

  <img src={foot} className="a footprint" alt="footprint"/>
  <img src={foot} className="b footprint" alt="footprint"/>
  <img src={foot} className="c footprint" alt="footprint"/>
  <img src={foot} className="d footprint" alt="footprint"/>
  <img src={foot} className="e footprint" alt="footprint"/>
  <img src={foot} className="f footprint" alt="footprint"/>
  <img src={foot} className="g footprint" alt="footprint"/>
  <img src={foot} className="h footprint" alt="footprint"/>
  <img src={foot} className="i footprint" alt="footprint"/>
  <img src={foot} className="j footprint" alt="footprint"/>
  <img src={foot} className="k footprint" alt="footprint"/>
  <img src={foot} className="l footprint" alt="footprint"/>
  <img src={foot} className="m footprint" alt="footprint"/>
  <img src={foot} className="n footprint" alt="footprint"/>
  <img src={foot} className="o footprint" alt="footprint"/>
  <img src={foot} className="p footprint" alt="footprint"/>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js"></script>

</div>


        <div className="image-gallery2">
        <div className="photo">
          <ImageViewer>
           <div className="card11">
            <img src={Gallery1} height={100} alt="" />
            <div className="caption">I Miss London</div>
            </div>
          </ImageViewer>
          </div>
          <div className="photo">
          <div className="card12">
          <ImageViewer>
            <img src={Gallery1} height={100} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
            <div className="card13">
          <ImageViewer>
            <img src={Gallery1} height={100} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
          <div className="card14">
          <ImageViewer>
            <img src={Gallery1} height={100} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>

          <div>
          <div className="Golfo">
          <ImageViewer>
          <div className="Golfo">
            <img src={Golfo} height={400} alt="Golfo" />
          </div>
          </ImageViewer>
          </div>
          </div>

          <div className="photo">
          <div className="card15">
          <ImageViewer>
            <img src={Gallery1} height={100} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
          <div className="card16">
          <ImageViewer>
            <img src={Gallery1} height={100} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
          <div className="card18">
          <ImageViewer>
            <img src={Gallery1} height={100} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
          <div className="card19">
          <ImageViewer>
            <img src={Gallery1} height={100} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
          <div className="card20">
          <ImageViewer>
            <img src={Gallery1} height={100} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          </div>



          <div className="image-gallery3">
          <div className="photo">
          <ImageViewer>
           <div className="card21">
            <img src={Gallery1} height={100} alt="" />
            <div className="caption">I Miss London</div>
            </div>
          </ImageViewer>
          </div>
          <div className="photo">
          <div className="card22">
          <ImageViewer>
            <img src={Gallery1} height={100} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
            <div className="card23">
          <ImageViewer>
            <img src={Gallery1} height={100} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
          <div className="card24">
          <ImageViewer>
            <img src={Gallery1} height={100} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>

          <div>
          <div className="School">
          <ImageViewer>
          <div className="School">
          <video src={School} autoPlay loop muted />
          </div>
          </ImageViewer>
          </div>
          </div>

          <div className="photo">
          <div className="card25">
          <ImageViewer>
            <img src={Gallery1} height={100} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
          <div className="card26">
          <ImageViewer>
            <img src={Gallery1} height={100} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
          <div className="card27">
          <ImageViewer>
            <img src={Gallery1} height={100} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
          <div className="card28">
          <ImageViewer>
            <img src={Gallery1} height={100} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
          <div className="card29">
          <ImageViewer>
            <img src={Gallery1} height={100} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
          <div className="card30">
          <ImageViewer>
            <img src={Gallery1} height={100} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          </div>
          </div>





















  )
}

export default Gallery
