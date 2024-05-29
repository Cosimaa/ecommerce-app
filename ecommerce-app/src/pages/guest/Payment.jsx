import React from "react";
import styled from "styled-components";
import Search from "E:/ecommerce/ecommerce-app/src/images/magnifying-glass.png";
import Logo from "E:/ecommerce/ecommerce-app/src/images/shopping-cart.png";
import User from "E:/ecommerce/ecommerce-app/src/images/user.png";
import Notification from "E:/ecommerce/ecommerce-app/src/images/bell.png";
import Help from "E:/ecommerce/ecommerce-app/src/images/question.png";
import Inox from "E:/ecommerce/ecommerce-app/src/images/do_inox.jpg";
import Add from "E:/ecommerce/ecommerce-app/src/images/add.png";
import Sub from "E:/ecommerce/ecommerce-app/src/images/underline.png";

export default function Payment() {
    return(
        <>
            <FormContainer>
                <div className="header">
                    <div className="logo">
                        <img src={Logo} alt=""/>
                        <h4>TRƯỜNG THỌ</h4>
                    </div>
        
                    <div className="search">
                        <input type="text" name="search-bar" placeholder="    tìm sản phẩm hoặc thương hiệu"/>
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
                    <div className="title">
                        <h3>GIỎ HÀNG</h3>
                    </div>
                    <div className="orders">
                        <div className="product">
                            <img src={Inox} alt="" />
                            <p>
                                <h5>ống nước Bình Minh</h5>
                                <h6>cỡ 42, dài: 30cm</h6>
                            </p>
                            <div className="number-option">
                                <div className="block">
                                    <img src={Add} alt="" />
                                </div>
                                <h5>1</h5>
                                <div className="block">
                                    <img src={Sub} alt="" />
                                </div>
                            </div>
                            <h4>65.000<span>đ</span></h4>
                        </div>

                        <div className="product">
                            <img src={Inox} alt="" />
                            <p>
                                <h5>ống nước Bình Minh</h5>
                                <h6>cỡ 42, dài: 30cm</h6>
                            </p>
                            <div className="number-option">
                                <div className="block">
                                    <img src={Add} alt="" />
                                </div>
                                <h5>1</h5>
                                <div className="block">
                                    <img src={Sub} alt="" />
                                </div>
                            </div>
                            <h4>65.000<span>đ</span></h4>
                        </div>

                        <div className="product">
                            <img src={Inox} alt="" />
                            <p>
                                <h5>ống nước Bình Minh</h5>
                                <h6>cỡ 42, dài: 30cm</h6>
                            </p>
                            <div className="number-option">
                                <div className="block">
                                    <img src={Add} alt="" />
                                </div>
                                <h5>1</h5>
                                <div className="block">
                                    <img src={Sub} alt="" />
                                </div>
                            </div>
                            <h4>65.000<span>đ</span></h4>
                        </div>

                        <div className="product">
                            <img src={Inox} alt="" />
                            <p>
                                <h5>ống nước Bình Minh</h5>
                                <h6>cỡ 42, dài: 30cm</h6>
                            </p>
                            <div className="number-option">
                                <div className="block">
                                    <img src={Add} alt="" />
                                </div>
                                <h5>1</h5>
                                <div className="block">
                                    <img src={Sub} alt="" />
                                </div>
                            </div>
                            <h4>65.000<span>đ</span></h4>
                        </div>
                        
                    </div>

                    <div className="total">
                        ________________________________________________________________________________________________________________________________________
                    </div>

                    <div className="payment">
                        <div className="bill">
                            <h3>TỔNG TIỀN</h3>
                            <h3>205.000 <span>đ</span></h3>
                        </div>
                        <button>ĐẶT HÀNG</button>
                    </div>
                </div>
            </FormContainer>
        </>
    );
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
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
                width: 35rem;
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 15vh;
        height: 80vh;

        .title 
        {
            background-color: #e8528e;
            width: 100%;
            height: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;

            h3 
            {
                position: absolute;
                left: 1rem;
                color: white;
            }
            
        }

        .orders 
        {
            margin-top: 0.25rem;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            border-left-style: solid;
            border-bottom-style: solid;
            border-width: 1px;
            border-color: #e3dddd;
            color: white;
            width: 60vw;
            height: 70%;
            overflow: auto;

            .product 
            {
                margin-bottom: 0.5rem;
                border-style: solid;
                border-width: 1px;
                border-color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 6rem;
                width: 90%;
                height: 40%;

                img 
                {
                    width: 5rem;
                    height: 5rem;
                }

                .number-option
                {

                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 1rem;

                    .block 
                    {
                        border: solid;
                        border-color: #f9ecec;
                        border-width: 1px;
                        width: 1rem;
                        height: 1rem;

                        img 
                        {
                            width: 100%;
                            height: 100%;

                            &:hover
                            {
                                cursor: pointer;    
                            }
                        }
                    }
                }

                h4 
                {
                    color: red;

                    span 
                    {
                        font-size: 0.8rem;
                        text-decoration: underline;
                    }
                }

            }

        }

        .total 
        {
            color: white;
        }

        .payment 
        {
            display: flex;
            flex-direction: column;
            color: white;
            width: 100%;

            .bill 
            {
                display: flex;
                width: 100%;
                justify-content: space-between;
            }

            button 
            {
                height: 3rem;
                border: none;
                background-color: #e8528e;
                border-radius: 2px;
                color: white;
                font-weight: 300;
                font-size: 1.2rem;

                &:hover 
                {
                    background-color: #da4581;
                }
            }
            
        }
    }

    ::-webkit-scrollbar 
    {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb 
    {
        background: white;
        border-radius: 20px;

        &:hover 
        {
            background-color: #f9ecec;
        }
    }

    ::-webkit-scrollbar-track 
    {
        background-color: #c4819d;
        border-radius: 20px;
    }
`;