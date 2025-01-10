import { controls } from './elements.js';
import * as actions from './actions.js'
import * as el from './elements.js'

export function registrar() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != "function") {
            return
        }
        actions[action]()
    })
}

export function setarMinutos() {
 el.minutes.addEventListener('focus', () => {
    el.minutes.textContent = ""
 })
}