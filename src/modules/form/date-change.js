import { schedulesDay } from '../schedules/load'

const selectedDate = document.getElementById('date');

import dayjs from "dayjs";
selectedDate.onchange = () => schedulesDay();