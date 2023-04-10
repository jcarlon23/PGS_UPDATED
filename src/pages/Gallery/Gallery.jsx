import React, { useEffect } from "react";
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

const Gallery = () => {
  return (
    <div className="container">
      <h1 className="text-center text-7xl mb-4 mt-20 tracking-widest ">
        GALLERIA
      </h1>
      <div className=" grid grid-cols-4 gap-8 pt-40 ">
        <ImageViewer>
          <div className="card1">
            <img src={Gallery1} alt="" />
            <div className="caption">Foto di gruppo</div>
          </div>
        </ImageViewer>

        <ImageViewer>
          <div className="card2">
            <img src={Gallery2} alt="" />
            <div className="caption">Pronto per sciare</div>
          </div>
        </ImageViewer>

        <ImageViewer>
          <div className="card4">
            <img src={Gallery4} alt="" />
            <div className="caption">Sorprendente</div>
          </div>
        </ImageViewer>

        <ImageViewer>
          <div className="card5">
            <img src={Gallery5} alt="" />
            <div className="caption">@Gambarie</div>
          </div>
        </ImageViewer>

        <ImageViewer>
          <div className="card6">
            <img src={Gallery6} alt="" />
            <div className="caption">Foto di gruppo</div>
          </div>
        </ImageViewer>

        <ImageViewer>
          <div className="card7">
            <img src={Gallery7} alt="" />
            <div className="caption">Foto di gruppo</div>
          </div>
        </ImageViewer>

        <ImageViewer>
          <div className="card9">
            <img src={Gallery9} alt="" />
            <div className="caption">Tempo di sci</div>
          </div>
        </ImageViewer>

        <ImageViewer>
          <div className="card10">
            <img src={Gallery10} alt="" />
            <div className="caption">Pista da sci</div>
          </div>
        </ImageViewer>
      </div>
      <h1 className="text-center text-7xl mb-10 mt-20 tracking-widest ">
      Gambarie D'Aspromonte
      </h1>

      {/* <div className="footprint">
        <img src={foot} className="a footprint" alt="footprint" />
        <img src={foot} className="b footprint" alt="footprint" />
        <img src={foot} className="c footprint" alt="footprint" />
        <img src={foot} className="d footprint" alt="footprint" />
        <img src={foot} className="e footprint" alt="footprint" />
        <img src={foot} className="f footprint" alt="footprint" />
        <img src={foot} className="g footprint" alt="footprint" />
        <img src={foot} className="h footprint" alt="footprint" />
        <img src={foot} className="i footprint" alt="footprint" />
        <img src={foot} className="j footprint" alt="footprint" />
        <img src={foot} className="k footprint" alt="footprint" />
        <img src={foot} className="l footprint" alt="footprint" />
        <img src={foot} className="m footprint" alt="footprint" />
        <img src={foot} className="n footprint" alt="footprint" />
        <img src={foot} className="o footprint" alt="footprint" />
        <img src={foot} className="p footprint" alt="footprint" />

        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js"></script>
      </div> */}

      <div className="container">
        <div className=" grid grid-cols-4 gap-8 pt-40 ">
          <ImageViewer>
            <div className="card12">
              <img src={Citta2} alt="" />
              <div className="caption">Tempo di calcio !</div>
            </div>
          </ImageViewer>

          <ImageViewer>
            <div className="card13">
              <img src={Citta3} alt="" />
              <div className="caption">Teatro</div>
            </div>
          </ImageViewer>

          <ImageViewer>
            <div className="card14">
              <img src={Citta4} alt="" />
              <div className="caption">Tempo di pallavolo</div>
            </div>
          </ImageViewer>

          <ImageViewer>
            <div className="card15">
              <img src={Citta5} alt="" />
              <div className="caption">Teatro</div>
            </div>
          </ImageViewer>

          <ImageViewer>
            <div className="card16">
              <img src={Citta6} alt="" />
              <div className="caption">Tempo di basket</div>
            </div>
          </ImageViewer>

          <ImageViewer>
            <div className="card18">
              <img src={Citta7} alt="" />
              <div className="caption">Pallavolo pronto!</div>
            </div>
          </ImageViewer>

          <ImageViewer>
            <div className="card19">
              <img src={Citta8} alt="" />
              <div className="caption">Foto di gruppo</div>
            </div>
          </ImageViewer>

          <ImageViewer>
            <div className="card20">
              <img src={Citta1} alt="" />
              <div className="caption">Tempo rilassante</div>
            </div>
          </ImageViewer>
        </div>
      </div>
      <h1 className="text-center text-7xl mb-10 mt-20 tracking-widest ">
        Città del Mare-Perla Del Golfo
      </h1>

      <div className="container">
        <div className=" grid grid-cols-4 gap-8 pt-40 ">
          <ImageViewer>
            <div className="card21">
              <img src={Bosco1} alt="" />
              <div className="caption">Scacchi!!</div>
            </div>
          </ImageViewer>

          <ImageViewer>
            <div className="card22">
              <img src={Bosco2} alt="" />
              <div className="caption">Tempo di basket</div>
            </div>
          </ImageViewer>

          <ImageViewer>
            <div className="card24">
              <img src={Bosco4} alt="" />
              <div className="caption">Scherma!!!</div>
            </div>
          </ImageViewer>

          <ImageViewer>
            <div className="card25">
              <img src={Bosco5} alt="" />
              <div className="caption">Calcio !!</div>
            </div>
          </ImageViewer>

          <ImageViewer>
            <div className="card26">
              <img src={Bosco6} alt="" />
              <div className="caption">Medaglie!!</div>
            </div>
          </ImageViewer>

          <ImageViewer>
            <div className="card27">
              <img src={Bosco7} alt="" />
              <div className="caption">Chiesa</div>
            </div>
          </ImageViewer>
          <ImageViewer>
            <div className="card28">
              <img src={Bosco8} alt="" />
              <div className="caption">Pallavolo</div>
            </div>
          </ImageViewer>

          <ImageViewer>
            <div className="card29">
              <img src={Bosco9} alt="" />
              <div className="caption">Chiesa</div>
            </div>
          </ImageViewer>
        </div>
        <h1 className="text-center text-7xl mb-20 mt-20 tracking-widest ">
        Istituto Salesiano Don Bosco Villa Ranchibile
        </h1>
      </div>
    </div>
  );
};

export default Gallery;
