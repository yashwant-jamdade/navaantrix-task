import UploadFile from "./components/UploadFile";
import "./App.css";
import Typography from "@mui/material/Typography";
function App() {
  console.log("APP 1");
  return (
    <div className="App">
      <Typography
        variant="h3"
        color="primary"
        sx={{ backgroundColor: "black" }}
      >
        Navaantrix Solutions Task
      </Typography>
      <UploadFile />
    </div>
  );
}

export default App;
