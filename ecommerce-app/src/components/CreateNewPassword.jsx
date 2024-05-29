import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import Logo from "E:/ecommerce/ecommerce-app/src/images/shopping-cart.png";
import User from "E:/ecommerce/ecommerce-app/src/images/user.png";
import Notification from "E:/ecommerce/ecommerce-app/src/images/bell.png";
import Search from "E:/ecommerce/ecommerce-app/src/images/magnifying-glass.png";
import Help from "E:/ecommerce/ecommerce-app/src/images/question.png";


export default function CreateNewPassword() {
    const navigate = useNavigate();

    return (
        <>
            <FormContainer>
                <div className="header">
                    <div className="logo">
                        <img src={Logo} alt=""/>
                        <h4>TRƯỜNG THỌ</h4>
                    </div>
        
                    <div className="search">
                        <input type="text" name="search-bar" placeholder="tìm sản phẩm hoặc thương hiệu"/>
                        <div className="search-icon">
                            <img src={Search} alt="" />
                        </div>
                    </div>
        
                    <div className="icons">
                        <img src={Help} alt="" />
                        <img src={Notification} alt="" />
                        <img src={User} alt="" />
                    </div>
                </div>

                <div className="container">
                    <h2>TẠO MẬT KHẨU MỚI</h2>
                    <input type="text" name="newpassword" placeholder="nhập mã xác thực"/>
                    <input type="text" name="re-enter" placeholder="nhập lại mã xác thực"/>
                    <button onClick={() => navigate("/successGetNewPassword")}>XÁC NHẬN</button>
                </div>
            </FormContainer>
        </>
    )
}

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .header 
    {
        width: 100vw;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8rem;
        background-color: #e8528e;
        background-blend-mode: color-burn;

        img 
        {
            width: 30px;
            height: 30px;
        }

        .logo 
        {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            img:hover
            {
                cursor: pointer;
            }
            
            h4 
            {
                margin: 0;
            }
        }

        .search 
        {
            display: flex;

            input 
            {
                border: none;
                outline: none;
                display: inline-block;
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
                width: 34rem;
                padding-left: 1rem;
                height: 2rem;
            }

            .search-icon 
            {
                background-color: #c70452;
                width: 5rem;
                height: 2.2rem;
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }

        .icons 
        {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
        }
    }

    .container 
    {
        color: white;
        position: fixed;
        top: 30vh;
        width: 50%;
        height: 40%;
        box-shadow: 3px 5px 5px 5px rgba(0, 0, 0, 0.2);
        border-radius: 2px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h2 
        {
            font-weight: 400;
        }

        input 
        {
            width: 70%;
            border: none;
            outline: none;
            display: inline-block;
            height: 2rem;
            border-radius: 2px;
            margin-bottom: 1rem;
            padding-left: 1rem;
        }

        button 
        {
            width: 70%;
            border-radius: 2px;
            border: none;
            background-color: #e8528e;
            color: white;
            height: 2rem;
            transition: box-shadow 0s;

            &:hover 
            {
                cursor: pointer;
                box-shadow: 2px 3px 1px 1px rgba(0, 0, 0, 0.2);
            }
        }
    }
`;
