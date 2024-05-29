import React from 'react';
import styled from 'styled-components';
import Logo from "E:/ecommerce/ecommerce-app/src/images/shopping-cart.png";
import User from "E:/ecommerce/ecommerce-app/src/images/user.png";
import Notification from "E:/ecommerce/ecommerce-app/src/images/bell.png";
import Search from "E:/ecommerce/ecommerce-app/src/images/magnifying-glass.png";
import { Link } from 'react-router-dom';
import Next from "E:/ecommerce/ecommerce-app/src/images/right-arrow.png"
import Help from "E:/ecommerce/ecommerce-app/src/images/question.png";
import Filter from "E:/ecommerce/ecommerce-app/src/images/column.png";
import Options from "E:/ecommerce/ecommerce-app/src/images/down-arrow.png";


export default function Steel() {
  return (
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

        <div className="link">
            <Link className="link-style" to="/">Trang chủ</Link>
            <img src={Next} alt="" />
            <h3>đồ Inox</h3>
        </div>

        <div className="main">
            <div className="filter">
                <h3>CHỌN MỨC GIÁ</h3>
                <div className="price-filter">
                    <input type="text" name="price" id="lower" placeholder='từ' />
                    <div className="separator"></div>
                    <input type="text" name="price" id="upper" placeholder='đến' />
                </div>

                <h3>THƯƠNG HIỆU</h3>
                <ul>
                    <li>
                        <input type="checkbox" name="option" id="" />
                        Bình Minh
                    </li>
                    <li>
                        <input type="checkbox" name="option" id="" />
                        Hoa Sen
                    </li>
                    <li>
                        <input type="checkbox" name="option" id="" />
                        Dekko
                    </li>
                    <li>
                        <input type="checkbox" name="option" id="" />
                        Tiền Phong
                    </li>
                    <li>
                        <input type="checkbox" name="option" id="" />
                        EUROPIPE
                    </li>
                </ul>

                <h3>KÍCH THƯỚC</h3>
                <ul>
                    <li>
                        <input type="checkbox" name="option" id="" />
                        21
                    </li>
                    <li>
                        <input type="checkbox" name="option" id="" />
                        27
                    </li>
                    <li>
                        <input type="checkbox" name="option" id="" />
                        34
                    </li>
                    <li>
                        <input type="checkbox" name="option" id="" />
                        42
                    </li>
                </ul>

            </div>

            <div className="display">
                <div className="arrange">
                    <h4>ỐNG NƯỚC</h4>
                    <div className="display-options">
                        <img src={Filter} alt="" />
                        <h5>Sắp xếp: Mặc định </h5>
                        <img className="optn" src={Options} alt="" />
                    </div>
                </div>

                <div className="display-items">
                    <div className="items">
                        <img src={Help} alt="" />
                        <h3>mô tả sản phẩm</h3>
                        <h5>50.000 <span>đ</span></h5>
                    </div>

                    <div className="items">
                        <img src={Help} alt="" />
                        <h3>mô tả sản phẩm</h3>
                        <h5>50.000 <span>đ</span></h5>
                    </div>

                    <div className="items">
                        <img src={Help} alt="" />
                        <h3>mô tả sản phẩm</h3>
                        <h5>50.000 <span>đ</span></h5>
                    </div>

                    <div className="items">
                        <img src={Help} alt="" />
                        <h3>mô tả sản phẩm</h3>
                        <h5>50.000 <span>đ</span></h5>
                    </div>

                    <div className="items">
                        <img src={Help} alt="" />
                        <h3>mô tả sản phẩm</h3>
                        <h5>50.000 <span>đ</span></h5>
                    </div>

                    <div className="items">
                        <img src={Help} alt="" />
                        <h3>mô tả sản phẩm</h3>
                        <h5>50.000 <span>đ</span></h5>
                    </div>

                    <div className="items">
                        <img src={Help} alt="" />
                        <h3>mô tả sản phẩm</h3>
                        <h5>50.000 <span>đ</span></h5>
                    </div>

                    <div className="items">
                        <img src={Help} alt="" />
                        <h3>mô tả sản phẩm</h3>
                        <h5>50.000 <span>đ</span></h5>
                    </div>

                    <div className="items">
                        <img src={Help} alt="" />
                        <h3>mô tả sản phẩm</h3>
                        <h5>50.000 <span>đ</span></h5>
                    </div>

                    <div className="items">
                        <img src={Help} alt="" />
                        <h3>mô tả sản phẩm</h3>
                        <h5>50.000 <span>đ</span></h5>
                    </div>

                    <div className="items">
                        <img src={Help} alt="" />
                        <h3>mô tả sản phẩm</h3>
                        <h5>50.000 <span>đ</span></h5>
                    </div>

                    <div className="items">
                        <img src={Help} alt="" />
                        <h3>mô tả sản phẩm</h3>
                        <h5>50.000 <span>đ</span></h5>
                    </div>

                    <div className="items">
                        <img src={Help} alt="" />
                        <h3>mô tả sản phẩm</h3>
                        <h5>50.000 <span>đ</span></h5>
                    </div>

                    <div className="items">
                        <img src={Help} alt="" />
                        <h3>mô tả sản phẩm</h3>
                        <h5>50.000 <span>đ</span></h5>
                    </div>
                </div>
            </div>
        </div>

    </FormContainer>
  )
};

const FormContainer = styled.div`
    width: 100vw;
    height: 100vh;

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

    .link 
    {
        background-color: #f189b2;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
        height: 5%;
        
        img 
        {
            width: 15px;
            height: 15px;
        }

        .link-style
        {
            color: black;
            text-decoration: none;
            font-size: 18px;

            &:hover 
            {
                font-weight: 600;
            }
        }

        h3 
        {
            font-weight: 480;
            font-size: 18px;;
        }
        
    }

    .main 
    {
        display: flex;
        width: 100%;

        .filter 
        {
            width: 30%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            overflow-y: auto;

            .price-filter 
            {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: .5rem;
                width: 60%;

                .separator 
                {
                    width: 10%;
                    height: 1px;
                    background-color: #f0dcdc;
                }

                input 
                {
                    width: 30%;
                    height: 100%;
                    text-align: center;
                    font-size: 16px;
                }
            }

        }

        .display 
        {
            width: 70%;
            display: flex;
            flex-direction: column;
            
            .arrange 
            {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .display-options 
                {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: .5rem;

                    img 
                    {
                        width: 20px;
                        height: 20px;
                    }

                    .optn 
                    {
                        &:hover 
                        {
                            cursor: pointer;
                        }
                    }
                }
            }

            .display-items
            {
                width: 100%;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                gap: 5rem;
                overflow-y: auto;

                .items 
                {
                    display: flex;
                    flex-direction: column;
                    width: fit-content;
                    justify-content: center;
                    align-items: center;
                    
                    h3, h5 
                    {
                        padding: 5px;
                        margin: 0;
                    }

                    h5
                    {
                        color: red;
                        span 
                        {
                            text-decoration: underline;
                        }
                    }

                    img 
                    {
                        width: 100px;
                        height: 80px;
                    }
                }

            }
        }
    }

`;
