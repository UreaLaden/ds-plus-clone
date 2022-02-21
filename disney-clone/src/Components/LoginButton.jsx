import styled from "styled-components";

const LoginButton = styled.a`
    background-color:rgba(0,0,0,0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    transition: all .2s ease 0s;

    &:hover{
        background-color: #f9f9f9;
        color:#000;
        border-color:transparent;
    }
`;

export default LoginButton;