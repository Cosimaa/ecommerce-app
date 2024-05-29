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
import Send from "E:/ecommerce/ecommerce-app/src/images/send.png";
import Attach from "E:/ecommerce/ecommerce-app/src/images/attachment.png";

export default function AdminChatBox() {
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

                <div className="main">
                    <div className="customer">
                        <img src={User} alt="" />
                        <div className="content">
                            <h3>username</h3>
                            <h5>Hoạt động 3 giờ trước</h5>
                        </div>
                    </div>

                    <div className="chat-box">
                    </div>
                </div>

                <div className="footer">
                    <input type="text" placeholder='soạn tin'/>
                    <img src={Send} alt="" />
                    <img src={Attach} alt="" />
                </div>
            </div>
        </FormContainer>
    </>
  );
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
        justify-content: space-between;
        align-items: center;

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

        .main 
        {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;

            .customer 
            {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                gap: 2rem;
                width: 100%;

                img 
                {
                    width: 3rem;
                    height: 3rem;
                }

                h3, h5 
                {
                    margin: 0;
                    padding: 0;
                }

                h5 
                {
                    margin-top: 1rem;
                }
            }

            .chat-box 
            {
                width: 100%;
                height: 70vh;
            }

        }

        .footer 
        {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 4rem;
            gap: 2rem;
            border-top: solid;
            border-color: #e2dbe0;
            padding-top: 1rem;

            img 
            {
                width: 2rem;
                height: 2rem;

                &:hover 
                {
                    cursor: pointer;
                }
            }

            input 
            {
                width: 80%;
                height: 3rem;
                border-radius: 12px;
                border: none;
                outline: none;
                padding-left: 1rem;
            }
        }
    }
`;
