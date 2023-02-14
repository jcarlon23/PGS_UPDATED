import React from 'react'
import "./Contact.css";
import Pro1 from "./Pro1.png";
import Back1 from "./Back1.png";


const Contact = () => {


  return (
    <div class="container">
	<div class="row">
			<h9>Contattaci</h9>
	</div>
	<div class="row">
			<h10>Ci piacerebbe sentirti!</h10>
      <div className="person">
      <div className="person1">
      <div className="container2">
      <div class="flip-person">
  <div class="flip-person-inner">
    <div class="flip-person-front">
        <img src={Pro1} height={320} width={320} alt="" />
        </div>
        <div class="flip-person-back">
      <h1>Sergio Ragusa</h1>
    </div>
  </div>
</div>
        </div>
        </div>
        </div>
        </div>

        <div className="person2">
        <div className="container2">
        <div class="flip-person">
        <div class="flip-person-inner">
        <div class="flip-person-front">
       <img src={Back1} height={320} width={320} alt="" />
        </div>
        <div class="flip-person-back">
      <h1>Fabio Puleo</h1>
    </div>

  </div>
      </div>
</div>
</div>











	<div class="row input-container">
			<div class="col-xs-12">
				<div class="styled-input wide">
					<input type="text" required />
					<label>Name</label>
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="styled-input">
					<input type="text" required />
					<label>Email</label>
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="styled-input">
					<input type="text" required />
					<label>Phone Number</label>
				</div>
			</div>
			<div class="col-xs-12">
				<div class="styled-input wide">
					<textarea required></textarea>
					<label>Message</label>
				</div>
			</div>
	</div>
  <div class="col-xs-12">
				<div class="btn-lrg submit-btn">Send Message</div>
			</div>
</div>








  )
}








export default Contact
