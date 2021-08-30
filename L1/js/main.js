import { printError } from "./output.js";

const form = document.getElementById('calcDate');

form.onsubmit = function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const dateFrom = formData.get('dateFrom');
    const dateTo = formData.get('dateTo');

    if (!dateFrom || !dateTo) {
        printError('Error');
    };
}