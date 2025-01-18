import dayjs from "dayjs";

const form = document.querySelector('form');
const clientName = document.querySelector('#client')
const selectedDate = document.querySelector('#date');

const inputToday = dayjs(new Date()).format('YYYY-MM-DD');

selectedDate.value = inputToday;

selectedDate.min = inputToday;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    try {
        const name = clientName.value.trim();

        if(!name) {
            return alert ("Informe o nome do cliente.");
        }

        const hourSelected = document.querySelector('.hour-selected');

        if(!hourSelected) {
            return alert("Selecione um horário.");
        }

        const [hour, minute] = hourSelected.innerText.split(":");

        const when = dayjs(selectedDate.value).add(hour, "hour");

        const id = new Date().getTime();

        console.log({
            id,
            name,
            when
        })
    } catch (error) {
        alert("Não foi possível enviar o horário selecionado");
        console.log(error);
    }
})