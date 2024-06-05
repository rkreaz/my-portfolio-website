import React from "react";
import fontImage from "../../assets/images/blog/Best-email-signature-safe-fonts.jpg";
import fontClients from "../../assets/images/blog/font-clients.jpg";

const BlogOne = () => {
  return (
    <div className="blog_area">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="modal-body">
              <img
                src={fontImage}
                alt="Best email signature safe fonts"
                className="img-fluid modal-feat-img"
              />
              <div className="news-details">
                <span className="date">Mar 29, 2019</span>
                <h2 className="title text-dark">
                  Best email signature safe fonts
                </h2>
                Safe fonts are available in all the devices and no matter which
                device you choose. Your email signature will always look same.
                There are so many safe fonts available which are pre-installed
                on every device. <br />
                <br />
                <ul>
                  <li>Arial</li>
                  <li>Tahoma</li>
                  <li>Verdana</li>
                  <li>Trebuchet</li>
                  <li>Courier</li>
                  <li>Lucida</li>
                  <li>Times New Roman</li>
                  <li>Georgia</li>
                  <li>Palatino</li>
                </ul>
                <h6 className="text-dark">Best email signature safe fonts</h6>
                Selecting the safe font in email signature is very important. If
                you don’t choose the proper email signature font than this may
                create problem in different devices. As, all devices don’t have
                every font installed in their system. That’s why safe font is
                recommended to use. Safe fonts are the fonts that available
                almost all the devices like pc, mac, iPhone, iPad or even
                android. <br />
                <br />
                Safe fonts are available in all the devices and no matter which
                device you choose. Your email signature will always look same.
                There are so many safe fonts available which are pre-installed
                in every device. <br />
                <br />
                <h6 className="text-dark">
                  Why Web fonts shouldn’t be used in email signature?{" "}
                </h6>
                On send request email clients strip the head of the HTML email
                signature. So, using email clients that have this features, we
                definitely can’t include web fonts in the email signature, So,
                we have to keep in mind that, if the web email client strips the
                request then we can’t see the email signature properly. That
                means it’s like a variable. That’s why we should not use any web
                font in the email signature.
                <br />
                <br />
                But if the recipient has the exact web font installed than we
                can add web font. But it depends on situation whether the exact
                web font is installed in the client recipient device or not.
                <br />
                <br />
                Therefore, if you like to add Web fonts than please be sure
                about the installation. Otherwise, it will be wise not to use
                web font in the email signature.
                <br />
                <br />
                <h6 className="text-dark">
                  Can Email client send the web fonts in Email Signature?
                </h6>
                Yes, they can. But there is very small number of email client
                can send these web fonts. It’s because some email clients strip
                out the head of the HTML. But it is negligible. It is wise not
                to use web font in the email signature. <br />
                <br />
                <img src={fontClients} alt="Best email signature safe fonts" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogOne;
