import { hoursLoad } from "../form/hours-load.js";

const selectedDate = document.querySelector('#date');

export function schedulesDay(){
    // Obtém a data do input
    const date = selectedDate.value

    hoursLoad({ date });
}