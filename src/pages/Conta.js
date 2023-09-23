import React from "react";
import styled from "styled-components";
import user from "../image/Usuario.png";
import {
  Box,
  CGrid,
  Container,
  Div,
  Form,
  Img,
  P,
  Section,
  Span,
  TituloPrincipal,
} from "../styles/tags";
import Button from "../components/form/button/Button";
import Input, { InputGroup } from "../components/form/input/Input";
import { UserContext } from '../UserContext';

export const BoxImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 1.5rem;
  padding: 1rem;
`;

const Conta = () => {
  const { data } = React.useContext(UserContext)

  console.log(data && data.nome + " nome")
  
  return (
    <Section>
      <Container>
        <CGrid grid="1fr" padding="60px 0">
          <TituloPrincipal>
            Olá, <Span>Pedro</Span>
          </TituloPrincipal>

          <BoxImg>
            <Img src={user} alt='usuario' />
          </BoxImg>

          <Div>
            <Form
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "10px",
                padding: "0",
              }}
            >
              <InputGroup background="#fff" border="solid 1px #4B4B4B">
                <Input
                  placeholder="Digite em alguma palavras o que você gostaria..."
                  cor="#2171AC"
                  corplaceholder="#2171AC"
                  type="file"
                />
              </InputGroup>

              <Button
                texto="Upload"
                fontSize={1.25}
                type="first"
                color="#fff"
                style={{
                  height: "40px",
                  padding: ".5rem 1.2rem",
                }}
              />
            </Form>
          </Div>

          <P mt={1.5} mb={1.5}>Atualize suas informações sempre que quiser</P>

          <Box>
          <Form>
            <InputGroup background="#CDCDCD">
              <Input
                placeholder="Nome"
                type="text"
                cor="#4b4b4b"
                corPlac="#4b4b4b"
              />
            </InputGroup>

            <InputGroup background="#CDCDCD">
              <Input
                id="telefone"
                placeholder="Telefone"
                type="text"
                cor="#4b4b4b"
                corPlac="#4b4b4b"
              />
            </InputGroup>

            <InputGroup background="#CDCDCD">
              <Input
                placeholder="Email"
                type="email"
                cor="#4b4b4b"
                corPlac="#4b4b4b"
              />
            </InputGroup>

            <InputGroup background="#CDCDCD">
              <Input
                placeholder="Senha"
                type="password"
                cor="#4b4b4b"
                corPlac="#4b4b4b"
              />
            </InputGroup>

            <Button
              texto="Salvar"
              fontWeight="550"
              type="first"
              color="#fff"
            />
          </Form>
        </Box>
        </CGrid>
      </Container>
    </Section>
  );
};

export default Conta;
