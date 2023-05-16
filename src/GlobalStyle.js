import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

:root{
    --soft-white: #f2f2f2;
    --green:#8bcf21;
    --yellow: #Ffcb16;
    --dark-blue: #011640;
    --deep-blue-secondary: #010F2B;
}

h1{
    font-family: 'Jolly Lodger', cursive;
    color: #8bcf21
}

h2, h3{
    font-family: 'Staatliches';
    color: var(--yellow);

}

body{
    font-family: 'Rajdhani', sans-serif;
    background-color:#011640;
    color: var(--soft-red);

}

*{
    margin: 0%;
    padding: 0%;
    
}



`
