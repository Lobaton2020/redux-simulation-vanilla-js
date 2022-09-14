import { ACTIONS } from "../redux/actions.js";
import { useEffect } from '../util/hooks/useEffect.js'
const useEffectAdmin = useEffect()
export function Admin(state, dispatch) {

    useEffectAdmin(() => {
        dispatch({
            type: ACTIONS.SET_CURRENT_USER,
            payload: {
                email: "andresppepa@jaja.co",
                id: "XNUMBER",
                username: "Andre Lobaton"
            }
        })

    })
    const handleClick = () => {
        dispatch({ type: ACTIONS.RESET_TODO })
    };
    const admin = document.createElement('div');
    const button = document.createElement('button');
    button.textContent = "Reset todo"
    button.addEventListener("click", handleClick)
    admin.innerHTML = `<h3>Admin managr :${state.currentUser.username}</h3>`
    admin.append(button)
    return admin;
}
