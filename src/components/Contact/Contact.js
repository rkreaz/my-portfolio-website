import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import contactMe from '../../assets/images/contact1.png'

const Contact = () => {

  const [sendLoader, setSendLoader] = useState(false)

  const handleContactForm = (e) => {
    setSendLoader(true)
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;
    const status = 'unread';

    const checkEmpty = (name, filed) => {
      if(!name){
        toast.warn(`${filed} filed can't be empty`, {
          position: 'top-center'
        });
        setSendLoader(false)
        return;
      }
    }
    checkEmpty(name, 'Name')
    checkEmpty(phone, 'Phone')
    checkEmpty(email, 'Email')
    const validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!validateEmail.test(email)) {
      toast.error('Please provide a valid email', {
        position: 'top-center'
      });
      setSendLoader(false)
      return;
    }
    checkEmpty(subject, 'Subject')
    checkEmpty(message, 'Message')
    
    const sendMessage = {name, phone, email, subject, message, status};

    console.log(sendMessage)

    axios.post("https://backend.asadjulhas.com/contact", sendMessage, {
                  })
                  .then((res) => {
                    if (res.data.message) {
                      console.log(res.data.message)
                    } else if (res.data.insertedId) {
                      toast.success(`Hi ${name}, Your message was successfully sent!`, {
                        position: 'top-center'
                      });
                      e.target.reset();
                      setSendLoader(false)
                    }
                  });
  }

  return (
    <div className="rn-contact-area rn-section-gap section-separator" id="contacts">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title text-center">
                    <span className="subtitle">Contact</span>
                    <h2 className="title">Contact With Me</h2>
                </div>
            </div>
        </div>

        <div className="row mt--50 mt_md--40 mt_sm--40 mt-contact-sm">
            <div className="col-lg-5">
                <div className="contact-about-area">
                    <div className="thumbnail">
                        <img src={contactMe} alt="contact-img"/>
                    </div>
                    <div className="title-area">
                        <h4 className="title">Rezaul Karim Reaz</h4>
                        <span>Front-end Developer</span>
                    </div>
                    <div className="description">
                        <p>I am available for freelance work. Connect with me via email and call in to my account.
                        </p>
                        <span className="phone">Phone: <a href="tel:+8801737929271">+8801737929271</a></span>
                        <span className="mail">Email: <a href="mailto:rkreaz91@gmail.com">rkreaz91@gmail.com</a></span>
                    </div>
                    <div className="social-area">
                        <div className="name">FIND WITH ME</div>
                        <div className="social-icone footer_social">
                        <a title='Linkedin' href="https://www.linkedin.com/in/asadjulhas/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                        <a title='Github' href="https://github.com/asadjulhas"><i className="fa fa-github" aria-hidden="true"></i></a>
                        <a title='Facebook' href="https://www.facebook.com/asadjulha/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                                
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos-delay="600" className="col-lg-7 contact-input">
                <div className="contact-form-wrapper">
                    <div className="introduce">

                        <form onSubmit={handleContactForm} className="rnt-contact-form rwt-dynamic-form row" id="contact-form">

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="contact-name">Your Name</label>
                                    <input required className="form-control form-control-lg" name="name" id="contact-name" type="text"/>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="contact-phone">Phone Number</label>
                                    <input required className="form-control" name="contact-phone" id="phone" type="text"/>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="contact-email">Email</label>
                                    <input required className="form-control form-control-sm" id="contact-email" name="email" type="email"/>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="subject">subject</label>
                                    <input required className="form-control form-control-sm" id="subject" name="subject" type="text"/>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="contact-message">Your Message</label>
                                    <textarea required name="contact-message" id="message" cols="30" rows="10"></textarea>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <button name="submit" type="submit" id="submit" className="rn-btn">
                                  {!sendLoader ? <span>SEND MESSAGE</span> : <> <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> MESSAGE SENDING ...</> }  
                                   
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default Contact;