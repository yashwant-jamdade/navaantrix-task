import React, { useState } from "react";
import Papa from "papaparse";
import Container from "@mui/material/Container";
import Table from "./Table";
import Button from "@mui/material/Button";

const UploadFile = () => {
  const [data, setData] = useState();

  const parseCSV = (csvData) => {
    const parsedData = Papa.parse(csvData, { header: true }).data;

    return parsedData;
  };

  return (
    <Container sx={{ marginBottom: "20px" }}>
      <Button variant="outlined" sx={{ mt: 2, mb: 3 }}>
        <input
          margin="normal"
          type="file"
          accept=".csv"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = (event) => {
                const csvData = event.target.result;
                setData(parseCSV(csvData));
              };
              reader.readAsText(file);
            }
          }}
        />
      </Button>

      {data ? (
        <Table data={data} setData={setData} />
      ) : (
        <h2>Please Select File to View Details</h2>
      )}
    </Container>
  );
};

export default UploadFile;
