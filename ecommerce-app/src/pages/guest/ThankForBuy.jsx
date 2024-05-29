import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Logo from "E:/ecommerce/ecommerce-app/src/images/shopping-cart.png";
import Help from "E:/ecommerce/ecommerce-app/src/images/question.png";
import Alarm from "E:/ecommerce/ecommerce-app/src/images/bell.png";
import User from "E:/ecommerce/ecommerce-app/src/images/user.png";
import Heart from "E:/ecommerce/ecommerce-app/src/images/heart.png";

export default function ThankForBuy() {
    const navigate = useNavigate();

    const backToHome = () => {
        navigate("/");
    }


    return(
        <>
            <FormContainer>
                <div className="header">
                    <div className="logo">
                        <img src={Logo} alt=""/>
                        <div className="brand-name">TRƯỜNG THỌ</div>
                    </div>

                    <div className="icons">
                        <img src={Help} alt="" />
                        <img src={Alarm} alt="" />
                        <img src={User} alt="" />
                    </div>
                </div>

                <div className="main">
                    <p className="block">CẢM ƠN BẠN VÌ ĐÃ TIN TƯỞNG LỰA CHỌN SHOP <span><img src={Heart} alt="" /></span></p>
                    <p>ĐƠN HÀNG SẼ ĐƯỢC XỬ LÝ VÀ THÔNG BÁO ĐẾN BẠN TRƯỚC 48H</p>

                    <button onClick={() => backToHome()}>về trang chủ</button>
                    
                </div>
            </FormContainer>
        </>
        
    );
}

const FormContainer = styled.div`
    height: 100vh;
    width:100vw;
    .header 
    {
        height: 120px;
        background-color: #e65b92;

        .logo 
        {
            position: fixed;
            padding-left: 3rem;
            display: flex;
            flex-direction: column;
            
            img 
            {
                width: 80px;
                height: 80px;
                padding-left: 2rem;
            }

            .brand-name 
            {
                font-size: 22px;
                font-weight: bold;   
            }

        }

        .icons 
        {
            display: flex;
            position: fixed;
            right: 3rem;
            top: 2rem;
            gap: 1rem;

            img 
            {
                width: 50px;
                height: 50px;
            }
        }
    }

    .main 
    {
        width: 100%;
        background-color: #eea5a6;
        display: flex;
        flex-direction: column;
        font-size: 25px;
        font-weight: bold;
        position: fixed;
        justify-content: center;
        align-items: center;

        .block 
        {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 4rem;
            gap: 1rem;

            img 
            {
                width: 40px;
                height: 40px;
            }
        }

        p 
        {
            margin: 0;
            padding-top: 1rem;
        }

        button 
        {
            background-color: #e65b92;
            border: none;
            width: 300px;
            height: 40px;
            border-radius: 5px;
            font-size: 25px;
            font-weight: bold;
            margin-top: 2rem;
            transition: background-color 0.2s;
            
            &:hover 
            {
                cursor: pointer;
                background-color: rgba(239, 14, 104, 0.78);
            }
        }
    }
`;