import { useContext, useState } from "react";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import PageTitle from "../UI/PageTitle/PageTitle";
import TaskForm from "./TaskForm"
import style from "./Tasks.module.css";
import TasksTable from "./TasksTable/TasksTable";
import { TasksContext } from "../../Contexts/TasksContext";

const Tasks = () => {

    const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);

    const { tasksData } = useContext(TasksContext);

    return (
        <>
            <div className={style['tasks-header']}>
                <PageTitle count={tasksData.count} title={`Task${tasksData.count > 1 ? 's' : ''}`} />
                <Button onClick={() => setIsNewTaskModalOpen(true)}>New Task</Button>
            </div>
            <TasksTable />
            <Modal isOpen={isNewTaskModalOpen} setIsOpen={setIsNewTaskModalOpen}>
                <TaskForm closeModal={() => setIsNewTaskModalOpen(false)} />
            </Modal>

        </>
    );
};

export default Tasks;