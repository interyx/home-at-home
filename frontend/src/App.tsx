import React from "react";
import { NextUIProvider } from "@nextui-org/react"
import NavigationBar from "./components/NavigationBar"
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./routes/home"
import Inventory from "./features/inventory/routes/inventory";

function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <div className="min-h-dvh m-0 p-0">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </div>
    </NextUIProvider>
  )
}

export default App;
