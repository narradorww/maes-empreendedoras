import styled from 'styled-components';

export const Wrapper = styled.main`
background-color: var(--background);
color: var(--dark-green);
width: 100%;
height: 60rem;
display: flex;
flex-direction: row;
text-align: start;
align-items: flex-start;
justify-content: flex-start;

`
export const Logo = styled.img`
width: 20rem;
margin-bottom: 2rem;
padding: 2rem 2rem;
`

export const Title = styled.h1`
font-size: 2.5rem;
`

export const Description = styled.h2`
font-size: 2rem;
font-weight: 400;
width: min(100rem, 100%);
margin-top: 6rem;
padding: 0 2rem;
margin-right: 2rem;
margin-left: 2rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`
export const Illustration = styled.img`


width: min(50rem, 50%);
`


