import React from 'react';

const BannerItem = ({ imgSrc, title, color, text, buyLink, readMoreLink }) => (
  <div className="carousel-item">
    <div className="row">
      <div className="col-md-6">
        <div className="image_1"><img src={imgSrc} alt="Banner" /></div>
      </div>
      <div className="col-md-6">
        <h1 className="banner_taital">Vegetables <span style={{ color }}>{title}</span></h1>
        <p className="banner_text">{text}</p>
        <div className="buy_bt"><a href={buyLink}>Buy Now</a></div>
        <div className="read_bt"><a href={readMoreLink}>Read More</a></div>
      </div>
    </div>
  </div>
);

const BannerSection = () => {
  const bannerItems = [
    {
      imgSrc: 'images/img-1.png',
      title: 'Shop',
      color: '#ecad15',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem',
      buyLink: '#',
      readMoreLink: '#'
    },
    // Add more banner items as needed
  ];

  return (
    <div className="banner_section layout_padding">
      <div className="container">
        <div id="main_slider" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {bannerItems.map((banner, index) => (
              <BannerItem key={index} {...banner} />
            ))}
          </div>
          <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
            <i className=""><img src="images/left-icon.png" alt="Left Icon" /></i>
          </a>
          <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
            <i className=""><img src="images/right-icon.png" alt="Right Icon" /></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
