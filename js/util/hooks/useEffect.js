// Function to be called just one time
export function useEffect(){
    let hasBeenCalled = false;
    return (fn)=>{
        if(!hasBeenCalled){
            hasBeenCalled = true;
            /**
             * This use of setTimeout is because this funcion call to the dispatcher
             * The flow: First must call the disparcher on the index.js and after call the dispatcher of every component
             * With setTime out the funcion is async then will be exetuted at the end, of the call stack
             * It is bisare for the flow but the languaje works with this way.
            */
            setTimeout(fn, 0);
        }
    }
}