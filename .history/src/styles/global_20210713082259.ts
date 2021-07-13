import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`

    :root{
        --background: #f8f2f5;

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

    button{
        cursor: pointer;
    }
    [disable]{
        opacity: 0.6;
        cursor: not-allowed;
    }

`;