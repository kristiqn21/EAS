import React from 'react';

const VegetableItem = ({ imgSrc, price, name, weight, description, buyLink }) => (
  <div className="col">
    <div className="box_section">
      <div className="image_4"><img src={imgSrc} alt={name} /></div>
      <h2 className="dolor_text">${price}</h2>
      <h2 className="dolor_text">{name}</h2>
      <h2 className="dolor_text_1">{weight}</h2>
      <p className="tempor_text">{description}</p>
      <div className="buy_bt_1"><a href={buyLink}>Buy Now</a></div>
    </div>
  </div>
);

const VegetableSection = () => {
  const vegetables = [
    { imgSrc: 'images/img-4.png', price: 10, name: 'Tomato', weight: '1 kg', description: 'adipiscing elit, sed do eiusmod tempor', buyLink: '#' },
    // Add more vegetable items as needed
  ];

  return (
    <div className="vegetables_section layout_padding">
      <div className="container">
        <h1 className="about_taital">Our Vegetables</h1>
        <p className="lorem_text">Reader will be distracted by the readable content of a</p>
        <div className="vegetables_section_2 layout_padding">
          <div className="row">
            {vegetables.map((vegetable, index) => (
              <VegetableItem key={index} {...vegetable} />
            ))}
          </div>
        </div>
        <div className="read_bt_1"><a href="#">Read More</a></div>
      </div>
    </div>
  );
};

export default VegetableSection;
