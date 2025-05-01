import React from "react";
import Header from "./components/Header";
import Filternav from "./pages/Filternav";
import Listalljobs from "./components/Listalljobs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Applypage from "./pages/Applypage";
import ParentComponent from "./components/Parentcomponent";
import AboutUs from "./pages/Aboutus";
import Testimonials from "./pages/testimonials";
import FindTalent from "./pages/Findtalents";
import FindJobs from "./pages/findjobs";

function App() {
  return (
    <>
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
          <Route path="/apply/:id" element={<Applypage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/find-talent" element={<FindTalent />} />
          <Route path="/findjobs" element={<FindJobs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
