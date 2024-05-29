import React, { useState } from 'react';
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

export default function AdminCategoryCreate() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        if(e.target.files && e.target.files[0])
        {
            setSelectedImage(URL.createObjectURL(e.target.files[0]));
        }
    };

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

                <div className="add-category">
                    <form action="" id="create">
                        <input type="text" name="name" placeholder='tên danh mục'/>
                        <div className="choose-image">
                            { selectedImage && <img src={selectedImage} alt=''/>}    
                            <input type="file" name="upload-image" onChange={handleImageChange} accept='image/*'/>                       
                        </div>
                        <input type="submit" value="Thêm danh mục mới"/>
                    </form>
                </div>
            </div>
        </FormContainer>
    </>
  );
}

const FormContainer = styled.div`
    display: flex;
    justify-content: space-between;
    overflow: auto;

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
        gap: 8rem;

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

        .add-category
        {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            #create 
            {
                width: 80%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 2rem;

                input[type=text]
                {
                    background-color: #ead4e1;
                    color: #857b7b;
                    width: 78%;
                    height: 3rem;
                    border: none;
                    outline: none;
                    border-radius: 0.5rem;
                    padding-left: 1rem;
                }

                .choose-image 
                {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 50%;

                    input[type=file]
                    {
                        width: 100%;
                        overflow: hidden;

                        &::-webkit-file-upload-button
                        {
                            color: white;
                            font-weight: bold;
                            background-color: #f5527d;
                            border: none;
                            outline: none;
                            border-radius: 0.5rem;
                            width: 100%;
                            height: 2rem;
                            transition: background-color 0.2s;

                            &:hover 
                            {
                                cursor: pointer;
                                background-color: #e72a5c;
                            }
                        }
                    }

                    img 
                    {
                        width: 120px;
                        height: 150px;
                        margin-bottom: 1rem;
                    }
                }

                input[type=submit]
                {
                    width: 30%;
                    height: 3rem;
                    border: none;
                    outline: none;
                    background-color: #e72a5c;
                    border-radius: 0.5rem;
                    color: white;
                    font-weight: bold;
                    transition: background-color 0.2s;

                    &:hover 
                    {
                        cursor: pointer;
                        background-color: #ee416f;
                    }
                }
            }
        }
    }

`;
