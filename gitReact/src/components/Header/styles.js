import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;
    display: flex;
    justify-content: space-between;
    height: 105px;
    width: 100%;
    padding: 0 80px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme})=> theme.COLORS.BACKGROUND_700};
`

export const Profile = styled.header`
    display: flex;
    align-items: center;
    >img{
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }
    >div{
        display: flex;
        flex-direction: column;
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