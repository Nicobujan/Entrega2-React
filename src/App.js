import NavBar from "./components/NavBar/NavBar.jsx";
import DetallesItem from "./components/DetallesItem/DetallesItem";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";



function App() {
  return (
    <BrowserRouter>
      <NavBar />
        
      <Routes>

        <Route path="/" element={<ItemListContainer />} />

        <Route path="/category/:categoryid" element={<ItemListContainer />} />

        <Route path="/item/:itemid" element={<DetallesItem />} />

        {/* <Route path="/contacto" element={<h1>Conctacto</h1>} /> */}

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;