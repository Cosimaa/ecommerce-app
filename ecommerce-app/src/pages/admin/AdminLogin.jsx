import React from "react";
import styled from "styled-components";

export default function AdminLogin() {
    return(
        <>  
            <FormContainer>
                <h1>ĐĂNG NHẬP</h1>
                <form action="">
                    <input type="text" className="login-name" placeholder="tên đăng nhập"/>
                    <input type="password" className="password" placeholder="mật khẩu"/>

                    <button type="submit">ĐĂNG NHẬP</button>
                </form>
            </FormContainer>
        </>
    );
}

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    margin-top: 20vh;
    gap: 2rem;

    form 
    {
        width: 60vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 4rem;

        input[type=text], input[type=password] 
        {
            width: 60%;
            height: 3rem;
            border-radius: 0.5rem;
            outline: none;
            display: inline-block;
            padding-left: 2rem;
            border: none;
        }

        button 
        {
            background-color: #e23350;
            border: none;
            outline: none;
            width: 60%;
            border-radius: 0.5rem;
            height: 3rem;
            color: white;
            font-weight: bold;
            transition: background-color 0.2s;

            &:hover 
            {
                cursor: pointer;
                background-color: #f82a4c;
            }
        }
    }
`;