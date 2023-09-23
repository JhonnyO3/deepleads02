import React, {useState} from "react";
import {
  Box,
  Br,
  CGrid,
  Container,
  Div,
  Form,
  P,
  Paragrafo,
  Section,
  Span,
  TituloPrincipal,
} from "../styles/tags";
import Button from "../components/form/button/Button";
import Input, { InputGroup } from "../components/form/input/Input";
import DataTable from "../components/dataTable/DataTable";

const Campanha = () => {
  const [campanha, setCampanha] = useState("");



  function handleClick(event) {
    event.preventDefault();
    document.getElementById("conteudo").innerHTML += `<p class="paragrafo-campanha">${campanha}</p>`
    console.log(campanha);

    const postWhats = async () => {
      const obj = {
        dataInicio: "2023-09-17T08:00:00Z",
        dataFim: "2023-09-18T08:00:00Z",
        message: `${campanha}`,
        messageTyp: "text",
        phoneInitia: "5511957818539",
        leads: [
          {
            "name": "Marco Automobilismo",
            "phone": "5511970277484",
            "state": "São Paulo",
            "category": "Cliente"
          },
          {
            "name": "cabelereiro Mirah",
            "phone": "5511956877422",
            "state": "Rio de Janeiro",
            "category": "Prospect"
          }
        ]

      }

      const post = await fetch(`http://localhost:8080/api/whatsapp/send/message`, {
        method: 'POST',
        headers: {

        },
        body: JSON.stringify(obj)
      })
    }

    postWhats()
  }

  return (
    <Section>
      <Container>
        <CGrid grid="1fr" padding="60px 0">
          <TituloPrincipal>
            Configurando sua <Span>Campanha</Span>
          </TituloPrincipal>

          <Paragrafo>
            Nos próximos passos iremos programar e iniciar a sua{" "}
            <Span>Campanha</Span>
          </Paragrafo>

          <Div style={{ width: "100%", maxWidth: "1000px", marginBottom: '3rem' }}>
            <Form
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "10px",
              }}
            >
              <InputGroup background="#fff" border="solid 1px #4B4B4B">
                <Input
                  placeholder="Data Início"
                  cor="#2171AC"
                  corplaceholder="#2171AC"
                />
              </InputGroup>

              <InputGroup background="#fff" border="solid 1px #4B4B4B">
                <Input
                  placeholder="Data Término"
                  cor="#2171AC"
                  corplaceholder="#2171AC"
                />
              </InputGroup>

              <InputGroup background="#fff" border="solid 1px #4B4B4B">
                <Input
                  placeholder="Horário"
                  cor="#2171AC"
                  corplaceholder="#2171AC"
                />
              </InputGroup>

              <InputGroup background="#fff" border="solid 1px #4B4B4B">
                <Input
                  placeholder="Nº da Campanha"
                  cor="#2171AC"
                  corplaceholder="#2171AC"
                />
              </InputGroup>
            </Form>
          </Div>

          <Section
            style={{
              width: "100%",
              marginBottom: "60px",
            }}
          >
            <DataTable />
          </Section>

          <Box
            style={{
              width: "100%",
              maxWidth: "1000px",
              borderRadius: "10px",
              background: "#CDCDCD",
              boxShadow:
                "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              padding: "1rem",
            }}
          >
            <Div id="conteudo">

            </Div>
             
            <Div style={{ width: "100%" }}>
              <Form
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "10px",
                  padding: '0'
                }}
              >
                <InputGroup background="#fff" border="solid 1px #4B4B4B">
                  <Input
                    placeholder="Digite a mensagem a ser disparada..."
                    cor="#2171AC"
                    corplaceholder="#2171AC"
                    value={campanha}
                    onChange={({ target }) => setCampanha(target.value)}
                  />
                </InputGroup>

                <Button
                  fontSize={1.25}
                  type="first"
                  color="#fff"
                  style={{
                    height: "40px",
                    padding: ".5rem 1.2rem",
                  }}
                  onClick={handleClick}
                >
                  Enviar
                </Button>
              </Form>
            </Div>
          </Box>
        </CGrid>
      </Container>
    </Section>
  );
};

export default Campanha;
