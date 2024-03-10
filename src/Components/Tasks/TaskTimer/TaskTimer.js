import Button from "../../UI/Button/Button";
import style from './TaskTimer.module.css';
import useTimeParser from "../../../Hooks/useTimeParser";
import useTimer from "../../../Hooks/useTimer";
import { useContext, useEffect } from "react";
import { TasksContext } from "../../../Contexts/TasksContext";


const TaskTimer = ({ index, onCloseModal }) => {

    const { time, startTimer, stopTimer } = useTimer();

    const { parseSecondsToHMS } = useTimeParser();

    const { editTask } = useContext(TasksContext);

    useEffect(() => {// eslint-disable-next-line
        startTimer();

        return () => { // componentWillUnmount
            /*console.log('DESTROYED');*/
            stopTimer();
        }// eslint-disable-next-line
    }, [])

    const handleStopTimer = () => {
        const savedTime = stopTimer();
        editTask({ taskIndex: index, task: { time: savedTime } });
        onCloseModal();
    }

    return (
        <div className={style['timer-container']}>
            <p className={style.timer}>{parseSecondsToHMS(time)}</p>
            <Button onClick={handleStopTimer}>Stop</Button>
        </div>
    );
}

export default TaskTimer;