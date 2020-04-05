import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focues{
  outline: 0;
}

html, body, #root, .App{
  height: 100%
}

.App{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

body{
    -webkit-font-smoothing: antialiased;
}

body, input, button{
 font: 14px 'Roboto', sans-serf;
}

a{
 text-decoration: none;
}

ul{
 list-style: none;
}

button{
 cursor: pointer;
}

`;
