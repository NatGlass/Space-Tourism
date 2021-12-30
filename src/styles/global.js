import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
     // reset defaults //
    *, *::before, *::after{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
    }

    body{
        position: relative;
        width: 100%;
        max-width: 1440px;
        height: 100vh;
        margin: auto;
    }

   // typography //
   h1,h2,h3,h4{
       font-family: 'Bellefair', sans-serif;
       font-style: normal;
       font-weight: normal;
   }

    h5{
        font-family: 'Barlow Condensed', sans-serif;
        font-style: normal;
        font-weight: normal;
        letter-spacing: 4.75px;
    }
`