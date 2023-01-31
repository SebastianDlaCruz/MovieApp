import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --color-primary: #191919;  
        --color-secondary: #4D4B4B;
        --color-aside-menu: #212121; 
        --color-text-menu: #666666;
        --color-hover: #3dd2cd7b;
        --color-search: #212121;
        --step-5: clamp(0.91rem, calc(0.89rem + 0.1vw), 0.96rem);
        --step-4: clamp(1.09rem, calc(1.05rem + 0.21vw), 1.2rem);
        --step-3: clamp(1.31rem, calc(1.24rem + 0.37vw), 1.5rem);
        --step-2: clamp(1.58rem, calc(1.46rem + 0.59vw), 1.88rem);
        --step-1: clamp(1.89rem, calc(1.71rem + 0.89vw), 2.34rem);
        --step-0: clamp(2.27rem, calc(2.01rem + 1.29vw), 2.93rem);
        --step1: clamp(2.72rem, calc(2.36rem + 1.83vw), 3.66rem);
        --step2: clamp(3.27rem, calc(2.75rem + 2.56vw), 4.58rem);
        --font-family: 'Poppins', sans-serif;
        --transition-hover: 1s ease-in-out;
        --media : 950px;
    }
    html{
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    body{
        
        box-sizing: inherit;
        margin: 0;
        min-block-size: 100vh;
        font-family: var(--font-family);
    }

    *,::after,
    ::before{
        box-sizing: inherit;
    }
    img{
        max-inline-size: 100%;
    }
    a{
        text-decoration: none;
    }
    ul,li{

        list-style-type: none;
        padding:0;
    }
    button{
        appearance: none;
        background: none;
        border: none;
    }
`;
