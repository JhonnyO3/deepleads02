import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import styled from "styled-components";
import { useState } from 'react';

export const ContainerTable = styled.div`
  width: 100%;
  .table {
    width: calc(100% - 40px);
    margin: 0 auto;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
`;

const DataTable = () => {
  const [rowss, setRowss] = React.useState(null);

  const [selectedRows, setSelectedRows] = useState([]);
  const [data, setData] = React.useState([])


  React.useEffect(() => {
    const getLead = async () => {
      const response = await fetch(
        `http://localhost:8080/api/mineracao/get/leads/by-id?id=3952`
      );
      
      const json = await response.json();
      setRowss(json);
      console.log(json)

      console.log(json);
    };
    getLead();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Nome", width: 230 },
    { field: "phone", headerName: "Telefone", width: 130 },
    { field: "category", headerName: "Categoria", type: "email", width: 130,},
    { field: "plusCode", headerName: "PlusCode", type: "email", width: 130,},
    { field: "place", headerName: "Endereco", type: "email", width: 230,},
    { field: "stars", headerName: "Avaliações", type: "email", width: 130,},

  
  ];

  const onRowSelectionChange = (ids) => {
    const selectedIDs = new Set(ids);
    const linha = rowss.filter((row) => selectedIDs.has(row.id));
    setSelectedRows(linha)
    const obj = linha.map(({name, phone, state, category}) => {
      phone = "55" + phone;
      return {name, phone, state, category}
    })

    setData(obj)

  };



  const handleSubmitUsuarios = (event) => {
    event.preventDefault();

    fetch("http://localhost:8080/api/whatsapp/send/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dataInicio: "2023-09-17T08:00:00Z",
        dataFim: "2023-09-18T08:00:00Z",
        message:
          "Teste mensagem API DeepLeads pelo React se voce recebeu esta mensagem, desconsidere!",
        messageType: "text",
        phoneInitial: "5511957818539",
        leads: data,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };
  return (
    <>
    <ContainerTable>
      {rowss ? (
        <DataGrid
          className="table"
          rows={rowss}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          onRowSelectionModelChange={onRowSelectionChange}
          />
      ) : (
        "Carregar dados"
      )}
            <div>
      </div>
    </ContainerTable>
    <button onClick={handleSubmitUsuarios}>Enivar</button>
    </>

  );
};

export default DataTable;
