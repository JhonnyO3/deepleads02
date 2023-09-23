import React from "react";
import {
  Section,
  Container,
  CGrid,
  Div,
  Span,
  P,
  Small,
  Img,
} from "../styles/tags";
import styled from "styled-components";
import pessoas from "../image/negocios/pessoas.svg";
import global from "../image/negocios/global.svg";
import conversando from "../image/negocios/conversando.svg";
import perguntas from "../image/negocios/perguntas.svg";
import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
import TableBox from "../components/Table/TableBox";
import Thead from "../components/Table/Thead";
import Tbody from "../components/Table/Tbody";
import Th from "../components/Table/Th";
import Tr from "../components/Table/Tr";
import Td from "../components/Table/Td";

export const ItemBox = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: flex-start;
  row-gap: 1.5rem;
  border-radius: 5px;
  border: solid 1px #fff;
  width: 100%;
  height: 100%;
  background: #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  padding: 1rem;

  .texto-preco {
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 1rem;

    div {
      p {
        margin-bottom: 0.5rem;
      }

      span {
        font-weight: 550;
        font-size: 1.5rem;
      }
    }

    &::before {
      content: "";
      display: block;
      width: 4px;
      height: 100%;
      border-radius: 12px;
      background: ${(props) => props.bg};
    }
  }

  .icone {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 5px;
    background: ${(props) => props.bg};

    img {
      width: 32px;
    }
  }

  .informacoes {
    grid-column: -1/1;
  }
`;

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Movimentacao",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const dataArea = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

const data02 = [
  { name: "Group A", value: 2400 },
  { name: "Group B", value: 4567 },
  { name: "Group C", value: 1398 },
  { name: "Group D", value: 9800 },
  { name: "Group E", value: 3908 },
  { name: "Group F", value: 4800 },
];

const Negocio = () => {
  return (
    <Section>
      <Container>
        <CGrid grid="1fr" padding="60px 0">
          <CGrid
            grid="repeat(auto-fit, minmax(240px, 1fr))"
            gap="2rem"
            style={{ width: "100%", marginBottom: "2rem" }}
          >
            <ItemBox bg="#515FD5">
              <Div className="texto-preco">
                <Div>
                  <P>Leads minerados</P>
                  <Span>1.456</Span>
                </Div>
              </Div>

              <Div className="icone">
                <Img src={pessoas} alt="icone pessoas" />
              </Div>

              <Small className="informacoes">
                <Span>+6,5%</Span> <Span>aumento de lucro</Span>
              </Small>
            </ItemBox>

            <ItemBox bg="#8EC9CD">
              <Div className="texto-preco">
                <Div>
                  <P>Leads por bairro</P>
                  <Span>1.456</Span>
                </Div>
              </Div>

              <Div className="icone">
                <Img src={global} alt="icone global" />
              </Div>

              <Small className="informacoes">
                <Span>+6,5%</Span> <Span>aumento de lucro</Span>
              </Small>
            </ItemBox>

            <ItemBox bg="#7472D3">
              <Div className="texto-preco">
                <Div>
                  <P>Perguntas Realizadas</P>
                  <Span>1.456</Span>
                </Div>
              </Div>

              <Div className="icone">
                <Img src={perguntas} alt="icone pessoas" />
              </Div>

              <Small className="informacoes">
                <Span>+6,5%</Span> <Span>aumento de lucro</Span>
              </Small>
            </ItemBox>

            <ItemBox bg="#6E9FF3">
              <Div className="texto-preco">
                <Div>
                  <P>Mensagens Enviadas</P>
                  <Span>1.456</Span>
                </Div>
              </Div>

              <Div className="icone">
                <Img src={conversando} alt="icone pessoas" />
              </Div>

              <Small className="informacoes">
                <Span>+6,5%</Span> <Span>aumento de lucro</Span>
              </Small>
            </ItemBox>
          </CGrid>

          <CGrid
            grid="1fr 1.5fr"
            gap="2rem"
            alignItems="center"
            style={{ width: "100%", marginBottom: "2rem" }}
          >
            <Div className="area-grafico">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pv" fill="#8884d8" />
                  <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </Div>

            <Div className="area-grafico">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  width={500}
                  height={400}
                  data={dataArea}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stackId="1"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                  <Area
                    type="monotone"
                    dataKey="pv"
                    stackId="1"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                  />
                  <Area
                    type="monotone"
                    dataKey="amt"
                    stackId="1"
                    stroke="#ffc658"
                    fill="#ffc658"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Div>
          </CGrid>

          <CGrid
            grid=".5fr 1fr"
            gap="2rem"
            alignItems="center"
            style={{ width: "100%" }}
          >
            <Div className="area-grafico">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                  <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data01}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  />
                  <Pie
                    dataKey="value"
                    data={data02}
                    cx={500}
                    cy={200}
                    innerRadius={40}
                    outerRadius={80}
                    fill="#82ca9d"
                  />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Div>

            <TableBox>
              <Thead>
                <Tr>
                  <Th titleTh="Cliente" />
                  <Th titleTh="website" />
                  <Th titleTh="Cidade" />
                  <Th titleTh="Rua" />
                  <Th titleTh="Número" />
                </Tr>
              </Thead>

              <Tbody>
                <Tr className="tr-body">
                  <Td>Nome</Td>
                  <Td>London</Td>
                  <Td>22.08.22</Td>
                  <Td>Cancelada</Td>
                  <Td>R$ 920</Td>
                </Tr>

                <Tr className="tr-body">
                  <Td>Nome</Td>
                  <Td>London</Td>
                  <Td>22.08.22</Td>
                  <Td>Cancelada</Td>
                  <Td>R$ 920</Td>
                </Tr>

                <Tr className="tr-body">
                  <Td>Nome</Td>
                  <Td>London</Td>
                  <Td>22.08.22</Td>
                  <Td>Cancelada</Td>
                  <Td>R$ 920</Td>
                </Tr>

                <Tr className="tr-body">
                  <Td>Nome</Td>
                  <Td>London</Td>
                  <Td>22.08.22</Td>
                  <Td>Cancelada</Td>
                  <Td>R$ 920</Td>
                </Tr>
              </Tbody>
            </TableBox>
          </CGrid>
        </CGrid>
      </Container>
    </Section>
  );
};

export default Negocio;
