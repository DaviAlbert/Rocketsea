import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  margin-bottom: 8px;
  border-radius: 10px;

  .checkbox-container {
    position: relative;
    display: inline-block;
    padding-left: 35px; /* Espaço para o checkmark */
    cursor: pointer;
    font-size: 18px;
    user-select: none;

    /* Esconde o input padrão */
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    /* Estilo padrão do checkmark */
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 25px;
      width: 25px;
      background-color: #eee;
      border: 2px solid #ccc;
      border-radius: 4px; /* Cantos arredondados */
      transition: background-color 0.3s, box-shadow 0.3s;
    }

    /* Hover no checkmark */
    &:hover input ~ .checkmark {
      background-color: #f0f0f0;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    }

    /* Estilo quando o checkbox está marcado */
    input:checked ~ .checkmark {
      background-color: #2196F3;
      border-color: #2196F3;
    }

    /* Ícone de "check" no estado marcado */
    input:checked ~ .checkmark::after {
      content: '';
      position: absolute;
      left: 9px;
      top: 5px;
      width: 6px;
      height: 12px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }

  h1 {
    margin-left: 16px;
    font-size: 16px;
    font-weight: bold;
  }
`;
