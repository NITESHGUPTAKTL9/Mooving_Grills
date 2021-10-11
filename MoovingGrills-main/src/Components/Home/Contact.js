import React from 'react';

import "./Contact.css";

export default class Contact extends React.Component {

   

    render() {
        return (
            <>
    
            <p> </p>
            <div className="wrapper" id="contact">

<form className="form">
    <div className="pageTitle title">Contact Us </div>
    <div className="secondaryTitle title">Please fill this form to reach us.</div>
    <input type="text" className="name formEntry" placeholder="Name" required />
    <input type="text" className="email formEntry" placeholder="Email" required />
    <input type="tel" className="email formEntry" placeholder="Phone"  required/>
    <textarea className="message formEntry" placeholder="Message" required></textarea>
    <button className="submit formEntry">Submit</button>
</form>





</div>




            </>



        )
    }
}


