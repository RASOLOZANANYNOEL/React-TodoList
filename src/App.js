import { Outlet } from "react-router-dom";
//import { Outlet, Route, Routes } from "react-router-dom"; ancienne methode
import Header from "./Components/Header/Header";// header au lieu de style
//import Tasks from "./Components/Tasks/Tasks";
//import Tasks from "./Components/Tasks/Tasks";
//import TasksContextProvider from "./Contexts/TasksContext";

//nouvelle methode avec les routes version récente!
const App = () => {


  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default App;

//ancienne méthode beaucoup utiliser en ce moment
/*const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path= "/" element= { <Tasks/>}>
        <Route path= "/about" element= { <About/>}>
        <Route path= "/about/:name" element= { <About/>}>
      </Routes>
    </>
  );
};*/



/*<PageTitle count={0} title='Task' />
      <Button  >New Task</Button>*/