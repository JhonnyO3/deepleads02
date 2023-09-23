import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Box, Img, Span, Strong } from "../../styles/tags";
import logo from "../../image/logo.svg";
import user from "../../image/user.svg";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
  background: #fff;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;
export const CHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  z-index: 1000;

  .btn-login {
    display: none;

    @media (max-width: 1000px) {
      display: block;
    }
  }

  @media (max-width: 1200px) {
    padding-inline: 1rem;
  }

  @media (max-width: 1000px) {
    .user {
      display: none;
    }
  }
`;

export const Logo = styled.div`
  @media (max-width: 490px) {
    img {
      width: 180px;
    }
  }
`;

export const Nav = styled.nav`
  &.ativo {
    ul {
      right: 15px;
    }
  }

  @media (max-width: 1000px) {
    ul {
      position: absolute;
      display: block;
      top: 84px;
      right: -240px;
      width: 240px;
      border-radius: 5px;
      background: #2171ac;
      padding: 1rem 0.8rem;
      transition: linear 0.3s;

      li {
        border-bottom: solid 1px #0f4f7f;

        a {
          color: #fff;
          strong {
            color: #fff;
          }
        }

        &:nth-child(5) {
          border-bottom: none;
        }

        &:last-child {
          border-radius: 5px;
          border-bottom: none;
          background: #0f4f7f;
          padding-inline: 0.5rem;
        }
      }
    }
  }
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 2rem;
`;

const animeWidth = keyframes`
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
`;

export const Li = styled.li`
  a {
    display: block;
    font-size: 1.25rem;
    font-weight: 550;
    color: #4b4b4b;
    padding: 0.3rem 0.2rem;
    transition: 0.3s;
  }

  span {
    display: block;
    width: 0;
    height: 2px;
    border-radius: 5px;
    background: #2171ac;
  }

  &:hover span, &:focus span {
    width: 100%;
    animation: ${animeWidth} 0.8s;
  }
`;

export const DivUser = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px #d9a511;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  &:hover {
    div {
      visibility: visible;
    }
  }

  i {
    color: #d9a511;
  }
`;

export const Div = styled.div`
  position: absolute;
  top: 3.5rem;
  right: -10px;
  display: flex;
  flex-direction: column;
  width: 12.5rem;
  border-radius: 0.2rem;
  background: #4f0222;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
  padding: 10px 15px;
  visibility: hidden;
  transition: 1s;

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    right: 13px;
    width: 20px;
    height: 20px;
    background: #4f0222;
    transform: rotate(45deg);
  }

  button {
    &:hover,
    &:focus {
      box-shadow: 0 0 0 0;
    }
  }
`;

export const BLogin = styled.button`
  a {
    border-radius: 0.2rem;
    background: #d9a511;
    font-size: 1rem;
    color: #4f0222;
    padding: 0.3rem 1rem;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
    margin-left: 0.5rem;

    a {
      padding: 0.5rem 3rem;
    }
  }
`;

export const BHamburger = styled.button`
  display: none;
  border: none;
  border-radius: 5px;
  background: #2171ac;
  outline: none;
  padding: 0 0.5rem;

  &.ativo {
    div {
      &::before {
        transform: rotate(45deg);
        box-shadow: none;
      }
      
      &::after {
        transform: rotate(-45deg);
      }
    }
  }

  span {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 550;
  }

  div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    /* background: #D9A511; */
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      width: 28px;
      height: 3px;
      background: #fff;
      box-shadow: 0 10px 0 #fff;
      transition: 0.2s;
      transform: translateY(-10px);
    }

    &::after {
      content: "";
      position: absolute;
      width: 28px;
      height: 3px;
      background: #fff;
      transition: 0.2s;
      transform: translateY(10px);
    }
  }

  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    column-gap: 0.25rem;
  }
`;



const Header = () => {
  const [ativo, setAtivo] = React.useState(false);
  
  return (
    <HeaderWrapper>
      <CHeader>
        <Link to="/home" className="logo">
          <Img src={logo} alt="deepleads" />
        </Link>

        <Nav className={ativo ? "ativo" : ""}>
          <Ul>
            <Li>
              <Link to="/home">Home</Link>
              <Span></Span>
            </Li>

            <Li>
              <Link to="/sobre">Sobre</Link>
              <Span></Span>
            </Li>

            <Li>
              <Link to="/planos">Planos</Link>
              <Span></Span>
            </Li>

            <Li>
              <Link to="/mercado-tech">
                Mercado{" "}
                <Strong type="first">
                  Tech
                </Strong>
              </Link>
              <Span></Span>
            </Li>

            <Li>
              <Link to="/contato">Contato</Link>
              <Span></Span>
            </Li>

            <Li className="btn-login">
              <Link to="/login">login</Link>
              <Span></Span>
            </Li>
          </Ul>
        </Nav>

        <BHamburger
          className={ativo ? "ativo" : ""}
          onClick={() => setAtivo(!ativo)}
        >
          <Span>Menu</Span>
          <Box></Box>
        </BHamburger>

        <Link to="/login" className="user">
          <Img src={user} alt="usuário" style={{  width: '50px' }} />
        </Link>
      </CHeader>
    </HeaderWrapper>
  );
};

export default Header;
