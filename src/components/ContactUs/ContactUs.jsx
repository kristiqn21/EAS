export default function ContactUs() {
    return(
        <div className="contact_section layout_padding">
        <div className="container">
          <div className="image_2"><img src="images/img-2.png"/></div>
          <h1 className="about_taital">Contact Us</h1>
          <div className="row">
              <div className="col-md-6">
                <div className="mail_sectin">
                  <input type="text" className="email-bt" placeholder="Your Name" name="Name"/>
                  <input type="text" className="email-bt" placeholder="Email" name="Name"/>
                  <input type="text" className="email-bt" placeholder="Phone Number" name="Name"/>
                  <textarea className="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                  <div className="send_bt"><a href="#">Send</a></div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="map_main">
                  <div className="map-responsive">
                    {/* <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width="600" height="480" frameborder="0" style="border:0; width: 100%;" allowfullscreen></iframe> */}
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
}