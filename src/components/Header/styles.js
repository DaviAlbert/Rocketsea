import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
    grid-area: header;
    display: flex;
    justify-content: space-between;
    height: 105px;
    width: 100%;
    padding: 0 8px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme})=> theme.COLORS.BACKGROUND_700};
`

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    width: 90%;
    >img{
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }
    >div{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-left: 16px;
        line-height: 24px;
        span{
            font-size: 14px;
            color: ${({theme})=> theme.COLORS.GRAY_100};
        }
        strong{
            font-size: 14px;
            color: ${({theme})=> theme.COLORS.WHITE};
        }
    }
`

export const Logout = styled.button`
border: none;
background: none;
    >svg{
        color: ${({theme})=> theme.COLORS.GRAY_100};
    }
`