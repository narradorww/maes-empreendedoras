import styled from "styled-components";



export const Wrapper = styled.div`
background-color: var(--background);
color: var(--dark-green);
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
padding: 4rem;
text-align: center;
align-items: center;
justify-content: center;
`

export const Title = styled.h1`
font-size: 4rem;
margin-bottom: 2rem;

`

export const Description = styled.h2`
font-size: 2rem;
font-weight: 400;
width: min(100rem, 100%);
display: flex;
flex-direction: column;

`
export const Container = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`

export const Link = styled.a`
color: var(--dark-green);
font-size: 2rem;
font-weight: 400;
width: min(100rem, 100%);
text-decoration: none;
margin: 1rem;
:hover{
  color: var(--red-orange-color-wheel);
}
`



export const Illustration = styled.img`
margin-top: 3rem;
margin-bottom: 4rem;
width: min(50rem, 500%);
`
