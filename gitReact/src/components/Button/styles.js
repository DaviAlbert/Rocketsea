import styled from 'styled-components'

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  width: 75%;
  height: 56px;
  border: 0;
  border-radius: 10px;
  padding: 0 16px;
  margin: 16px auto;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`