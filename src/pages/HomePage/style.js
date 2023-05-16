import styled from 'styled-components'

export const HomePageContainer = styled.div`
display: flex;
width: 100%;

main{
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding: 1rem;
}

aside{
    min-width: 15%;
}

form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width:70%;
    margin: auto;
    margin: 1.25rem 0rem 0rem 1.25rem;
}

button{
    margin-top:0.3125rem;
    padding: 0.3125rem;
}

label{
    color: white;
}

`