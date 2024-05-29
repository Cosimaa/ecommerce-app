import React from "react";
import styled from "styled-components";
//import { useNavigate } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Search from "E:/ecommerce/ecommerce-app/src/images/magnifying-glass.png";
import Logo from "E:/ecommerce/ecommerce-app/src/images/shopping-cart.png";
import User from "E:/ecommerce/ecommerce-app/src/images/user.png";
import Notification from "E:/ecommerce/ecommerce-app/src/images/bell.png";
import Help from "E:/ecommerce/ecommerce-app/src/images/question.png";
import Inox from "E:/ecommerce/ecommerce-app/src/images/do_inox.jpg";
import Electric from "E:/ecommerce/ecommerce-app/src/images/electric_wire.jpg";
import Tubes from "E:/ecommerce/ecommerce-app/src/images/ong_nuoc.jpg";
import Machine from "E:/ecommerce/ecommerce-app/src/images/phu_tung_gan_may.png";


export default function Home() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
    };

    return(
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
    
            <div className="main">
                <h3>DANH MỤC</h3>

                <div className="category">
                    <Carousel 
                        responsive={responsive} 
                        className="carousel-container" 
                        >
                        <div>
                            <img src={Inox} alt="" />
                            <p>ĐỒ INOX</p>
                        </div>

                        <div>
                            <img src={Electric} alt="" />
                            <p>ĐỒ ĐIỆN</p>
                        </div>

                        <div>
                            <img src={Tubes} alt="" />
                            <p>ỐNG NƯỚC</p>
                        </div>

                        <div>
                            <img src={Machine} alt="" />
                            <p>PHỤ TÙNG GẮN MÁY</p>
                        </div>

                    </Carousel>
                </div>

                <div className="new-products">
                    <div className="title">SẢN PHẨM MỚI</div>
                    <Carousel 
                        className="category-list" 
                        responsive={responsive}
                        >
                        <div>Tất cả</div>
                        <div>Đồ điện</div>
                        <div>Đồ Inox</div>
                        <div>Ống nước</div>
                        <div>Phụ tùng gắn máy</div>
                    </Carousel>

                    <Carousel className="product-list" responsive={responsive}>
                        <div className="product-info">
                            <img src={Inox} alt="" />
                            <div className="description">mô tả sản phẩm</div>
                            <div className="price">50.000<span>đ</span></div>
                        </div>

                        <div className="product-info">
                            <img src={Inox} alt="" />
                            <div className="description">mô tả sản phẩm</div>
                            <div className="price">50.000<span>đ</span></div>
                        </div>

                        <div className="product-info">
                            <img src={Inox} alt="" />
                            <div className="description">mô tả sản phẩm</div>
                            <div className="price">50.000<span>đ</span></div>
                        </div>

                        <div className="product-info">
                            <img src={Inox} alt="" />
                            <div className="description">mô tả sản phẩm</div>
                            <div className="price">50.000<span>đ</span></div>
                        </div>

                        <div className="product-info">
                            <img src={Inox} alt="" />
                            <div className="description">mô tả sản phẩm</div>
                            <div className="price">50.000<span>đ</span></div>
                        </div>

                        <div className="product-info">
                            <img src={Inox} alt="" />
                            <div className="description">mô tả sản phẩm</div>
                            <div className="price">50.000<span>đ</span></div>
                        </div>

                        <div className="product-info">
                            <img src={Inox} alt="" />
                            <div className="description">mô tả sản phẩm</div>
                            <div className="price">50.000<span>đ</span></div>
                        </div>

                        <div className="product-info">
                            <img src={Inox} alt="" />
                            <div className="description">mô tả sản phẩm</div>
                            <div className="price">50.000<span>đ</span></div>
                        </div>
                    </Carousel>
                </div>

                <div className="sale-off">
                    <div className="title">GIẢM GIÁ SỐC</div>
                    <Carousel 
                        responsive={responsive}
                        className="category-list">
                        <div>Tất cả</div>
                        <div>Đồ điện</div>
                        <div>Đồ Inox</div>
                        <div>Ống nước</div>
                        <div>Phụ tùng gắn máy</div>
                    </Carousel>

                    <Carousel className="product-list" responsive={responsive}>
                        <div className="product-info">
                            <img src={Inox} alt="" />
                            <div className="description">mô tả sản phẩm</div>
                            <div className="sale-price">
                                <h5>50.000<span>đ</span></h5>
                                <h6>75.000<span>đ</span></h6>
                            </div>
                        </div>

                        <div className="product-info">
                            <img src={Inox} alt="" />
                            <div className="description">mô tả sản phẩm</div>
                            <div className="sale-price">
                                <h5>50.000<span>đ</span></h5>
                                <h6>75.000<span>đ</span></h6>
                            </div>
                        </div>

                        <div className="product-info">
                            <img src={Inox} alt="" />
                            <div className="description">mô tả sản phẩm</div>
                            <div className="sale-price">
                                <h5>50.000<span>đ</span></h5>
                                <h6>75.000<span>đ</span></h6>
                            </div>
                        </div>

                        <div className="product-info">
                            <img src={Inox} alt="" />
                            <div className="description">mô tả sản phẩm</div>
                            <div className="sale-price">
                                <h5>50.000<span>đ</span></h5>
                                <h6>75.000<span>đ</span></h6>
                            </div>
                        </div>

                        <div className="product-info">
                            <img src={Inox} alt="" />
                            <div className="description">mô tả sản phẩm</div>
                            <div className="sale-price">
                                <h5>50.000<span>đ</span></h5>
                                <h6>75.000<span>đ</span></h6>
                            </div>
                        </div>

                        <div className="product-info">
                            <img src={Inox} alt="" />
                            <div className="description">mô tả sản phẩm</div>
                            <div className="sale-price">
                                <h5>50.000<span>đ</span></h5>
                                <h6>75.000<span>đ</span></h6>
                            </div>
                        </div>
                    </Carousel>

                </div>

            </div>

            <div className="footer">
                <h3>CỬA HÀNG TRƯỜNG THỌ</h3>     
                <h3>ĐỊA CHỈ: 62B TRẦN HƯNG ĐẠO, PHƯỜNG LỘC SƠN, THÀNH PHỐ BẢO LỘC, TỈNH LÂM ĐỒNG</h3>
                <h3>HOTLINE: 0975904499 | 0919661128</h3>
                <h3>EMAIL: lehangbl1983@gmail.com</h3>
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
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
                width: 35rem;
                height: 2rem;
                display: inline-block;
                padding-left: 15px;
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

    .main 
    {
        width: 70vw;
        overflow: auto;
        .category 
        {
            .carousel-container 
            {
                color: white;
                background-color: #e65b92;
                display: flex;
                height: 8rem;
                justify-content: center;
                align-items: center;

                .react-multi-carousel-track
                {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    gap: 1rem;

                    .react-multi-carousel-item 
                    {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;

                        div 
                        {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            width: fit-content;

                            &:hover 
                            {
                                cursor: pointer;
                            }

                            img 
                            {
                                width: 100px;
                                height: 80px;
                                border-radius: 5px;
                            }

                            p 
                            {
                                margin-bottom: 2px;
                                margin-top: 6px;
                            }
                        }
                    }
                }
            }

        }

        .new-products
        {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .title 
            {
                color: white;
                font-weight: bold;
                margin-top: 3rem;
                background-color: #e01365;
                width: 70vw;
                height: 5vh;
                display: flex;
                justify-content: center;
                align-items: center;

            }

            .react-multi-carousel-list
            {
                width: 70vw;
                height: 3rem;
                display: flex;
                justify-content: center;
                align-items: center;
                color: white;
                background-color: #e65b92;

                .react-multi-carousel-track 
                {
                    width: 100%;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    
                    .react-multi-carousel-item 
                    {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        
                        div:hover
                        {
                            cursor: pointer;
                        }
                    }
                }
            }
          
            .product-list 
            {
                width: 70vw;
                height: 40vh;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #9a2051;

                .react-multi-carousel-track 
                {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    gap: 0.3rem;
                    height: 95%;

                    .react-multi-carousel-item 
                    {
                        height: 100%;
                        .product-info
                        {
                            width: 204px;
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            justify-content: flex-start;
                            align-items: center;
                            background-color: #eea1c0;
                            

                            .description 
                            {
                                font-size: 0.9rem;
                                font-weight: bold;        
                                text-overflow: ellipsis;
                                margin-top: 0.5rem;
                            }

                            img 
                            {
                                width: 90%;
                                height: 60%;
                                margin-top: 0.5rem;
                            }

                            .price 
                            {
                                color: red;
                                font-weight: bold;

                                span 
                                {
                                    font-size: 0.8rem;
                                    text-decoration: underline;
                                }
                            }

                            &:hover 
                            {
                                cursor: pointer;
                            }
                        }
                    }
                }
            }

        }

        .sale-off 
        {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 70vw;

            .title 
            {
                color: white;
                font-weight: bold;
                margin-top: 3rem;
                background-color: #e01365;
                width: 100%;
                height: 5vh;
                display: flex;
                justify-content: center;
                align-items: center;

            }

            .category-list 
            {
                width: 100%;
                height: 3rem;
                display: flex;
                justify-content: center;
                align-items: center;
                color: white;
                background-color: #e65b92;
                            
                .react-multi-carousel-track
                {
                    display: flex;
                    width: 100%;
                    justify-content: flex-start;
                    align-items: center;
                    gap: 0.5rem;

                    .react-multi-carousel-item 
                    {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;

                        div 
                        {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            width: fit-content;

                            &:hover 
                            {
                                cursor: pointer;
                            }
                        }
                    }
                }
            }

            .product-list 
            {
                width: 100%;
                height: 95%;
                background-color: #9a1e50;

                .react-multi-carousel-track 
                {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                    margin: 0.5rem 0 0.5rem 0;
                    gap: 0.4rem;

                    .react-multi-carousel-item 
                    {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;

                        .product-info 
                        {
                            width: 203px;
                            display: flex;
                            flex-direction: column;
                            justify-content: flex-start;
                            align-items: center;
                            background-color: #eea1c0;
                            height: 40vh;

                            img 
                            {
                                width: 95%;
                                height: 60%;
                                margin-top: 0.5rem;
                            }

                            .description 
                            {
                                font-size: 0.9rem;
                                font-weight: bold;        
                                text-overflow: ellipsis;
                                margin-top: 0.5rem;
                                padding-bottom: 1rem;
                            }

                            .sale-price 
                            {
                                display: flex;
                                gap: 1rem;
                                margin-top: 0.2rem;

                                
                                h5 
                                {
                                    color: red;
                                    margin: 0;
                                    padding: 0; 

                                    span 
                                    {
                                        text-decoration: underline;
                                    }
                                }

                                h6
                                {
                                    text-decoration: line-through;
                                    margin: 0;
                                    padding: 0;
                                    padding-top: 0.3rem;

                                    span 
                                    {
                                        text-decoration: underline;
                                    }
                                }
                            }

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


    .footer 
    {
        width: 100vw;
        height: 25vh;
        background-color: #a80848;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        margin-top: 4rem;

        h3 
        {
            margin: 0;
            padding: 0;
        }
    }
`;