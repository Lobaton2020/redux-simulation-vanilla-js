import { ACTIONS } from "./actions.js"

/**
 * action = { payload, type }
*/
export function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return {
                ...state,
                todoList: [...state.todoList, action.payload]
            }

        case ACTIONS.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case ACTIONS.DELETE_TODO:
            const newTodoList = state.todoList.filter(e => e.id != action.payload.id)
            return {
                ...state,
                todoList: newTodoList
            }

        case ACTIONS.CHECKED_TODO:
            const changeStatus = e => {
                if (e.id == action.payload.id) {
                    e.isDone = !e.isDone;
                }
                return { ...e }
            }
            const editedTodoList = state.todoList.map(changeStatus)
            return {
                ...state,
                todoList: editedTodoList
            }
        case ACTIONS.RESET_TODO:
            return {
                ...state,
                todoList: action.payload ? action.payload : []
            }
        default:
            return state
    }
}
