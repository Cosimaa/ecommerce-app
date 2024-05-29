import React from 'react';
import styled from "styled-components";
import Logo from "E:/ecommerce/ecommerce-app/src/images/shopping-cart.png";
import Dash from "E:/ecommerce/ecommerce-app/src/images/dashboard.png";
import Product from "E:/ecommerce/ecommerce-app/src/images/delivery-box.png";
import Categories from "E:/ecommerce/ecommerce-app/src/images/categorization.png";
import Brand from "E:/ecommerce/ecommerce-app/src/images/brand.png";
import Order from "E:/ecommerce/ecommerce-app/src/images/shopping-list.png";
import Customer from "E:/ecommerce/ecommerce-app/src/images/customer.png";
import Refund from "E:/ecommerce/ecommerce-app/src/images/refund.png";
import Income from "E:/ecommerce/ecommerce-app/src/images/wallet.png";
import Logout from "E:/ecommerce/ecommerce-app/src/images/logout.png";
import User from "E:/ecommerce/ecommerce-app/src/images/user.png";
import Notification from "E:/ecommerce/ecommerce-app/src/images/bell.png";
import Search from "E:/ecommerce/ecommerce-app/src/images/magnifying-glass.png";
import Edit from "E:/ecommerce/ecommerce-app/src/images/pencil.png";
import Remove from "E:/ecommerce/ecommerce-app/src/images/trash.png";
import Add from "E:/ecommerce/ecommerce-app/src/images/add.png";

export default function AdminProductList() {
  return (
    <>
        <FormContainer>
            <div className="controller">
                <img src={Logo} alt="" className="logo"/>
                <div className="options">
                    <img src={Dash} alt="" />
                    <h5>Bảng điều khiển</h5>
                </div>

                <div className="options">
                    <img src={Product} alt="" />
                    <h5>Sản phẩm</h5>
                </div>

                <div className="options">
                    <img src={Categories} alt="" />
                    <h5>Danh mục</h5>
                </div>

                <div className="options">
                    <img src={Brand} alt="" />
                    <h5>Thương hiệu</h5>
                </div>

                <div className="options">
                    <img src={Order} alt="" />
                    <h5>Đơn mua</h5>
                </div>

                <div className="options">
                    <img src={Customer} alt="" />
                    <h5>Khách hàng</h5>
                </div>

                <div className="options">
                    <img src={Refund} alt="" />
                    <h5>Hoàn tiền</h5>
                </div>

                <div className="options">
                    <img src={Income} alt="" />
                    <h5>Thu nhập</h5>
                </div>

                <div className="options">
                    <img src={Logout} alt="" />
                    <h5>Đăng xuất</h5>
                </div>
            </div>

            <div className="container">
                <div className="header">
                    <img src={Notification} alt="" />
                    <img src={User} alt="" />
                </div>

                <div className="control">
                    <div className="search-bar">
                        <input type="text" placeholder='tìm kiếm'/>
                        <img src={Search} alt="" />
                    </div>

                    <div className="add-button">
                        <img src={Add} alt="" />
                        <h3>Thêm</h3>
                    </div>
                </div>

                <div className="product-list">
                    <table>
                        <tr>
                            <th>Tên</th>
                            <th>Danh mục</th>
                            <th>Thương hiệu</th>
                            <th>Giá</th>
                            <th>Số lượng</th>
                            <th></th>
                        </tr>

                        <tr>
                            <td>Ống nước 42mm</td>
                            <td>Ống nước</td>
                            <td>Bình Minh</td>
                            <td>125,000 <span>đ</span></td>
                            <td>2</td>
                            <td>
                                <div className="option">
                                    <img src={Edit} alt="" />
                                    <img src={Remove} alt="" />
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>Ống nước 42mm</td>
                            <td>Ống nước</td>
                            <td>Bình Minh</td>
                            <td>125,000 <span>đ</span></td>
                            <td>2</td>
                            <td>
                                <div className="option">
                                    <img src={Edit} alt="" />
                                    <img src={Remove} alt="" />
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>Ống nước 42mm</td>
                            <td>Ống nước</td>
                            <td>Bình Minh</td>
                            <td>125,000 <span>đ</span></td>
                            <td>2</td>
                            <td>
                                <div className="option">
                                    <img src={Edit} alt="" />
                                    <img src={Remove} alt="" />
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>Ống nước 42mm</td>
                            <td>Ống nước</td>
                            <td>Bình Minh</td>
                            <td>125,000 <span>đ</span></td>
                            <td>2</td>
                            <td>
                                <div className="option">
                                    <img src={Edit} alt="" />
                                    <img src={Remove} alt="" />
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>Ống nước 42mm</td>
                            <td>Ống nước</td>
                            <td>Bình Minh</td>
                            <td>125,000 <span>đ</span></td>
                            <td>2</td>
                            <td>
                                <div className="option">
                                    <img src={Edit} alt="" />
                                    <img src={Remove} alt="" />
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </FormContainer>
    </>
  )
}

const FormContainer = styled.div`
    display: flex;
    justify-content: space-between;

    .controller 
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 20vw;

        .logo 
        {
            width: 2.5rem;
            height: 2.5rem;
            margin: 1rem 0 2rem 0;
        }

        .options 
        {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            h5 
            {
                margin: 0.25rem 0 1rem 0;
            }

            img 
            {
                width: 2rem;
                height: 2rem;
            }
        }
    }

    .container 
    {
        width: 80vw;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 2rem;

        .header 
        {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            width: 100%;
            height: 3rem;
            background-color: #dcc5d3;
            
            img 
            {
                width: 2rem;
                height: 2rem;
                padding-right: 0.5rem;
            }
        }

        .control
        {
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            
            .search-bar 
            {
                width: 80%;
                display: flex;
                justify-content: center;
                align-items: center;
                
                input 
                {
                    width: 80%;
                    padding-left: 1rem;
                    border: none;
                    outline: none;
                    height: 3rem;
                    margin-left: 2rem;
                    border-radius: 0.5rem;
                }

                img 
                {
                    width: 2rem;
                    height: 2rem;
                    margin-left: -3rem;

                    &:hover 
                    {
                        cursor: pointer;
                    }
                }
            }

            .add-button 
            {
                width: 20%;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 1rem;
                border: solid;
                border-color: #e445a7;
                background-color: #e445a7;
                height: 3rem;
                margin-right: 1rem;
                border-radius: 0.5rem;
                transition: background-color 0.2s;
                
                img 
                {
                    width: 2rem;
                    height: 2rem;
                }

                &:hover 
                {
                    cursor: pointer;
                    background-color: #c61b85;
                }

            }
        }

        .product-list 
        {
            width: 100%;

            table 
            {
                border-collapse: collapse;
                
                tr 
                {
                    box-shadow: 0 2px 0 0 #745a6a;
                    
                    &:hover 
                    {
                        background-color: #d67474;
                    }
                }

                th 
                {
                    height: 3rem;
                    width: 19%;
                }

                td
                {
                    height: 5rem;
                    text-align: center;
                    
                    .option 
                    {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 1rem;
                        margin-right: 1rem;

                        img 
                        {
                            width: 1.5rem;
                            height: 1.5rem;

                            &:hover 
                            {
                                cursor: pointer;
                            }
                        }
                    }
                }
            }
        }
    }
`;