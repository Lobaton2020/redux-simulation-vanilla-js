import { TodoCreate } from "./components/todo/todoCreate.js";
import { TodoList } from "./components/todo/todoList.js";
import { Admin } from "./components/admin.js";



export function App(state, dispatch){
    const wrapper = document.createElement('div');
    wrapper.append(TodoCreate(state, dispatch))
    wrapper.append(TodoList(state, dispatch))
    wrapper.append(Admin(state, dispatch))
    return wrapper;
}