import { mediaUrl } from '../../../../config/media';
import React, { useState } from 'react';
import '../../../../pages/page.css';
import { Link } from 'react-router-dom';
import ProductLeadModal from '../../../../components/common/ProductLeadModal';



const Sumitomoproducttwelve = () => {
  const [productImage, setProductImage] = useState(mediaUrl.image("Z2C.webp"));
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (image, icon) => {
    setProductImage(image);
    setActiveIcon(icon);
  };

  return (
    <div>
      <div className='product_d'>
        <div className='product_s1v1' style={{ backgroundColor: "#e6e6e6" }}>
          <div className='product_s1v1_1'>
            <div className='product_s1v1_h1'>
              <div className='product_s1v1_s1'>
                <h3 className='product_s1v1_s1_name'>SUMITOMO <br />FC-6 series</h3>
                <p style={{ marginLeft: "10px" }}>
                  The Sumitomo Electric FC-8R is a handheld fiber cleaver featuring an auto-rotating blade, designed for both single fibers and up to 12-fiber ribbons. Its patented mechanism ensures consistent, high-quality cleaves without the need for blade adjustment. The cleaver boasts a durable blade capable of over 60,000 cleaves, enhancing field efficiency. Additional user-friendly features include a selectable lid opening angle and a large-capacity off-cut collector.
                </p>
              </div>

              <div className='product_s1v1_s2'>
                <Link to="/contact">
                  <button className='products1v_button'>Enquire Now</button>
                </Link>
              </div>
            </div>

            <div className='product_s1v1_h2'>
              <img loading="lazy"
                className={`product_s1v1_icon1 product_s1v1_icon ${activeIcon === 'icon1' ? 'active' : ''}`}
                src={mediaUrl.image("i6.webp")}
                alt='Feature Icon'
                onClick={() => handleIconClick(mediaUrl.image("i6.webp"), 'icon1')} />

              <img loading="lazy"
                className={`product_s1v1_icon2 product_s1v1_icon ${activeIcon === 'icon2' ? 'active' : ''}`}
                src={mediaUrl.image("i7.webp")}
                alt='Feature Icon'
                onClick={() => handleIconClick(mediaUrl.image("i7.webp"), 'icon2')} />

              <img loading="lazy"
                className={`product_s1v1_icon3 product_s1v1_icon ${activeIcon === 'icon3' ? 'active' : ''}`}
                src={mediaUrl.image("i8.webp")}
                alt='Feature Icon'
                onClick={() => handleIconClick(mediaUrl.image("i8.webp"), 'icon3')} />

              <img loading="lazy"
                className={`product_s1v1_icon4 product_s1v1_icon ${activeIcon === 'icon4' ? 'active' : ''}`}
                src={mediaUrl.image("i9.webp")}
                alt='Feature Icon'
                onClick={() => handleIconClick(mediaUrl.image("i9.webp"), 'icon4')} />

              <img loading="lazy"
                className={`product_s1v1_icon5 product_s1v1_icon ${activeIcon === 'icon5' ? 'active' : ''}`}
                src={mediaUrl.image("i5.webp")}
                alt='Feature Icon'
                onClick={() => handleIconClick(mediaUrl.image("i5.webp"), 'icon5')} />
            </div>
          </div>

          <div className='product_s1v1_2'>
            <img
              style={{ maxWidth: "100%", height: "auto", display: "block" }}
              className='product_s1v1_2_img' src={productImage} fetchpriority="high" alt="Product" />
          </div>
        </div>
      </div>

      {/*
      <div className='product_d_feature'>
        <div className='product_d_feature_art'>
          <h3 style={{ fontSize: "32px" }}>All New Technology</h3>
          <p style={{ marginTop: "30px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsa error nesciunt libero molestias laboriosam, illum culpa debitis atque? Optio illum, vitae quis cupiditate facere beatae provident possimus mollitia ipsa!
          </p>
        </div>
        <div className='product_d_feature_img'>
          
          {mediaUrl.image("i6.webp") && (
            <img loading="lazy" src={mediaUrl.image("i6.webp")} alt="Feature" style={{ width: "60%", display: "block", margin: "0 auto" }} />
          )}
        </div> 

        <img loading="lazy" style={{width: "100%"}} src={mediaUrl.image("i10.webp")} alt=" EPON OLT FEATURE" />

      </div>**/}


      <div className='products1v-feature-section-f2'>

        <div className='featurez2c-section-f2-a'>
          <img loading="lazy" style={{ width: "100%" }} src={mediaUrl.image("i10.webp")} alt="EPON OLT FEATURE" />

        </div>
        <div className='featurez2c-section-f2-b'>
          <p>
            The Sumitomo Electric FC-8R is a high-precision handheld fiber cleaver designed for both single fibers and up to 12-fiber ribbons. It features an auto-rotating blade, ensuring consistent cleaving quality without the need for manual blade adjustments. The cleaver's durable blade offers a lifespan of approximately 60,000 cleaves, enhancing long-term efficiency. User-friendly functions include a selectable lid opening angle and a large capacity off-cut collector, making it ideal for field operations. Additionally, the FC-8R-FC variant comes equipped with a digital cleave counter, assisting users in tracking cleave counts for timely blade replacements.
          </p>
        </div>

      </div>


      < div className='table-wrapper'>










      </div>






      <div className='product_z2c1_product'>
        <div className='product_z2c1_product1'>
          <img loading="lazy" className='product_z2c1_img' src="" alt="Z2C" />
          <h3 className='productz2c_name_option'>Z2C</h3>
          <Link to="/sumitomoproductthree" style={{ textDecoration: "none" }}>
            <button className='productz2c_button_option'>Know More</button>
          </Link>
        </div>
        <div className='product_z2c1_product2'>
          <img loading="lazy" className='product_z2c1_img' src="" alt="82C+" />
          <h3 className='productz2c_name_option'>82C+</h3>
          <Link to="/sumitomoproductone" style={{ textDecoration: "none" }}>
            <button className='productz2c_button_option'>Know More</button>
          </Link>
        </div>
        <div className='product_z2c1_product3'>
          <img loading="lazy" className='product_z2c1_img' src="" alt="W1C" />
          <h3 className='productz2c_name_option'>W1C</h3>
          <Link to="/sumitomoproducttwo" style={{ textDecoration: "none" }}>
            <button className='productz2c_button_option'>Know More</button>
          </Link>
        </div>
        <div className='product_z2c1_product4'>
          <img className='product_z2c1_img' src="" fetchpriority="high" alt="FC8R" />
          <h3 className='productz2c_name_option'>FC8R</h3>
          <Link to="/sumitomoproducttwo" style={{ textDecoration: "none" }}>
            <button className='productz2c_button_option'>Know More</button>
          </Link>
        </div>
      </div>
    
      <ProductLeadModal
        isOpen={enquireOpen}
        onClose={() => setEnquireOpen(false)}
        pageName="Optronix Product"
      /></div>
  );
};

export default Sumitomoproducttwelve;


