import styled from "styled-components";
import { PropsButtonNotification, PropsCheckbox, PropsLi } from "./types/type";
export const HomeStyled = styled.div`
    display: flex;
    min-block-size: 100vh;
    inline-size: 100%;
    color:#fff;
    background-color: var(--color-primary);
`;

export const ContainerContentStyled = styled.div`
    position: relative;
    flex: 2;
    inline-size: 100%;
`;

export const HeaderHomeStyled = styled.header`
  display: flex;
  justify-content: space-between;
  inline-size: 100%;
  padding: 20px 35px;
`;

export const AsideMenuStyled = styled.aside`
  --radius: 45px;

  flex: 1;
  position: relative;
  max-inline-size: 220px;
  min-block-size: 982px;
  border-start-end-radius: var(--radius); 
  border-end-end-radius: var(--radius);
  text-align: center;
  background-color: var(--color-aside-menu);
  transform: translateX(-100%);
  transition: transform 1s ease-in; 

  div{
    position: sticky;
    inset-block: 0;
    padding-block-start: 20px;
  }

  @media screen and (width > 1070px){
    transform: translateX(0%);
  }
  
`;

export const NavStyled = styled.nav` 
    block-size: 400px;
    margin-block-start: 12px;
    
`;

export const LogOutStyled = styled.div`

    display: flex;
    justify-content:  center;
    align-items: center;
    gap: 5px;
    block-size: 78px;
    color: var(--color-text-menu);
    span{

      margin-inline-end: 23px;
    }
`;

export const ButtonNotificationStyled = styled.button<PropsButtonNotification>`

  --size: 70px;

  position: relative;
  block-size: var(--size);
  inline-size: var(--size);
  border-radius: 50%;
  background-image : url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: 65%;
  background-position: center;
  background-color: #212121;

  &::before{

    --size: 8px;

    content: '';
    position: absolute;
    inset-block: 20%;
    inset-inline-end: 32%;
    block-size: var(--size);
    inline-size: var(--size);
    border-radius: 50%;
    line-height: 18px;
    color: #fff;
    background-color: #3DD2CC;
  }
`;

export const Container = styled.div`

    position: absolute;
    inset-inline-end: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    inline-size: 165px;
    transform: translateX(100%);
    transition: transform 1 ease-in; 
    @media screen and ( width > 1200px) {
      position: relative;
      transform: translateX(0%);
    } 
`;

export const SearchStyled = styled.form`
    display: flex;
    align-items: center;
    gap: 10px;
    block-size: 65px;
    inline-size: 700px;
    padding: 20px;
    background-color: transparent;
    z-index: 5;
    input{
      padding: 1rem;
      border-radius: 30px;
      inline-size: 100%;
      background-color: var(--color-search);
      border: none;
      font-size: var(--step-5);
      font-family: var(--font-family);
      color: var(--color-text-menu);
      &::placeholder{
        color: var(--color-text-menu);
      }
      
    }
`;

export const ButtonSearch = styled.button<PropsButtonNotification>`
  --size: 45px;
  block-size: var(--size);
  inline-size: var(--size);
  background-image : url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: 65%;
  background-position: center;
`;

export const ContainerMoviesStyled = styled.div`
    display: flex;
    text-align: center;
  
    main{
      flex: 2;
      inline-size: 800px;
    }

    aside{
      flex: 1;
      inline-size: 100px;
    }

`;

export const CardMovieStyled = styled.article`
    position: relative;
    block-size: 315px;
    inline-size: 200px;
    border-radius: 20px;
    transform: scale(100%);
    
    transition: transform 1s ease;
     &:hover{
      transform: scale(102%);
    }

    img{
      border-radius: 16px;
    }
  `;

export const ContainerStartStyled = styled.div`
    position: absolute;
    inset-block-start: 0%;
    inset-inline-end: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    block-size: 28px;
    inline-size: 68px;
    border-start-end-radius: 20px;
    border-end-start-radius: 20px;
    font-size: var(--step-5);
    backdrop-filter: blur(2.5px);
    background-color:rgba(232, 232, 232, 0.15);
    z-index: 2;

`;

