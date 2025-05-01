import React from "react";
import Header from "./components/Header";
import Filternav from "./pages/Filternav";
import Listalljobs from "./components/Listalljobs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Applypage from "./pages/Applypage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        
        <Route
          path="/"
          element={
            <>
              <Filternav />
              <Listalljobs />
            </>
          }
        />
        <Route
          path="/jobs"
          element={
            <>
              <Filternav />
              <Listalljobs />
            </>
          }
        />

        
        <Route path="/apply/:id" element={<Applypage />} />

        
        <Route path="/location/:city" element={<Listalljobs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
