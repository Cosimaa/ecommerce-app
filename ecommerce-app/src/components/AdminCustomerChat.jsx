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

export default function AdminCustomerChat() {
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
                    <div className="search">
                        <h1>Chat</h1>
                        <div className="search-bar">
                            <input type="text" placeholder='tìm kiếm' />
                            <div className="icon">
                                <img src={Search} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="chat-list">
                        <div className="user">
                            <img src={User} alt="" />
                            <h5>userName</h5>
                        </div>

                        <div className="user">
                            <img src={User} alt="" />
                            <h5>userName</h5>
                        </div>

                        <div className="user">
                            <img src={User} alt="" />
                            <h5>userName</h5>
                        </div>

                        <div className="user">
                            <img src={User} alt="" />
                            <h5>userName</h5>
                        </div>

                        <div className="user">
                            <img src={User} alt="" />
                            <h5>userName</h5>
                        </div>

                        <div className="user">
                            <img src={User} alt="" />
                            <h5>userName</h5>
                        </div>

                        <div className="user">
                            <img src={User} alt="" />
                            <h5>userName</h5>
                        </div>

                        <div className="user">
                            <img src={User} alt="" />
                            <h5>userName</h5>
                        </div>

                        <div className="user">
                            <img src={User} alt="" />
                            <h5>userName</h5>
                        </div>

                        <div className="user">
                            <img src={User} alt="" />
                            <h5>userName</h5>
                        </div>

                        <div className="user">
                            <img src={User} alt="" />
                            <h5>userName</h5>
                        </div>

                        <div className="user">
                            <img src={User} alt="" />
                            <h5>userName</h5>
                        </div>

                        <div className="user">
                            <img src={User} alt="" />
                            <h5>userName</h5>
                        </div>

                        <div className="user">
                            <img src={User} alt="" />
                            <h5>userName</h5>
                        </div>
                    </div>

                    <div className="recent-chat">
                        <div className="chat">
                            <div className="content">
                                <img src={User} alt="" />
                                <div className="message">
                                    <h3>userName</h3>
                                    <h6>Content...</h6>
                                </div>
                            </div>
                            <h5>10:35</h5>
                        </div>

                        <div className="chat">
                            <div className="content">
                                <img src={User} alt="" />
                                <div className="message">
                                    <h3>userName</h3>
                                    <h6>Content...</h6>
                                </div>
                            </div>
                            <h5>10:35</h5>
                        </div>

                        <div className="chat">
                            <div className="content">
                                <img src={User} alt="" />
                                <div className="message">
                                    <h3>userName</h3>
                                    <h6>Content...</h6>
                                </div>
                            </div>
                            <h5>10:35</h5>
                        </div>

                        <div className="chat">
                            <div className="content">
                                <img src={User} alt="" />
                                <div className="message">
                                    <h3>userName</h3>
                                    <h6>Content...</h6>
                                </div>
                            </div>
                            <h5>10:35</h5>
                        </div>

                        <div className="chat">
                            <div className="content">
                                <img src={User} alt="" />
                                <div className="message">
                                    <h3>userName</h3>
                                    <h6>Content...</h6>
                                </div>
                            </div>
                            <h5>10:35</h5>
                        </div>

                        <div className="chat">
                            <div className="content">
                                <img src={User} alt="" />
                                <div className="message">
                                    <h3>userName</h3>
                                    <h6>Content...</h6>
                                </div>
                            </div>
                            <h5>10:35</h5>
                        </div>
                    </div>
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
        justify-content: flex-start;
        align-items: center;
        overflow: hidden;

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

            .search 
            {
                display: flex;
                background-color: #dd326b;
                width: 100%;
                height: 4rem;

                h1 
                {
                    margin: 0;
                    padding: 0.5rem 0 0 2rem;
                }

                .search-bar 
                {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 80%;
                    
                    input 
                    {
                        display: inline-block;
                        border: none;
                        outline: none;
                        width: 60%;
                        height: 2rem;
                        padding: 0 0 0 1rem;
                        border-bottom-left-radius: 0.2rem;
                        border-top-left-radius: 0.2rem;
                    }

                    .icon 
                    {
                        background-color: #ad3e66;
                        border-top-right-radius: 0.2rem;
                        border-bottom-right-radius: 0.2rem;
                        width: 5rem;
                        height: 2rem;

                        img 
                        {
                            width: 50%;
                            height: 100%;
                            margin-left: 1.2rem;

                            &:hover 
                            {
                                cursor: pointer;
                            }
                        }
                    }
                }
            }

            .chat-list 
            {
                width: 100%;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                gap: 3rem;
                padding: 1rem 0 0 1.5rem;
                overflow: hidden;

                .user
                {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    img 
                    {
                        width: 3rem;
                        height: 3rem;
                    }

                    h5 
                    {
                        margin: 0;
                        padding: 0.5rem 0 0 0;
                    }
                }

            }

            .recent-chat 
            {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 1rem;
                width: 100%;
                margin-top: 2rem;
                
                .chat 
                {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .content
                    {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 1rem;
                        margin-left: 5rem;

                        img 
                        {
                            width: 3rem;
                            height: 3rem;
                        }

                        .message 
                        {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;

                            h3, h6 
                            {
                                margin: 0;
                                padding: 0;
                            }

                            h6 
                            {
                                margin-top: 1rem;
                            }
                        }
                    }

                    h5 
                    {
                        margin-right: 10rem;
                    }
                }
            }
        }
    }
`;