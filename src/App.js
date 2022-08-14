import "./App.css";
import {Routes, Route } from "react-router-dom";
import { Home, Result, Question,Rules,Login} from "./pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/question" element={<Question />} />
      <Route path="/result" element={<Result />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}