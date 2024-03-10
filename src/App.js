import Header from "./Components/Header/Header";// header au lieu de style
import Tasks from "./Components/Tasks/Tasks";
import TasksContextProvider from "./Contexts/TasksContext";

const App = () => {


  return (
    <>
      <Header />
      <TasksContextProvider>
        <section className='container' style={{ position: 'relative' }}>
          <Tasks />
        </section>
      </TasksContextProvider>
    </>
  );
};

export default App;

/*<PageTitle count={0} title='Task' />
      <Button  >New Task</Button>*/