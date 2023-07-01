import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import SinglePage from "./page/SinglePage";
import { DataContext } from "./context/DataContext";
import Modal from "./components/Modal/Modal";
import { useContext } from "react";

function App() {
  const { isEdit, isNew } = useContext(DataContext);
  return (
    <div className="App">
      {isNew && <Modal />}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/recipe/:rId" element={<SinglePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
