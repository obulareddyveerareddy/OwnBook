import React from 'react';
import "./_pages.scss";

const ContactPage = ()=>{
    return(
        <div className="row" id="contactPage">
            <div className="col s4 offset-s4">
              <span className="heading-name">Veera Bhargava Reddy. ObulaReddy</span>
              <p className="heading-address">Flat No:489; A-Block;</p>
              <p className="heading-address">Mahaveer Orchids; Choodasandhra;</p>
              <p className="heading-address">Bangalore - 560099</p>
              <p className="heading-address" style={{display:'flex'}}>
                <i class="material-icons">email</i>
                <a href="mailto:example@email.com" style={{paddingLeft:'4px'}}>veerareddy.obula@gmail.com</a>
              </p>
              <p className="heading-address" style={{display:'flex'}}>
                <i class="material-icons">contact_phone</i>
                <span style={{paddingLeft:'4px'}}>+91-8105555322 <br/> +91-9440949111</span>
              </p>
            </div>
        </div>
    )
}

export default ContactPage;
