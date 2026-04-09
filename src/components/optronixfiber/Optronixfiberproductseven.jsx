import React, { useState } from 'react';
import './Optronixfiberproduct.css';
import { Link } from 'react-router-dom';
import ProductLeadModal from '../common/ProductLeadModal';

const Optronixfiberproductseven = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <div className='product_d'>
        <div className='product1_d1'>
            <div className='product1_d1_1'>
              <div className='product1_d1_h1'>
            <div className='product1_d1_s1'>
                <h3 className='product1_d1_s1_name'>Gold <br/> Eight Core Fiber (8F) </h3>
                <p style={{marginLeft: "10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro asperiores consequatur libero ex quis impedit? Recusandae, architecto numquam! </p>
            </div>

                <div className='product1_d1_s2'>

                  <button className='product_button' onClick={() => setIsModalOpen(true)}>Enquire Now</button>

                </div>
                </div>
                <div className='product1_d1_h2'>
                  
                  <img className='product1_icon1 product_icon' src="" alt="Feature Icon" />
                  <img className='product1_icon2 product_icon' src="" alt="Feature Icon" />
                  <img className='product1_icon3 product_icon' src="" alt="Feature Icon" />
                  <img className='product1_icon4 product_icon' src="" alt="Feature Icon" />
                  <img className='product1_icon5 product_icon' src="" alt="Feature Icon" />

                </div>
                
            </div>
            <div className='product1_d1_2'>
              
            <img className='product1_d1_2_img' src="" alt="product" />
            
            
            </div>
        </div>
        </div>

        <div className='product_d_feature'>
          <div className='product_d_feature_art'>
            <h3 style={{fontSize: "32px"}}>All New Technology</h3>
            <p style={{marginTop: "30px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsa error nesciunt libero molestias laboriosam, illum culpa debitis atque? Optio illum, vitae quis cupiditate facere beatae provident possimus mollitia ipsa!</p>
          </div>
          <div className='product_d_feature_img'>
            <img src="" alt="Feature" style={{width: " 60%", display: "block", margin: "0 auto" }}/>
          </div>
        </div>

        <div className='product_d_product'>
          <div className='product_d_product1'>
            <img className='product_d_img' src="" alt=""  />
            <h3 className='product_name_option'>Z2C</h3>
           <Link to={"/sumitomoproductthree"} style={{textDecoration: "none"}}><button className='product_button_option'>Know More</button></Link> 

          </div>
          <div className='product_d_product2'>
            <img className='product_d_img' src="" alt="" />
            <h3 className='product_name_option'>S1V Ultra</h3>
           <Link style={{textDecoration: "none"}}><button className='product_button_option'>Know More</button></Link> 
            

          </div>
          <div className='product_d_product3'>
            <img className='product_d_img' src="" alt=""  />
            <h3 className='product_name_option'>S1V Ultra</h3>
           <Link to={"/sumitomoproducttwo"} style={{textDecoration: "none"}}><button className='product_button_option'>Know More</button></Link> 

          </div>
          <div className='product_d_product4'>
            <img className='product_d_img' src="" alt=""  />
            <h3 className='product_name_option'>82C+</h3>
           <Link to={"/sumitomoproducttwo"} style={{textDecoration: "none"}}><button className='product_button_option'>Know More</button></Link> 

          </div>
        </div>
      <ProductLeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pageName="Optronix Fiber - Gold 8F"
      />
    </div>
  )
}

export default Optronixfiberproductseven;