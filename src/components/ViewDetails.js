import React, { useState } from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const ViewDetails = ({ rowData, setData, handleClose, data, rowIndex }) => {
  const [inputData, setInputData] = useState(rowData);

  const handleChange = (key, val, i) => {
    setInputData({ ...inputData, [key]: val });
  };

  let findIndex = data.findIndex((obj) =>
    obj?.Index ? obj?.Index == inputData?.Index : obj.id == inputData?.id
  );

  const handleSave = () => {
    let arr = [...data];

    if (findIndex == 0 && (!inputData.id || !inputData.Index)) {
      arr.splice(rowIndex, 1, inputData);
    } else {
      arr.splice(findIndex, 1, inputData);
    }

    setData(arr);
    handleClose();
  };

  const handleDelete = () => {
    if (findIndex == 0 && (!inputData.id || !inputData.Index)) {
      let arr = [...data];
      arr.splice(rowIndex, 1);
      setData(arr);
    } else {
      const filterData = data.filter((obj) => {
        return obj?.Index !== inputData.Index;
      });
      setData(filterData);
    }
    handleClose();
  };

  return (
    <>
      <Container sx={{ margin: "10px 0 15px 0" }}>
        <Grid
          container
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography color={"primary"} paddingLeft={"10px"}>
            Edit Details
          </Typography>
          <Button variant="text" size="small" onClick={handleClose}>
            X
          </Button>
        </Grid>

        {Object.keys(inputData).map((keys, i) => {
          return (
            <Grid
              container
              key={keys + i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "10px",
                alignItems: "center",
              }}
            >
              <Grid item>
                <Typography>{keys}</Typography>
              </Grid>
              <Grid item paddingRight={"10px"}>
                <TextField
                  type="text"
                  name="keys"
                  size="small"
                  value={inputData[keys] || ""}
                  onChange={(e) => handleChange(keys, e?.target?.value, i)}
                />
              </Grid>
            </Grid>
          );
        })}

        <Grid container sx={{ justifyContent: "space-between" }}>
          <Button variant="contained" size="small" onClick={handleSave}>
            Save
          </Button>
          <Button variant="contained" size="small" onClick={handleDelete}>
            Delete
          </Button>
        </Grid>
      </Container>
    </>
  );
};

export default ViewDetails;
