import React from "react";
import robo from "../image/robo.png";
import {
  BoxConversa,
  CGrid,
  Container,
  Conversa,
  Div,
  Form,
  Img,
  Paragrafo,
  Section,
  Span,
  TituloPrincipal,
} from "../styles/tags";
import styled from "styled-components";
import Button from "../components/form/button/Button";
import Input, { InputGroup } from "../components/form/input/Input";

export const BoxImgRobo = styled.div`
  position: absolute;
  top: 10px;
  left: -29px;
  z-index: 1;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Inicio = () => {
  const [campanha, setCampanha] = React.useState("");

  const mensagemGPT = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `http://localhost:8080/api/generative/ia/generate/ia/message?message=${campanha} com 25 palavras&apiKey=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`
    );

    const json = await response.json();

    function showMessages() {
      let historic = document.getElementById("historic");

      let boxMyMessage = document.createElement("div");
      boxMyMessage.className = "box-my-message";

      let myMessage = document.createElement("p");
      myMessage.className = "my-message";
      myMessage.innerHTML = campanha;

      boxMyMessage.appendChild(myMessage);
      historic.appendChild(boxMyMessage);

      var boxResponseMessage = document.createElement("div");
      boxResponseMessage.className = "box-response-message";

      var chatResponse = document.createElement("p");
      chatResponse.className = "response-message";
      chatResponse.innerHTML = json.response;

      boxResponseMessage.appendChild(chatResponse);

      historic.appendChild(boxResponseMessage);

      historic.scrollTop = historic.scrollHeight;
    }

    showMessages();
  };

  return (
    <Section>
      <Container>
        <CGrid grid="1fr" padding="60px 0">
          <TituloPrincipal>
             Interagindo com nossa <Span>Inteligência Artificial</Span>
          </TituloPrincipal>

          <Paragrafo style={{ marginBottom: "2rem" }}>
            Aqui você poderá interagir com uma{" "}
            <Span>inteligência artificial</Span> que será capaz de criar
            sugestões para auxiliar você durante a criação da sua 
            <Span>promoção</Span>, <Span>divulgação</Span> ou{" "}
            <Span>campanha</Span>.
          </Paragrafo>

          <Div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <BoxImgRobo>
              <Img src={robo} alt="robo" />
            </BoxImgRobo>
            <BoxConversa>
              <Conversa></Conversa>

              <Div style={{ width: "100%" }}>
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
                    />
                  </InputGroup>

                  <Button
                    onClick={mensagemGPT}
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
            </BoxConversa>
          </Div>
        </CGrid>
      </Container>
    </Section>
  );
};

export default Inicio;
