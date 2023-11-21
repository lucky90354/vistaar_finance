import React, {useState} from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import AccountType from "./components/AccountType";
import AppAllocation from "./components/AppAllocation";
import OrderTracking from "./components/Ordertracking";
import IdDocument from "./components/IdDocument";
import PanVerification from "./components/PanVerification";
import Congratulations from "./components/Congratulations";

import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import "./style/Index.css";

function App() {
	const [navVisible, showNavbar] = useState(false);

	return (
    <BrowserRouter>
      <div className="App">
        <Navbar visible={navVisible} show={showNavbar} />
        <Routes>
          <Route path="/" element={<Navigate to="/" />} />

          <Route path="/welcome" element={<Welcome />} />

          <Route path="/Home" element={<Home />} />

          <Route path="/accounttype" element={<AccountType />} />

          <Route path="/appallocation" element={<AppAllocation />} />

          <Route path="/ordertracking" element={<OrderTracking />} />

          <Route path="/IdDocument" element={<IdDocument />} />

          <Route path="/PanVerification" element={<PanVerification />} />

          <Route path="/Congratulations" element={<Congratulations />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
