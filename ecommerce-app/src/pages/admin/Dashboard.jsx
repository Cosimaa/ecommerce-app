import React from "react";
import styled from "styled-components";
import BarChart from "../../components/BarChart";
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
import Up from "E:/ecommerce/ecommerce-app/src/images/triangle.png";
import Down from "E:/ecommerce/ecommerce-app/src/images/down.png";


export default function Dashboard() {
    return(
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

                    <div className="statistic-daily">
                        <div className="general">
                            <h4>Chào mừng, Hằng!</h4>
                            <h6>Đây là thống kê hôm nay</h6>

                            <h4>3,567</h4>
                            <h6>Khách tham quan</h6>

                            <h4>1,268</h4>
                            <h6>Lượt mua hàng</h6>
                        </div>

                        <div className="order-and-income-daily">
                            <div className="order">
                                <div className="info">
                                    <h4>Đơn mua</h4>
                                    <h4>4,677</h4>
                                </div>

                                <div className="growth">
                                    <img src={Up} alt="" />
                                    <h5>12,8%</h5>
                                </div>
                            </div>

                            <div className="income">
                                <div className="info">
                                    <h4>Tổng doanh thu</h4>
                                    <h4>12,076,000<span>đ</span></h4>
                                </div>

                                <div className="growth">
                                    <img src={Up} alt="" />
                                    <h5>1,8%</h5>
                                </div>
                            </div>
                        </div>

                        <div className="sold-and-shipping-fee">
                            <div className="sold">
                                <div className="info">
                                    <h4>Số sản phẩm bán được</h4>
                                    <h4>3,678</h4>
                                </div>

                                <div className="growth">
                                    <img src={Up} alt="" />
                                    <h5>9,56%</h5>
                                </div>
                            </div>

                            <div className="shipping-fee">
                                <div className="info">
                                    <h4>Tổng phí ship</h4>
                                    <h4>5,076,000<span>đ</span></h4>
                                </div>

                                <div className="growth">
                                    <img src={Down} alt="" />
                                    <h5>3,8%</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="statistic-weekly">
                        <div className="weekly-income">
                            <div className="info">
                                <h3>Doanh thu tuần này</h3>
                                <h3>83,224,000<span>đ</span></h3>
                                <div className="weekly-growth">
                                    <img src={Up} alt="" />
                                    <h5>7,8%</h5>
                                </div>
                            </div>

                            <div className="chart">
                                <BarChart />
                            </div>
                        </div>

                        <div className="weekly-order">
                            <div className="info">
                                <h3>Đơn hàng tuần này</h3>
                                <h3>27,324</h3>
                                <div className="weekly-growth">
                                    <img src={Down} alt="" />
                                    <h5>4,24%</h5>
                                </div>
                            </div>

                            <div className="chart">
                                <BarChart />
                            </div>
                        </div>
                    </div>

                    <div className="statistic-graph">
                        <BarChart />
                    </div>
                </div>
            </FormContainer>
            
        </>
    );
}

const FormContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .controller 
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 0.7rem;
        padding-top: 0.5rem;
        width: 20vw;

        .logo 
        {
            width: 2.5rem;
            height: 2.5rem;
            margin-bottom: 2rem ;
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80vw;

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

        .statistic-daily 
        {
            display: flex;
            width: 100%;

            .general 
            {
                width: 40%;
                background-color: #E493B3;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                padding-left: 1rem;
                margin-top: 1rem;

                h4, h6
                {
                    margin: 0;
                    padding: 0;
                }
            }

            .order-and-income-daily 
            {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 0.5rem;
                width: 30%;

                .order 
                {
                    background-color: #E493B3;
                    width: 90%;
                    margin-top: 1rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    
                    .info 
                    {
                        
                        h4 
                        {
                            margin: 0.5rem 0 0.5rem 0.5rem;
                            padding: 0;
                        }
                    }

                    .growth 
                    {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin: 4rem 1rem 1rem 0;
                        img 
                        {
                            width: 1rem;
                            height: 1rem;
                        }

                        h5 
                        {
                            margin: 0;
                            padding: 0;
                        }
                    }
                }

                .income 
                {
                    background-color: #E493B3;
                    width: 90%;
                    margin-top: 1rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    
                    .info 
                    {
                        
                        h4 
                        {
                            margin: 0.5rem 0 0.5rem 0.5rem;
                            padding: 0;
                        }
                    }

                    .growth 
                    {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin: 4rem 1rem 1rem 0;
                        img 
                        {
                            width: 1rem;
                            height: 1rem;
                        }

                        h5 
                        {
                            margin: 0;
                            padding: 0;
                        }
                    }
                }
            }

            .sold-and-shipping-fee 
            {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 0.5rem;
                width: 30%;

                .sold 
                {
                    background-color: #E493B3;
                    width: 90%;
                    margin-top: 1rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    
                    .info 
                    {
                        
                        h4 
                        {
                            margin: 0.5rem 0 0.5rem 0.5rem;
                            padding: 0;
                        }
                    }

                    .growth 
                    {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin: 4rem 1rem 1rem 0;
                        img 
                        {
                            width: 1rem;
                            height: 1rem;
                        }

                        h5 
                        {
                            margin: 0;
                            padding: 0;
                        }
                    }
                }

                .shipping-fee 
                {
                    background-color: #E493B3;
                    width: 90%;
                    margin-top: 1rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    
                    .info 
                    {
                        
                        h4 
                        {
                            margin: 0.5rem 0 0.5rem 0.5rem;
                            padding: 0;
                        }
                    }

                    .growth 
                    {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin: 4rem 1rem 1rem 0;
                        img 
                        {
                            width: 1rem;
                            height: 1rem;
                        }

                        h5 
                        {
                            margin: 0;
                            padding: 0;
                        }
                    }
                }
            }
        }

        .statistic-weekly 
        {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            margin: 2rem;

            .weekly-income 
            {
                width: 49%;
                height: 10rem;
                display: flex;
                justify-content: space-around;
                align-items: center;
                gap: 2rem;
                background-color: #E493B3;

                .info 
                {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    h3 
                    {
                        margin: 0;
                        padding: 0;
                    }

                    .weekly-growth 
                    {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 0.5rem;
                        img 
                        {
                            width: 1rem;
                            height: 1rem;
                        }
                    }
                }

                .chart 
                {
                    width: 50%;
                }
            }

            .weekly-order 
            {
                width: 49%;
                height: 10rem;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 3rem;
                background-color: #E493B3;
                margin-right: 1rem;

                .info 
                {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    h3 
                    {
                        margin: 0;
                        padding: 0;
                    }

                    .weekly-growth 
                    {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 0.5rem;
                        img 
                        {
                            width: 1rem;
                            height: 1rem;
                        }
                    }
                }

                .chart 
                {
                    width: 50%;
                }
            }
        }
    }

    .statistic-graph 
    {
        width: 80vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;