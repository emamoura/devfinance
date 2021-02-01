const buttonModal = document.querySelector('.button.new');
const modal = document.querySelector('.modal-overlay');
const buttonCancel = document.querySelector('.button.cancel');

buttonModal.addEventListener('click', () => {
    modal.classList.add('active');
});
buttonCancel.addEventListener('click', () => {
    modal.classList.remove('active');
});

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021'
    },
    {
        id: 2,
        description: 'Website',
        amount: 5000000,
        date: '23/01/2021'
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021'
    }
];

const Transaction = {
    incomes() {
        // sum the incomes
    },
    expenses() {
        // sum the expenses
    },
    total() {
        // incomes() - expenses()
    }
}


const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),
    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransction(transaction);

        DOM.transactionsContainer.appendChild(tr);
    },
    innerHTMLTransction(transaction) {

        const CSSclasses = transaction.amount > 0 ? 'income' : 'expense'; 
        const amount = Utils.formatCurrency(transaction.amount);
        const html = `
            <td class="description">${transaction.description}</td>
            <td class="${CSSclasses}">${amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover transação">
            </td>
        `
        return html;
    }
}

const Utils = {
    formatCurrency(value){
        const signal = Number(value) < 0 ? '-' : '';

        value = String(value).replace(/\D/g, '');

        value = Number(value) / 100;

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

        return signal+value;    
    }
}

transactions.forEach((transaction) => {
    DOM.addTransaction(transaction);
})

