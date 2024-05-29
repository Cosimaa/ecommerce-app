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
import Edit from "E:/ecommerce/ecommerce-app/src/images/pencil.png";
import Remove from "E:/ecommerce/ecommerce-app/src/images/trash.png";


export default function AdminOrderDetails() {
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

                <h2>Chi tiết đơn hàng</h2>

                <div className="general-info">
                    <h3>ID: </h3>
                    <h3>ngày đặt: </h3>
                </div>

                <div className="status">
                    <label htmlFor="status">tình trạng đơn hàng</label>
                    <select name="status" id="">
                        <option value="received">Đã nhận</option>
                        <option value="pending">Đang xử lý</option>
                        <option value="cancel">Đã hủy</option>
                    </select>
                </div>
        
                <div className="details">
                    <div className="product">
                        <div className="product-info">
                            <img src={Refund} alt="" />
                            <div className="text">
                                <h4>Product Name</h4>
                                <h5>300,000 x</h5>
                            </div>
                        </div>

                        <div className="product-amount">
                            <button>-</button>
                            <h4>5</h4>
                            <button>+</button>
                        </div>

                        <h4>Phân loại sản phẩm: </h4>

                        <div className="action">
                            <img src={Edit} alt="" />
                            <img src={Remove} alt="" />
                        </div>
                    </div>

                    <div className="product">
                        <div className="product-info">
                            <img src={Refund} alt="" />
                            <div className="text">
                                <h4>Product Name</h4>
                                <h5>300,000 x</h5>
                            </div>
                        </div>

                        <div className="product-amount">
                            <button>-</button>
                            <h4>5</h4>
                            <button>+</button>
                        </div>

                        <h4>Phân loại sản phẩm: </h4>

                        <div className="action">
                            <img src={Edit} alt="" />
                            <img src={Remove} alt="" />
                        </div>
                    </div>

                    <div className="product">
                        <div className="product-info">
                            <img src={Refund} alt="" />
                            <div className="text">
                                <h4>Product Name</h4>
                                <h5>300,000 x</h5>
                            </div>
                        </div>

                        <div className="product-amount">
                            <button>-</button>
                            <h4>5</h4>
                            <button>+</button>
                        </div>

                        <h4>Phân loại sản phẩm: </h4>

                        <div className="action">
                            <img src={Edit} alt="" />
                            <img src={Remove} alt="" />
                        </div>
                    </div>
                </div>

                <div className="notation">
                    <div className="customer-info">
                        <label id="address" htmlFor="address"></label>
                        <textarea name="address" id="" cols={45} rows={6}>địa chỉ giao hàng</textarea>

                        <label id="message" htmlFor="message"></label>
                        <textarea name="message" id="" cols={45} rows={6}>ghi chú của khách hàng</textarea>
                    </div>

                    <div className="bill">
                        <h3>Hóa đơn</h3>
                        <div className="bill-detail">
                            <ul>
                                <li>tạm tính: </li>
                                <li>phí ship: </li>
                                <li>giảm giá: </li>
                            </ul>

                            <ul>
                                <li>5,000,000đ</li>
                                <li>5,000,000đ</li>
                                <li>5,000,000đ</li>
                            </ul>
                        </div>

                        <div className="total">
                            <h3>Tổng cộng: </h3>
                            <h3>5,000,000đ</h3>
                        </div>
                    </div>
                </div>

                <button id="submit-button" type="submit">Lưu</button>
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
        align-items: flex-start;
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

        h2 
        {
            margin: 0;
        }

        .general-info
        {
            width: 60%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            h3 
            {
                margin: 0;
            }
        }

        .status
        {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 40%;

            label 
            {
                font-size: 13px;
                color: #8a8086;
                margin-bottom: 0.5rem;
            }

            select 
            {
                width: 100%;
                text-align: center;
                font-weight: bold;
                font-size: medium;
                height: 3rem;
                border: none;
                outline: none;
                border-radius: 8px;
                background-color: rgb(240, 220, 232);
                appearance: none;
            }
        }

        .details 
        {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            gap: 1rem;

            .product 
            {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .product-info 
                {
                    width: 20%;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.8rem;

                    h4, h5 
                    {
                        padding: 0;
                        margin: 0;
                    }

                    img 
                    {
                        width: 50px;
                        height: 50px;
                    }
                }

                .product-amount 
                {
                    width: 30%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 1rem;

                    button 
                    {
                        width: 2rem;
                        border: none;
                        outline: none;
                        text-align: center;
                        font-weight: bold;
                        border-radius: 5px;

                        &:hover 
                        {
                            background-color: #f7e8f0;
                            cursor: pointer;
                        }
                    }
                }

                .action 
                {
                    width: 25%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 1rem;

                    img 
                    {
                        width: 1.5rem;
                        height: 1.5rem;
                    }
                }
            }
        }

        .notation 
        {
            width: 90%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .customer-info 
            {
                width: 45%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 0.5rem;

                label 
                {
                    font-size: 13px;
                    color: #8a8086;
                    margin-bottom: 0.5rem;
                }

                textarea 
                {
                    border: none;
                    outline: none;
                    resize: none;
                    border-radius: 5px;
                    padding: 1rem 0 0 1rem;
                    color: #8a8086;
                }
            }

            .bill 
            {
                width: 50%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;

                h3 
                {
                    margin: 0;
                }
                
                .bill-detail 
                {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: large;
                    
                    ul 
                    {
                        list-style: none;

                        li 
                        {
                            margin-top: 0.5rem;
                        }
                    }
                }

                .total 
                {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    ul 
                    {
                        list-style: none;
                    }

                    h3 
                    {
                        padding-left: 1rem;
                    }
                }

            }
        }

        #submit-button
        {
            width: 10rem;
            height: 3rem;
            background-color: #f53e87;
            border: none;
            outline: none;
            border-radius: 5px;
            color: white;
            font-size: large;
            font-weight: bold;
            margin-bottom: 2rem;

            &:hover 
            {
                background-color: #f32469;
            }
        }
    }
`;