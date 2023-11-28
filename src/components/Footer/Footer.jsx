export default function Footer() {
    return(
        <div className="footer_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h1 className="address_text">Address</h1>
              <div className="location_text"><a href="#"><img src="images/map-icon.png"/><span className="padding_left_15">No.123 Chalingt Gates,</span></a></div>
              <div className="location_text"><a href="#"><img src="images/call-icon.png"/><span className="padding_left_15">( +01 9876543210 )</span></a></div>
              <div className="location_text"><a href="#"><img src="images/mail-icon.png"/><span className="padding_left_15">Locations</span></a></div>
            </div>
            <div className="col-md-4">
              <h1 className="address_text">Social link</h1>
              <div className="location_text"><a href="#"><img src="images/fb-icon.png"/><span className="padding_left_15">Facebook</span></a></div>
              <div className="location_text"><a href="#"><img src="images/twitter-icon.png"/><span className="padding_left_15">Twitter</span></a></div>
              <div className="location_text"><a href="#"><img src="images/instagram-icon.png"/><span className="padding_left_15">Instagram</span></a></div>

            </div>
            <div className="col-md-4">
              <h1 className="address_text">Newsletter</h1>
              <input type="text" className="enter_text" placeholder="Enter Your Email"/>
              <div className="subscribe_bt"><a href="#">subscribe</a></div>
            </div>
          </div>
        </div>

      </div>
    )
}