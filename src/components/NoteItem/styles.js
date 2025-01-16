import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 16px;
    >button{
        border: none;
        background: none;
    }
    .button-delete {
        color: ${({ theme }) => theme.COLORS.RED};
    }
    .button-add {
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
    >input{
        background: transparent;
        color: ${({ theme }) => theme.COLORS.WHITE};
        height: 56px;
        width: 100%;
        padding: 12px;
        border: none;
        border-radius: 8px 0px 0px 8px;
        &::placeholder{
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`