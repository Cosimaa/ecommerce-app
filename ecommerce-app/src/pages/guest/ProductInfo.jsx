import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Search from "E:/ecommerce/ecommerce-app/src/images/magnifying-glass.png";
import Logo from "E:/ecommerce/ecommerce-app/src/images/shopping-cart.png";
import User from "E:/ecommerce/ecommerce-app/src/images/user.png";
import Notification from "E:/ecommerce/ecommerce-app/src/images/bell.png";
import Help from "E:/ecommerce/ecommerce-app/src/images/question.png";
import Inox from "E:/ecommerce/ecommerce-app/src/images/do_inox.jpg";
import Star from "E:/ecommerce/ecommerce-app/src/images/star.png";
import HalfStar from "E:/ecommerce/ecommerce-app/src/images/rating.png";
import AddProduct from "E:/ecommerce/ecommerce-app/src/images/cart.png";

export default function ProductInfo() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
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

            <div className="link">

            </div>

            <div className="product-container">
                <div className="product-image">
                    <img src={Inox} alt="" />
                    <Carousel 
                        responsive={responsive}
                        className='carousel-container'>
                        <img src={Inox} alt="" />
                        <img src={Inox} alt="" />
                        <img src={Inox} alt="" />
                        <img src={Inox} alt="" />
                        <img src={Inox} alt="" />
                        <img src={Inox} alt="" />
                    </Carousel>
                </div>

                <div className="product-info">
                    <h3>Ống nhựa, ống nước uPVC Bình Minh đủ size, đủ cỡ - hàng chính hãng</h3>

                    <div className="ratings">
                        <div className="stars">
                            4.5 
                            <span>
                                <img src={Star} alt="" />
                                <img src={Star} alt="" />
                                <img src={Star} alt="" />
                                <img src={Star} alt="" />
                                <img src={HalfStar} alt="" />
                            </span>
                        </div>

                        <h5>333 <span>đánh giá</span></h5>
                        <h5>700 <span>đã bán</span></h5>
                    </div>

                    <h2 id="price">40,000đ - 125,000đ</h2>
                    <div className="category">
                        <table>
                            <tr>
                                <td>chính sách trả hàng</td>
                                <td>trả hàng 15 ngày</td>
                            </tr>

                            <tr>
                                <td>vận chuyển</td>
                                <td>từ ... đến ...</td>
                            </tr>

                            <tr>
                                <td>kích cỡ</td>
                                <select name="size" id="size">
                                    <option value="21">21</option>
                                    <option value="27">27</option>
                                    <option value="29">29</option>
                                </select>
                            </tr>

                            <tr>
                                <td>số lượng</td>
                                <td>
                                    <div className="number">
                                        <button>-</button>
                                        <h3>1</h3>
                                        <button>+</button>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <button className="submit-btn">
                <img src={AddProduct} alt="" />
                thêm vào giỏ hàng
            </button>

            <div className="product-detail">
                CHI TIẾT SẢN PHẨM:
                <br />
                .....
                <br />
                MÔ TẢ SẢN PHẨM: 
                <br />
                ....
            </div>

            <div className="product-rating">
                <h3>ĐÁNH GIÁ SẢN PHẨM</h3>
                <div className="star-statistic">
                    <div className="overal">
                        <h3>4.5</h3>
                        <div className="star">
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={HalfStar} alt="" />
                    </div>
                 </div>

                    <button>Tất cả</button>
                    <button>5 sao</button>
                    <button>4 sao</button>
                    <button>3 sao</button>
                    <button>2 sao</button>
                    <button>1 sao</button>
                </div>
            </div>

            <div className="product-review">
                <div className="title">
                    <img src={User} alt="" />
                    <div className="rating">
                        <h4>username</h4>
                        <div className="star">
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={HalfStar} alt="" />
                        </div>
                    </div>
                    <h5>12/7/2022 | Phân loại hàng: size 21, 30cm </h5>
                </div>
                
                <div className="review">
                    .... Review ....
                </div>
            </div>

            <div className="other-product">
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
            </div>
            
            <button id="display-more">Hiển thị thêm</button>
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

    .link 
    {
        width: 100%;
        background-color: #f093b8;
        height: 2rem;
    }

    .product-container 
    {
        width: 90vw;
        display: flex;
        justify-content: flex-start;

        .product-image 
        {
            width: 30%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 0.3rem;
            margin: 1rem 0 0 2rem;
            
            img 
            {
                width: 100%;
                height: 100%;
                margin-bottom: 0.5rem;
            }

            .carousel-container 
            {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

                .react-multi-carousel-track 
                {
                    width: 100%;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    gap: 0.5rem;

                    .react-multi-carousel-items 
                    {
                        width: 30%;
                        img 
                        {
                            width: 150%;
                            height: 150%;
                        }
                    }
                }
            }
        }

        .product-info 
        {
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            margin: 2rem 0 0 4rem;
            gap: 2rem;

            h2, h3, h5 
            {
                margin: 0;
            }

            .ratings 
            {
                width: 80%;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .stars 
                {
                    img 
                    {
                        width: 1rem;
                        height: 1rem;
                    }
                }
            }

            h2
            {
                color: red;
            }

            .category 
            {
                width: 100%;
                
                table 
                {
                    width: 100%;
                    font-weight: bold;
                    
                    tr 
                    {
                        td 
                        {
                            padding-bottom: 1rem;

                            .number 
                            {
                                display: flex;
                                align-items: flex-start;
                                gap: 1rem;  
                                
                                button 
                                {
                                    text-align: center;
                                    font-weight: bold;
                                    height: 1.5rem;
                                    width: 1.5rem;
                                    background-color: #eec5d5;
                                    border: none;
                                    outline: none;
                                    border-radius: 5px;

                                    &:hover 
                                    {
                                        cursor: pointer;
                                        background-color: #f3d5e1;
                                    }
                                }
                            }
                        }

                        #size 
                        {
                            width: 5rem;
                            text-align: center;
                            outline: none;
                            border: none;
                            border-radius: 5px;
                            background-color: #eec5d5;
                            appearance: none;
                            height: 1.5rem;
                        }
                    }
                }
            }  
        }
    }

    .submit-btn 
    {
        width: 20vw;
        height: 8vh;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        outline: none;
        border: none;
        border-radius: 5px;
        font-weight: bold;
        background-color: #e8528e;

        img 
        {
            width: 20%;
            height: 100%;
        }

        &:hover 
        {
            cursor: pointer;
            background-color: #ee4578;
        }
    }

    .product-detail 
    {
        width: 90vw;
        margin: 2rem 0 0 4rem;
    }

    .product-rating 
    {
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        h3 
        {
            margin-left: 4rem;
        }

        .star-statistic 
        {
            width: 40%;
            position: relative;
            left: 4rem;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1.5rem;
            background-color: #e01566;
            border-radius: 2px;

            .overal 
            {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                h3 
                {
                    margin: 0;
                }

                img 
                {
                    width: 1rem;
                    height: 1rem;
                }
            }

            button 
            {
                border: none;
                outline-width: 2px;
                font-weight: bold;
                border-radius: 2px;

                &:hover 
                {
                    cursor: pointer;
                }
            }
        }
    }

    .product-review 
    {
        width: 90vw;
        display: flex;
        flex-direction: column;
        margin: 2rem 0 2rem 0;
        gap: 1rem;

        .title 
        {
            width: 25%;
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;

            img 
            {
                width: 3rem;
                height: 3rem;
            }

            .rating 
            {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 0.5rem;
                h4 
                {
                    margin: 0;
                }

                .star 
                {
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    img 
                    {
                        width: 1rem;
                        height: 1rem;
                    }
                }
            }

            h5 
            {
                margin: 0;
                color: #5f585b;
            }
        }
    }

    .other-product 
    {
        width: 90vw;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;

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

    #display-more 
    {
        width: 20vw;
        height: 8vh;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        outline: none;
        border: none;
        border-radius: 5px;
        font-weight: bold;
        background-color: #e8528e;
        margin-bottom: 2rem;

        img 
        {
            width: 20%;
            height: 100%;
        }

        &:hover 
        {
            cursor: pointer;
            background-color: #ee4578;
        }
    }
`;