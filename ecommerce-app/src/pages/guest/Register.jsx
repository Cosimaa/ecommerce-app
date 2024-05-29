import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "E:/ecommerce/ecommerce-app/src/images/shopping-cart.png";
import Facebook from "E:/ecommerce/ecommerce-app/src/images/facebook.png";
import Google from "E:/ecommerce/ecommerce-app/src/images/google.png";

export default function Register() {
  return (
    <>
    <FormContainer>
      <div className="left">
        <div className="logo">
          <img src={Logo} alt="" />
          <h2>CỬA HÀNG TRƯỜNG THỌ</h2>
          <h2>CHUYÊN VỀ ĐIỆN NƯỚC - PHỤ TÙNG XE GẮN MÁY</h2>
        </div>

        <h3>_______ HOẶC ĐĂNG KÝ VỚI _______</h3>

        <div className="other-register-method">
          <div className="method">
              <img src={Facebook} alt=""/>
              <span>FACEBOOK</span>
          </div>

         <div className="method">
           <img src={Google} alt=""/>
           <span>GOOGLE</span>
         </div>
        </div>
      </div>

      <div className="right">
        <h3>ĐĂNG KÝ</h3>
        <form action="">
          <input type="text" name="name" placeholder="họ và tên" />
          <input type="text" name="email" placeholder="email hoặc số điện thoại" />
          <input type="password" name="password" placeholder="mật khẩu" />
          <input type="password" name="confirmPassword" placeholder="nhập lại mật khẩu" />

          <button type="submit">ĐĂNG KÝ</button>

          <div>bạn đã có tài khoản? <span><Link to="/login">ĐĂNG NHẬP</Link></span></div>
        </form>
      </div>
    </FormContainer>
    </>
  )
}

const FormContainer = styled.div`
   display: flex;
   justify-content: space-around;
   
   .left 
   {
    display: flex;
    flex-direction: column;
    color: white;
    justify-content: center;
    align-items: center;

        
        .logo 
        {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
      
            img 
            {
              width: 209px;
              height: 207px;
            }
        }

        .other-register-method 
        {
            display: flex;
            gap: 5rem;
            .method 
            {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 1rem;
                width: 10rem;
                height: 4rem;
                background-color: rgb(213, 49, 150);
                background-blend-mode: color-burn;
                border-radius: 5px;
                transition: background-color 0.2s;

                &:hover 
                {
                    cursor: pointer;
                    background-color: rgba(213, 49, 150, 0.7);
                }
                
                img
                {
                    width: 54px;
                    height: 54px;
                }
            }
        }   
   }

   .right 
   {
        width: 40%;
        padding-top: 2rem;
        padding-bottom: 2rem;
        background-color: #e8528e;
        background-blend-mode: color-burn;
        border-radius: 5px;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;  
        margin-top: 4rem;

        form 
        {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            justify-content: center;
            align-items: center;

            input[type=text], input[type=password]
            {
                background-color: white;
                height: 50px;
                width: 480px;
                border-radius: 5px;
                padding-left: 20px;
                border:none;
                outline: none;
            }

            button 
            {
                background-color: #d53196;
                mix-blend-mode: color-burn;
                height: 50px;
                width: 500px;
                border-radius: 5px;
                border:none;
                font-weight: bold;
                font-size: 20px;
                color: black;
                transition: background-color 0.2s;

                &:hover 
                {
                    cursor: pointer;
                    background-color: rgba(213, 49, 150, 0.7);
                }
            }

            a 
            {
                color: blue;
            }

        }
   }
`;
