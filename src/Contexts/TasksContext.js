import { createContext, useReducer } from "react";

const TasksContext = createContext({
    tasksData: {
        tasks: [],
        count: 0,
    },
    addTask: (task) => { },
    removeTask: (taskIndex) => { },
    toggleTaskIsDone: ({ taskIndex, isDone }) => { },
    editTask: ({ taskIndex, task }) => { },
});

export { TasksContext };

//INITIALISATION TACHE
const INITIAL_TASKS = {
    tasks: [],
    count: 0,
};

/**CREATE REDUCER */
const tasksReducer = (state, action) => {

    /**CONDITION ADD TASK */
    if (action.type === 'ADD_TASK' && action.value) {
        const tasks = [...state.tasks, action.value];
        return {
            tasks,
            count: tasks.length,
        };
    }

    /**CONDITION REMOVE TASK */
    if (action.type === 'REMOVE_TASK' && !isNaN(+action.value)) { // et que c'est bien un nombre
        const tasks = [...state.tasks];//on met une copie du tableau
        tasks.splice(+action.value, 1) // on supprime l'élément dont l'index correspondant à action.value.+ devant action pour s'assure que c'est bien un nbre
        return {
            tasks,
            count: tasks.length,
        };
    }

    /**CONDITION EDIT TASK */
    if (action.type === 'EDIT_TASK' && action.value && !isNaN(+action.value.taskIndex)) {
        const tasks = [...state.tasks];
        tasks[+action.value.taskIndex] = {
            ...tasks[action.value.taskIndex],
            ...action.value.task //la même chose que
            //title: action.value.task.title,
            //description: action.value.task.descrption
        };
        return {
            tasks,
            count: tasks.length,
        };
    }

    /**CONDITION TOGGLE STATUS TASK */
    if (action.type === 'TOGGLE_STATUS' && action.value && !isNaN(+action.value.taskIndex)) {
        const tasks = [...state.tasks];
        tasks[+action.value.taskIndex] = {
            ...tasks[action.value.taskIndex],
            isDone: action.value.isDone
        };
        return {
            tasks,
            count: tasks.length,
        };
    }

    return state ? state : INITIAL_TASKS;
}

const TasksContextProvider = ({ children }) => {
    //Utilisation du reducer
    const [tasksData, dispatchTasks] = useReducer(tasksReducer, INITIAL_TASKS);

    const addTask = (task) => {
        dispatchTasks({ type: 'ADD_TASK', value: task });
    }

    const removeTask = (taskIndex) => {
        dispatchTasks({ type: 'REMOVE_TASK', value: taskIndex });
    };

    const editTask = ({ taskIndex, task }) => {
        dispatchTasks({ type: 'EDIT_TASK', value: { taskIndex, task } })
    }

    const toggleTaskIsDone = ({ taskIndex, isDone }) => {
        dispatchTasks({ type: 'TOGGLE_STATUS', value: { taskIndex, isDone } })
    }

    const value = {
        tasksData,
        addTask,
        removeTask,
        editTask,
        toggleTaskIsDone,
    };


    return (
        <TasksContext.Provider value={value}>
            {children}
        </TasksContext.Provider>
    );
};

export default TasksContextProvider;