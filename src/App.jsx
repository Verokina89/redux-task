import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask } from './redux/todosSlice'

const App = () => {
  //stado local que maneja el input
  const[task,setTask] = useState('')
  //acceder al edo global
  const tasks = useSelector((state) => state.todos.tasks)
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() !== '') {
      //llmar a la accion que agrega una tarea
      dispatch(addTask(task));
      //limpiar input
      setTask('') ; 
    }
  };

  const handleRemoveTask = (i) => {
    //llama a la accion que elimina la tarea
    dispatch(removeTask(i)) 
  }

  return (
    <>
    <div className="card">
      <input 
      type="text" 
      value={task}
      onChange={(e) => setTask(e.target.value)}
      placeholder="Escribe aqui una TAREA"
      />
      <button onClick={handleAddTask} >Agregar Tarea</button>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>
            {task}{' '}
            <button onClick={() => handleRemoveTask(i)}>Eliminar Tarea</button>
          </li>
        ))}
      </ul>
    </div>
    <h1>Lista de Tareas</h1>
    </>
  );
};

export default App;
