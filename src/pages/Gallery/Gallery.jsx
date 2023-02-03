import React from 'react';
import "./Gallery.css";
import Gallery1 from "./Gallery1.png";
import Golfo from "./Golfo.png";
import School from "./School.mp4";
import Gambarie from "./Gambarie.png";
import { ImageViewer } from "react-image-viewer-dv";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);












const Gallery = () => {

  ScrollTrigger.batch(".footprint", {
    start: "top 80%",
    onEnter: elements => gsap.to(elements, {opacity: 1, stagger: 0.1}),
    onLeaveBack: elements => gsap.set(elements, {opacity: 0})
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





  <div className="a footprint"></div>
  <div className="b footprint"></div>
  <div className="c footprint"></div>
  <div className="d footprint"></div>
  <div className="e footprint"></div>
  <div className="f footprint"></div>
  <div className="g footprint"></div>
  <div className="h footprint"></div>
  <div className="i footprint"></div>
  <div className="j footprint"></div>
  <div className="k footprint"></div>
  <div className="l footprint"></div>
  <div className="m footprint"></div>
  <div className="n footprint"></div>
  <div className="o footprint"></div>
  <div className="p footprint"></div>






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
          <div className="card17">
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
