import { hoursLoad } from "../form/hours-load.js";
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";

const selectedDate = document.querySelector('#date');

export async function schedulesDay(){
    // Obtém a data do input
    const date = selectedDate.value
    
    const dailySchedules = await scheduleFetchByDay({ date });

    hoursLoad({ date });
}