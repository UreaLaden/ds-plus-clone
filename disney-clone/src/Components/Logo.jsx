import styled from 'styled-components'
import * as React from 'react';

const CTALogoOne = styled.img`
    margin-bottom:12px;
    max-width:600px;
    min-height:1px;
    display:block;
    width:100%;
`
const Logo = (props) =>{
    return(
        <StyledLogo>
            <img src="/images/logo.svg" alt="disney logo"/>
        </StyledLogo>
    )
}

const StyledLogo = styled.a`
    padding:0;
    width:80px;
    margin-top:4px;
    max-height:70px;
    font-size:0;
    display:inline-block;
    img{
        display:block;
        width:100%;
    }`;

export {CTALogoOne};
export default Logo;