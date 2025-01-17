import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Preventivos } from "../pages/Preventivos";
import { Niebla } from "../pages/Niebla";

import { Alarmas } from "../pages/manuales/Alarmas";
import { Cctv } from "../pages/manuales/Cctv";
import { Cerraduras } from "../pages/manuales/Cerraduras";
import { ControlAcceso } from "../pages/manuales/ControlAcceso";
import { Mniebla } from "../pages/manuales/Mniebla";

import { Aperturas } from "../pages/Aperturas";
import { Remodelacion } from "../pages/Remodelacion";
import { Cierres } from "../pages/Cierres";
import { Extras } from "../pages/Extras";

import { Salidas } from "../pages/Salidas";
import { Enviado } from "../pages/Enviado";

import { Llamadas } from "../pages/Llamadas";
import { Unidad } from "../pages/Unidad";
import { Administracion } from "../pages/Administracion";

export function MyRoutes() {
  return (
    <BrowserRouter basename="/Sidebar">
      <Routes>
        {/* Inicio */}
        <Route path="/" element={<Home />} />
        
        {/* Geografia */}
        <Route path="/niebla" element={<Niebla />} />
        <Route path="/preventivos" element={<Preventivos />} />

        {/* Expansion */}
        <Route path="/aperturas" element={<Aperturas />} />
        <Route path="/remodelacion" element={<Remodelacion />} />
        <Route path="/cierres" element={<Cierres />} />
        <Route path="/extras" element={<Extras />} />            

        {/* Componentes */}
        <Route path="/salidas" element={<Salidas />} />
        <Route path="/enviado" element={<Enviado />} />

        {/* Manuales */}
        <Route path="/alarmas" element={<Alarmas />} />
        <Route path="/cctv" element={<Cctv />} />
        <Route path="/cerraduras" element={<Cerraduras />} />
        <Route path="/controlAcceso" element={<ControlAcceso />} />
        <Route path="/mniebla" element={<Mniebla />} />

        <Route path="/llamadas" element={<Llamadas />} />
        <Route path="/unidad" element={<Unidad />} />        
        <Route path="/administracion" element={<Administracion />} />
      </Routes>
    </BrowserRouter>
  );
}