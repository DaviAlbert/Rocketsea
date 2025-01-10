import state from './state.js'
import * as events from './events.js'
import * as timer from './timer.js'

export function start(minutos, segundos){
    state.minutos = minutos
    state.segundos = segundos

    timer.updateDisplay()
    events.registrar()
    events.setarMinutos()

}