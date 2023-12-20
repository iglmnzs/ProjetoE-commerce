import styled from 'styled-components';

//padrão - cinza
//primário / info - azul
//sucesso - verde
//alerta - laranja
//erro - vermelho

export const BaseButton = styled.button`
  color: ${(props) => {
    if (props.type == 'sucesso') {
      return "#333d29"
    } else if (props.type == 'alerta') {
      return "#333d29"
    } else {
      return "1f2421"
    }
  }};
  background-color: ${(props) => {
    if (props.type == 'sucesso') {
      return "#38b000"
    } else if (props.type == 'alerta') {
      return "#fb6107"
    } else {
      return "#ced4da"
    }
  }};
  padding: 5px 10px 5px 12px;
  border: none;
  box-shadow: 1px 1px 1px 1px #ccd5ae;
  border-radius: 8px;
  cursor: pointer;
`

export const BaseInput = styled.input`

`