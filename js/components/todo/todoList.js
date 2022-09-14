import { ACTIONS } from "../../redux/actions.js";
import { useEffect } from "../../util/hooks/useEffect.js";

const useEffectTodoList = useEffect();
export function TodoList(state, dispatch) {

    useEffectTodoList(async ()=>{
        const todosListReq = await fetch('http://jsonplaceholder.typicode.com/todos')
        let todosList = await todosListReq.json()
        todosList = todosList.map(({id, title, completed})=>({ id, activity: title, isDone: completed })).slice(0,12)
        dispatch({
            type: ACTIONS.RESET_TODO,
            payload: todosList
        })
    })

    const todoList = document.createElement('div');
    const ul = document.createElement('ul');
    const handleChange = (e) => {
        dispatch({
            type:ACTIONS.CHECKED_TODO,
            payload:{
                id: e.currentTarget.id
            }
        })
    };
    const handleDelete = (e)=>{
        dispatch({
            type:ACTIONS.DELETE_TODO,
            payload:{
                id: e.currentTarget.id
            }
        })
    }
    const templateCheck = (item) => {
        const input = document.createElement("input");
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.id = item.id
        button.textContent ="Delete"
        button.addEventListener('click', handleDelete)
        input.type = "checkbox"
        input.id = item.id
        input.checked = item.isDone;
        input.addEventListener('change', handleChange)
        li.append(input)
        if(item.isDone){
            const del =document.createElement("del")
            del.innerText = item.activity
            li.append(del)
        }else{
            const span =document.createElement("span")
            span.innerText = item.activity
            li.append(span)

        }
        li.append(button)
        return li
    };
    const liList = state.todoList.map(item => templateCheck(item));
    liList.forEach(element => {
        ul.appendChild(element)
    });
    todoList.append(ul)
    return todoList;
}
