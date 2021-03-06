import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`

    :root{
        --background: #f8f2f5;

        --red: #e52e40;
        --blue: #5429cc;

        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --shape: #ffffff;

    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        @media (max-width: 1080px){
            font-size: 93.5%;
        }

    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    
    border-style, input, textarea, button{
        font-family: 'Poppins', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, strong{
        
    }

    button{
        cursor: pointer;
    }
    [disable]{
        opacity: 0.6;
        cursor: not-allowed;
    }

`;