export default function Testimonials() {
    return(
        <div className="testimonial_section layout_padding">
        <div className="container">
          <div id="my_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="image_2"><img src="images/img-2.png"/></div>
                <h1 className="about_taital">Testimonial</h1>
                <div className="testimonial_main">
                  <div className="client_main">
                    <div className="client_left">
                      <div><img src="images/client-img.png" className="client_img"/></div>
                    </div>
                    <div className="client_right">
                      <h4 className="magna_text">Magna</h4>
                      <p className="consectetur_text">Consectetur adipiscing</p>
                    </div>
                  </div>
                  <p className="ipsum_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum</p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="image_2"><img src="images/img-2.png"/></div>
                <h1 className="about_taital">Testimonial</h1>
                <div className="testimonial_main">
                  <div className="client_main">
                    <div className="client_left">
                      <div><img src="images/client-img.png" className="client_img"/></div>
                    </div>
                    <div className="client_right">
                      <h4 className="magna_text">Magna</h4>
                      <p className="consectetur_text">Consectetur adipiscing</p>
                    </div>
                  </div>
                  <p className="ipsum_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum</p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="image_2"><img src="images/img-2.png"/></div>
                <h1 className="about_taital">Testimonial</h1>
                <div className="testimonial_main">
                  <div className="client_main">
                    <div className="client_left">
                      <div><img src="images/client-img.png" className="client_img"/></div>
                    </div>
                    <div className="client_right">
                      <h4 className="magna_text">Magna</h4>
                      <p className="consectetur_text">Consectetur adipiscing</p>
                    </div>
                  </div>
                  <p className="ipsum_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum</p>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
              <i className=""><img src="images/left-icon1.png"/></i>
            </a>
            <a className="carousel-control-next" href="#my_slider" role="button" data-slide="next">
              <i className=""><img src="images/right-icon1.png"/></i>
            </a>
          </div>
        </div>
      </div>
    )
}