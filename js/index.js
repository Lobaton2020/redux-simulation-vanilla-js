

import { App } from "./App.js";
import { reducer } from "./redux/reducer.js";
import { createStore } from "./redux/store.js";

function render(app,id) {
    id.innerHTML = ""
    id.appendChild(app)
}
function start() {
    const { dispatch, subscribe } = createStore(reducer);
    subscribe((state)=>{ // Give the redux a function to re render after every dispatch
        render(App(state, dispatch),document.querySelector("#root"))
        console.log("STATE ",state)
    })
    dispatch({})

}


document.addEventListener("DOMContentLoaded", start)