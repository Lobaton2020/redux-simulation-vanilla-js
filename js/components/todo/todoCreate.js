import { ACTIONS } from "../../redux/actions.js";

export function TodoCreate(state, dispatch) {
    const todoList = document.createElement('div');
    todoList.innerHTML = `
    <h1>Hola ${state.currentUser?.username|| 'John'}!</h1>
    <form class="row g-3">
        <div class="col-auto">
            <input type="text" placeholder="Añade una tarea" name="task">
        </div>
        <div class="col-auto">
             <button type="submit" class="btn btn-primary mb-3">Añadir</button>
        </div>
    </form>
    `;
    const handleCreate = (e) => {
        e.preventDefault();
        if(!e.target.task.value) {
            return alert("Fill the field")
        }
        e.target.task.focus()
        dispatch({
            type: ACTIONS.ADD_TODO,
            payload: {
                id: Math.floor(Math.random() * 100),
                activity: e.target.task.value,
                isDone: false
            }
        })
    }
    todoList.querySelector("form").addEventListener('submit', handleCreate)
    return todoList;
}