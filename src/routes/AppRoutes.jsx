import React from "react";
import  DataGrid2  from "../components/table/DataGrid";
import  Photos  from "../components/photos";
import NestedModal from "../components/form/form";
import  NewMenu  from "../components/menu/menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const AppRoutes = () => (
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<NewMenu />}>
      <Route index element={<DataGrid2 />} />
      <Route path="photos" element={<Photos />} />
      <Route path="forms" element={<NestedModal value={['Este es un value 1', 'Este es el value 2']} />} />
    </Route>
  </Routes>
</BrowserRouter>
);

export default AppRoutes;
