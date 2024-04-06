import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import Dialog from "@mui/material/Dialog";
import ViewDetails from "./ViewDetails";
import Typography from "@mui/material/Typography";

const Table = ({ data, setData }) => {
  const [columns, setColumns] = useState([]);
  const [open, setOpen] = useState(false);
  const [rowData, setRowData] = useState();
  const [rowIndex, setRowIndex] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const getData = async () => {
    if (Array.isArray(data)) {
      let keys = await data[0];

      return keys && setColumns(Object.keys(keys));
    }
  };

  useEffect(() => {
    getData();
  }, [data]);

  const options = {
    selectableRowsHideCheckboxes: true,
    onRowClick: (rowData, rowMeta) => {
      let selectedRow = data[rowMeta.dataIndex];
      setOpen(true);
      setRowData(selectedRow);
      setRowIndex(rowMeta.dataIndex);
    },
  };

  return (
    <>
      <MUIDataTable
        title={
          <Typography variant="h4" color={"primary"}>
            <strong>Data List</strong>
          </Typography>
        }
        data={data}
        columns={columns}
        options={options}
      />
      <Dialog open={open} onClose={handleClose}>
        <ViewDetails
          rowData={rowData}
          setData={setData}
          handleClose={handleClose}
          data={data}
          rowIndex={rowIndex}
        />
      </Dialog>
    </>
  );
};

export default Table;
