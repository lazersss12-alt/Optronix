import media_Z2C_jpg from '../../../../assets/img2/img/Z2C.jpg';
import media_i6_png from '../../../../assets/img2/img/media/images/i6.png';
import media_i7_png from '../../../../assets/img2/img/media/images/i7.png';
import media_i8_png from '../../../../assets/img2/img/media/images/i8.png';
import media_i9_png from '../../../../assets/img2/img/media/images/i9.png';
import media_i5_png from '../../../../assets/img2/img/media/images/i5.png';
import media_i10_png from '../../../../assets/img2/img/media/images/i10.png';
import media_Backup_of_Z2C_2june_png from '../../../../assets/img2/img/media/images/backup_of_z2c 2june.png';
import media_82C__1Oct_2024_png from '../../../../assets/img2/img/media/images/82C+ 1Oct 2024.png';
import media_W1C_file_png from '../../../../assets/img2/img/W1C file.png';
import media_FC8r_png from '../../../../assets/img2/img/media/images/fc8r.png';
import React, { useState } from 'react';
import '../../../../pages/page.css';
import { Link } from 'react-router-dom';
import ProductLeadModal from '../../../../components/common/ProductLeadModal';

const Sumitomoproducttwelve = () => {
<<<<<<< HEAD
  const [productImage, setProductImage] = useState(media_Z2C_jpg);
=======
  const [productImage, setProductImage] = useState(mediaUrl.image("z2c.jpg"));
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
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
                src={media_i6_png}
                alt='Feature Icon'
                onClick={() => handleIconClick(media_i6_png, 'icon1')} />

              <img loading="lazy"
                className={`product_s1v1_icon2 product_s1v1_icon ${activeIcon === 'icon2' ? 'active' : ''}`}
                src={media_i7_png}
                alt='Feature Icon'
                onClick={() => handleIconClick(media_i7_png, 'icon2')} />

              <img loading="lazy"
                className={`product_s1v1_icon3 product_s1v1_icon ${activeIcon === 'icon3' ? 'active' : ''}`}
                src={media_i8_png}
                alt='Feature Icon'
                onClick={() => handleIconClick(media_i8_png, 'icon3')} />

              <img loading="lazy"
                className={`product_s1v1_icon4 product_s1v1_icon ${activeIcon === 'icon4' ? 'active' : ''}`}
                src={media_i9_png}
                alt='Feature Icon'
                onClick={() => handleIconClick(media_i9_png, 'icon4')} />

              <img loading="lazy"
                className={`product_s1v1_icon5 product_s1v1_icon ${activeIcon === 'icon5' ? 'active' : ''}`}
                src={media_i5_png}
                alt='Feature Icon'
                onClick={() => handleIconClick(media_i5_png, 'icon5')} />
            </div>
          </div>

          <div className='product_s1v1_2'>
            <img
              style={{ maxWidth: "100%", height: "auto", display: "block" }}
              className='product_s1v1_2_img' src={productImage} fetchpriority="high" alt="Product" />
          </div>
        </div>
      </div>

      <div className='products1v-feature-section-f2'>
        <div className='featurez2c-section-f2-a'>
          <img loading="lazy" style={{ width: "100%" }} src={media_i10_png} alt="EPON OLT FEATURE" />
        </div>
        <div className='featurez2c-section-f2-b'>
          <p>
            The Sumitomo Electric FC-8R is a high-precision handheld fiber cleaver designed for both single fibers and up to 12-fiber ribbons. It features an auto-rotating blade, ensuring consistent cleaving quality without the need for manual blade adjustments. The cleaver's durable blade offers a lifespan of approximately 60,000 cleaves, enhancing long-term efficiency. User-friendly functions include a selectable lid opening angle and a large capacity off-cut collector, making it ideal for field operations. Additionally, the FC-8R-FC variant comes equipped with a digital cleave counter, assisting users in tracking cleave counts for timely blade replacements.
          </p>
        </div>
      </div>

      <div className='product_z2c1_product'>
        <div className='product_z2c1_product1'>
<<<<<<< HEAD
          <img loading="lazy" className='product_z2c1_img' src={media_Backup_of_Z2C_2june_png} alt="Z2C" />
=======
          <img loading="lazy" className='product_z2c1_img' src={mediaUrl.image("backup_of_z2c 2june.png")} alt="Z2C" />
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
          <h3 className='productz2c_name_option'>Z2C</h3>
          <Link to="/sumitomo/Z2C" style={{ textDecoration: "none" }}>
            <button className='productz2c_button_option'>Know More</button>
          </Link>
        </div>
        <div className='product_z2c1_product2'>
<<<<<<< HEAD
          <img loading="lazy" className='product_z2c1_img' src={media_82C__1Oct_2024_png} alt="82C+" />
=======
          <img loading="lazy" className='product_z2c1_img' src={mediaUrl.image("82c+ 1oct 2024.png")} alt="82C+" />
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
          <h3 className='productz2c_name_option'>82C+</h3>
          <Link to="/sumitomo/82CPLUS" style={{ textDecoration: "none" }}>
            <button className='productz2c_button_option'>Know More</button>
          </Link>
        </div>
        <div className='product_z2c1_product3'>
<<<<<<< HEAD
          <img loading="lazy" className='product_z2c1_img' src={media_W1C_file_png} alt="W1C" />
=======
          <img loading="lazy" className='product_z2c1_img' src={mediaUrl.image("w1c file.png")} alt="W1C" />
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
          <h3 className='productz2c_name_option'>W1C</h3>
          <Link to="/sumitomo/W1C" style={{ textDecoration: "none" }}>
            <button className='productz2c_button_option'>Know More</button>
          </Link>
        </div>
        <div className='product_z2c1_product4'>
<<<<<<< HEAD
          <img className='product_z2c1_img' src={media_FC8r_png} fetchpriority="high" alt="FC8R" />
=======
          <img className='product_z2c1_img' src={mediaUrl.image("fc8r.png")} fetchpriority="high" alt="FC8R" />
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
          <h3 className='productz2c_name_option'>FC8R</h3>
          <Link to="/sumitomo/FC8R" style={{ textDecoration: "none" }}>
            <button className='productz2c_button_option'>Know More</button>
          </Link>
        </div>
      </div>
    
      <ProductLeadModal
        isOpen={enquireOpen}
        onClose={() => setEnquireOpen(false)}
        pageName="Optronix Product"
      />
    </div>
  );
};

export default Sumitomoproducttwelve;
