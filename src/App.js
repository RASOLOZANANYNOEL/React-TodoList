//import { Outlet } from "react-router-dom"; //nouvelle methode
import { Route, Routes } from "react-router-dom"; //ancienne methode
import About from "./Components/About/About";
import Header from "./Components/Header/Header";// header au lieu de style
import Tasks from "./Components/Tasks/Tasks";
import Api from "./Components/Api/Api";
//import TasksContextProvider from "./Contexts/TasksContext";

//ancienne méthode beaucoup utiliser en ce moment
const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/:name" element={<About />} />
        <Route path="/api" element={<Api />} />
      </Routes>
    </>
  );
};

export default App;

//nouvelle methode avec les routes version récente!
/*const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};*/


