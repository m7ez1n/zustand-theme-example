import { Routes, BrowserRouter, Route } from "react-router-dom";

import GlobalStyles from "./styles/global";

import Home from "./pages/home";
import Status from "./pages/status";

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="status" element={<Status />} />
      </Routes>
    </BrowserRouter>
    <GlobalStyles />
  </>
);

export default App;
