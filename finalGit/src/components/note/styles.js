import styled from "styled-components";

export const Container = styled.button`
    width: 75%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border: none;
    border-radius: 10px;
    padding: 22px;
    margin: auto;
    display: flex;
    flex-direction: column;
    >h1{
        flex: 1;
        font-weight: 700;
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        margin: auto;
    }
    >div{
        margin-top: 20px;
        h2{
        margin-top: 10px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
    }
    >footer{
        width: 100%;
        display: flex;
        margin-top: 24px;
    }
`