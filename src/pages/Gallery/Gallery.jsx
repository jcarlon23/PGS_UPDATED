
import React, { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Gallery.css";
import Gallery1 from "./Gallery1.png";
import Golfo from "./Golfo.png";
import School from "./School.mp4";
import Gambarie from "./Gambarie.png";
import Gallery2 from "./Gallery2.png";
import Gallery3 from "./Gallery3.png";
import Gallery4 from "./Gallery4.png";
import Gallery5 from "./Gallery5.png";
import Gallery6 from "./Gallery6.png";
import Gallery7 from "./Gallery7.png";
import Gallery8 from "./Gallery8.png";
import Gallery9 from "./Gallery9.png";
import Gallery10 from "./Gallery10.png";

import Citta1 from "./Citta1.png";
import Citta2 from "./Citta2.png";
import Citta3 from "./Citta3.png";
import Citta4 from "./Citta4.png";
import Citta5 from "./Citta5.png";
import Citta6 from "./Citta6.png";
import Citta7 from "./Citta7.png";
import Citta8 from "./Citta8.png";

import Bosco1 from "./Bosco1.png";
import Bosco2 from "./Bosco2.png";
import Bosco3 from "./Bosco3.png";
import Bosco4 from "./Bosco4.png";
import Bosco5 from "./Bosco5.png";
import Bosco6 from "./Bosco6.png";
import Bosco7 from "./Bosco7.png";
import Bosco8 from "./Bosco8.png";
import Bosco9 from "./Bosco9.png";







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
            <img src={Gallery1} height={120} width={120} alt="" />
            <div className="caption">I Miss London</div>
            </div>
          </ImageViewer>
          </div>
          <div className="photo">
          <div className="card2">
          <ImageViewer>
            <img src={Gallery2} height={120} width={120}  alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
            <div className="card3">
          <ImageViewer>
            <img src={Gallery3} height={120} width={120} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
          <div className="card4">
          <ImageViewer>
            <img src={Gallery4} height={120} width={120} alt="" />
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
            <img src={Gallery5} height={120} width={120} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
          <div className="card6">
          <ImageViewer>
            <img src={Gallery6} height={120} width={120} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
          <div className="card7">
          <ImageViewer>
            <img src={Gallery7} height={120} width={120} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
          <div className="card8">
          <ImageViewer>
            <img src={Gallery8} height={120} width={120} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
          <div className="card9">
          <ImageViewer>
            <img src={Gallery9} height={120} width={120} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
          <div className="card10">
          <ImageViewer>
            <img src={Gallery10} height={120} width={120} alt="" />
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
          <div className="card12">
          <ImageViewer>
            <img src={Citta2} height={120} width={120} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
            <div className="card13">
          <ImageViewer>
            <img src={Citta3} height={120} width={120} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
          <div className="card14">
          <ImageViewer>
            <img src={Citta4} height={120} width={120} alt="" />
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
            <img src={Citta5} height={120} width={120} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
          <div className="card16">
          <ImageViewer>
            <img src={Citta6} height={120} width={120} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
          <div className="card18">
          <ImageViewer>
            <img src={Citta7} height={120} width={120} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
          <div className="card19">
          <ImageViewer>
            <img src={Citta8} height={120} width={120} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
          <div className="card20">
          <ImageViewer>
            <img src={Citta1} height={120} width={120} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          </div>



          <div className="image-gallery3">
          <div className="photo">
          <ImageViewer>
           <div className="card21">
            <img src={Bosco1} height={120} width={120} alt="" />
            <div className="caption">I Miss London</div>
            </div>
          </ImageViewer>
          </div>
          <div className="photo">
          <div className="card22">
          <ImageViewer>
            <img src={Bosco2} height={120} width={120} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
            <div className="card23">
          <ImageViewer>
            <img src={Bosco3} height={120} width={120} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
          <div className="card24">
          <ImageViewer>
            <img src={Bosco4} height={120} width={120} alt="" />
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
            <img src={Bosco5} height={120} width={120} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
          <div className="card26">
          <ImageViewer>
            <img src={Bosco6} height={120} width={120} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
          <div className="card27">
          <ImageViewer>
            <img src={Bosco7} height={120} width={120} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
          <div className="card28">
          <ImageViewer>
            <img src={Bosco8} height={120} width={120} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          <div className="photo">
          <div className="card29">
          <ImageViewer>
            <img src={Bosco9} height={120} width={120} alt="" />
            <div className="caption">I Miss London</div>
          </ImageViewer>
          </div>
          </div>
          </div>
          </div>





















  )
}

export default Gallery
