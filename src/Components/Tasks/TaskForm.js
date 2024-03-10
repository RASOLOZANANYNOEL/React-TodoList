import { useContext, useState } from "react";
import { TasksContext } from "../../Contexts/TasksContext";
import Button from "../UI/Button/Button";
import TextField from "../UI/Forms/TextField";
import TextareaField from "../UI/Forms/TextareaField";

const TaskForm = ({ closeModal, value, index }) => {

    const [formValue, setFormValue] = useState(value ? value : {//si value existe alors on met la valeur sinon on met la valeur par défaut
        title: '',
        description: '',
    });

    const [invalidFields, setInvalidFields] = useState([]);

    const { addTask, editTask } = useContext(TasksContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Empêcher la soumission / La création d'une tâche s'il y a des erreurs
        if (invalidFields.length > 0) {
            alert('There are errors in the form.');
            return;
        }

        if (value && !isNaN(+index)) {//si on a une value en props => Modification et si on un index qui n'est pas un nbre
            editTask({ task: formValue, taskIndex: index });// on est en edition de task
        } else {// Sinon => Création
            addTask({
                ...formValue,
                createdAt: new Date(),
                isDone: false,
            });
        }

        closeModal();
    }

    const handleError = (error) => { // {name, error}

        const invalidFieldsCopy = [...invalidFields];
        //On récupère l'index d'un éventuel champs invalide enregistré dans le tableau.
        const invalidFieldIndex = invalidFieldsCopy.findIndex(field => field === error.name);

        if (error.error) {// Si une erreur est renvoyée

            if (invalidFieldIndex === -1) { //Si le champs n'est pas enregistré comme invalide, on l'ajoute au tableau
                setInvalidFields([...invalidFieldsCopy, error.name]);
            }
            // sinon, il est déjà enregistré , on ne fait rien

        } else { // Si aucune erreur n'est renvoyée

            if (invalidFieldIndex !== -1) {// Mais que le champs est enregistré comme invalide, on le supprime du tableau 
                invalidFieldsCopy.splice(invalidFieldIndex, 1);
                setInvalidFields(invalidFieldsCopy);
            }
            // Si le champs n'est pas enregistré, on ne fait rien.
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                name='title'
                placeholder='New task title'
                label='Title'
                value={formValue.title}
                onChange={(value) => setFormValue({ ...formValue, title: value })}
                validation={{
                    required: true,
                    type: 'string',
                    minLength: 2,
                    maxLength: 25
                }}
                onError={handleError}
            />
            <TextareaField
                name='description'
                placeholder='Write your description here...'
                label='Description'
                value={formValue.description}
                onChange={(value) => setFormValue({ ...formValue, description: value })}
                validation={{
                    required: false,
                    type: 'string',
                    maxLength: 100
                }}
                onError={handleError}
            />
            <Button type='submit'>Save</Button>

        </form>
    );
};

export default TaskForm;