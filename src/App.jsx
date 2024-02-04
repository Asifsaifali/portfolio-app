import "./index.css";
import "./App.css";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import { Box } from "@mui/material";

const style = {
  minHeight: "100vh",
};

function App() {
  return (
    <Box sx={style} className="bg-blue text-white">
      <Box height={"10vh"}>
        <Header></Header>
      </Box>
      <Box>
        <Home></Home>
      </Box>
    </Box>
  );
}

export default App;
