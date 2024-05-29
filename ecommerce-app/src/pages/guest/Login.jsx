import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "E:/ecommerce/ecommerce-app/src/images/shopping-cart.png";
import Facebook from "E:/ecommerce/ecommerce-app/src/images/facebook.png";
import Google from "E:/ecommerce/ecommerce-app/src/images/google.png";


export default function Login() {
    return(
    <>
        <FormContainer>
            <div className="logo">
                <img src={Logo} alt=""/>
                <h2>CỬA HÀNG TRƯỜNG THỌ</h2>
                <h2>CHUYÊN VỀ ĐIỆN NƯỚC - PHỤ TÙNG XE GẮN MÁY</h2>
            </div>

            <div className="container">
                <h2 className="title">ĐĂNG NHẬP</h2>
                <form action="" className="submit">
                    <input type="text" name="email" placeholder="email hoặc số điện thoại" />
                    <input type="text" name="password" placeholder="mật khẩu" />
                    <div className="forget-password">bạn quên mật khẩu?</div>
                    <button type="submit">ĐĂNG NHẬP</button>
                </form>

                <h3>HOẶC ĐĂNG NHẬP VỚI</h3>

                    <div className="other-login-methods">
                        <div className="method">
                            <img src={Facebook} alt=""/>
                            <span>FACEBOOK</span>
                        </div>

                        <div className="method">
                            <img src={Google} alt=""/>
                            <span>GOOGLE</span>
                        </div>
                    </div>

                    <h3>Bạn chưa có tài khoản? <Link to="/register">ĐĂNG KÝ</Link> </h3>
                </div>
            </FormContainer>
    </>
    );
}

const FormContainer = styled.div`
    display: flex;
    justify-content: space-around;
    
    .logo 
    {
        color: white;
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

    .container 
    {
        width: 40%;
        height: 60%;
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

            input
            {
                background-color: white;
                height: 50px;
                width: 480px;
                border-radius: 5px;
                padding-left: 20px;
                border:none;
                outline: none;
            }

            .forget-password 
            {
                transition: color 0.1s;
                
                &:hover
                {
                    cursor: pointer;
                    color: wheat;
                }
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

            div 
            {
                margin-left: 22rem;
                margin-bottom: -1rem;
            }

        }

        h3 
        {
            padding-top: 1rem;
            font-weight: 500;
        }
        
        .other-login-methods
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

        a
        {
            color: blue;
        }
    }

`;