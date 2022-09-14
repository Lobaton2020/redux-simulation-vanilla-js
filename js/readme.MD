# Redux Javascript example - FLUX Pattern

The patter FLUX allows to create a communication unidirectinal.

     Action -> Dispatcher -> Store -> View
In this exmple of code, I'm trying to simulate the redux library:

* **js/redux/actions.js**: Allow define the diferentes operations over the state global in this case I just have to properties in the global state:
    * The current user
    * The to-do List
* **js/redyx/store.js**: Here we manage the global state, I create a function to manipulate the state. The functions allows access to the state, subscribe to any change, and dispatch new changes. At the moment we dispatch a new change,a and all the app will rendered.
    ```js
    const initialStateE = {
    currentUser: {},
    todoList: []
    };

    export function createStore(reducer, initialState = initialStateE) {

        if (typeof initialState != "object") {
            throw new Error("Bad initialState, It expect an object")
        }

        let state = initialState;
        let updater = [];

        function dispatch(data) {
            state = reducer(state, data)
            updater.forEach(fn => fn(state))
        }

        function subscribe(listener) {
            updater = [...updater, listener]
        }

        function getState() {
            return JSON.parse(JSON.stringify(state))
        }

        return {
            dispatch,
            subscribe,
            getState
        }
    }
    ```
* **js/components/../..js** This folder will contains all the views or functions that returns html elements to render on the app.