export const SectionStyled = styled.section`

    min-block-size: 500px;

    header{
      text-align: center;
      font-size: var(--step-4);
    }

    @media screen and (width > 1200px) {
      header{
        text-align: left;
        padding-inline-start: 1rem;
      }
    }
`;

export const ContainersCardStyled = styled.div`

    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 20px;
    inline-size: 790px;
  
`;

export const HeroImagStyled = styled.ul`
  position: relative;
  block-size: 300px;
  inline-size: 707px;
  border-radius: 20px;
  margin: 0 auto;
  text-align: center;   
`;

export const FormChecksStyled = styled.form`

    min-block-size: 316px;
    inline-size: 243px;
    padding: 23px;
    margin: 0 auto; 
    border-radius: 30px;
    background-color: var(--color-aside-menu);

    input{

      border: none;
      background: none;
      font-family: var(--font-family);
      color: var(--color-text-menu);
    
    }
`;

export const ContainerInput = styled.div<PropsCheckbox>`
    display: flex;
    justify-content: space-between;

    & + hr{ 
      color: #6666669e;
    }

    input[type="checkbox"]{
      --size: 20px;
      block-size: var(--size);
      inline-size: var(--size);
      border: 1px solid var(--color-text-menu);
      border-radius: 5px;
      appearance: none;
  
      &:checked{
        background-image: url(${({ img }) => img});
        background-repeat: no-repeat;
        background-position: center;
      }
    }
`;

export const ContainerUncheckAllsStyled = styled.form`

    display: flex;
    justify-content: space-between;
    inline-size: 243px;
    margin: 0 auto; 
    padding: 17px  0px;
    input{
      border: none;
      background: none;
      font-family: var(--font-family);
      color: var(--color-text-menu);
    }
`;

export const ContainerListMovie = styled.ul`
    position: fixed;
    inset-block: 0%;
    inset-inline: 16%;
    inline-size: 837px;
    min-block-size: 100%;
    background-color: #292929e8;
    margin: 0;
    z-index: 3;
    opacity: 0;
    visibility: hidden;
    
`;

export const LiCarrouselStyle = styled.li<PropsLi>`
  position: absolute;
  border-radius: 23px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.322), rgba(0, 0, 0, 0.322)), url(${({
		img,
	}) => img});
  background-repeat: no-repeat;
  background-size: cover;
  opacity: ${({ index, isaActive }) => (index === isaActive ? 1 : 0)};
  transition: opacity 1s  ease-out; 
  inset: 0;
  text-align: center;
  overflow: hidden;
  
  h1{
    position: absolute;
    inset-inline-start: 4%;
    font-size:var(--step-1);
  }

  p{
    position: absolute;
    inset-block-end: 8%;
    inset-inline: 12%;

    font-size:var(--step-5);
  }
`;

export const ContainerStickyStyled = styled.div`
    position:sticky;
    inset-block-start:0;
`;

export const MenuStyled = styled.menu`

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    block-size: 376px;
    padding: 0;
`;

export const ItemMenu = styled.a`  

    position: relative;
    display: flex;    
    align-items: center;
    justify-content: center;
    gap: 25px;
    padding: 1.8em ;
    text-align: center;
    background-color: transparent ;
    transition: background-color var(--transition-hover);
    
    span{
        display: inline-block;
        text-align: left;
        inline-size: 91px;
        font-weight: bold;
        color: var(--color-text-menu);
        transition: color var(--transition-hover);
    }

   &::before{
        content: '';
        position: absolute;
        inset-block: 0;
        inset-inline-end: 0;
        inline-size: 6px;
        background-color:#3DD2CC;
        opacity: 0;
        transition: opacity var(--transition-hover); 
   } 
    
    &:hover{
        background-color: var(--color-hover);
        &::before{
            opacity: 1;
        }
        span{
            color: #3DD2CC;
        }
    }


`;
