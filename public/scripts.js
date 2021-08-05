const Modal = {
  open() {
    //Abrir o modal
    //Adicionar a clall active ao modal
    document.querySelector('.modal-overlay').classList.add('active')
  },
  close() {
    //fechar o modal
    //Remover a class active do modal
    document.querySelector('.modal-overlay').classList.remove('active')
  }
}

const Transactions = [
  {
    id: 1,
    description: 'luz',
    amount: -50000,
    date: '23/01/2021'
  },
  {
    id: 2,
    description: 'website',
    amount: -500000,
    date: '23/01/2021'
  },
  {
    id: 3,
    description: 'internet',
    amount: -20000,
    date: '23/01/2021'
  },
  {
    id: 4,
    description: 'app',
    amount: 200000,
    date: '23/01/2021'
  }
]

//eu preciso somar as entradas
//depois eu preciso somar as saidas e
//remover das entradas o valor das saidas
//assim, eu erei o tatal

const Transaction = {
  incomes() {
    return 'cheguei'
  },
  expenses() {
    return 'Aqui'
  },
  total() {
    return 'Discover'
  }
}

const DOM = {
  transactionsContainer: document.querySelector('#data-table tbody'),
  addTransaction(transaction, index) {
    const tr = document.createElement('tr')
    tr.innerHTML = DOM.innerHTMLTransaction(transaction)

    DOM.transactionsContainer.appendChild(tr)
  },
  innerHTMLTransaction(transaction) {
    const CSSclass = transaction.amount > 0 ? 'income' : 'expense'

    const amount = Utils.formatCurrency(transaction.amount)

    const html = `
    <tr>
              <td class="description">${transaction.description}</td>
              <td class="${CSSclass}">${amount}</td>
              <td class="date">${transaction.date}</td>
              <td>
                <img src="./assets/minus.svg" alt="Remover Transação" />
              </td>
            </tr>
    `
    return html
  },

  updateBalace() {
    document.getElementById('iconmeDispaly').innerHTML = ' soma das entradas'
    document.getElementById('expenseDispaly').innerHTML = ' soma das saidas'
    document.getElementById('totalDispaly').innerHTML = 'total'
  }
}

const Utils = {
  formatCurrency(value) {
    const signal = Number(value) < 0 ? '-' : ''

    value = String(value).replace(/\D/g, '')

    value = Number(value) / 100

    value = value.tolocalString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })

    return sinal + value
  }
}

Transactions.forEach(function (transaction) {
  DOM.addTransaction(transaction)
})

const inputFile = window.document.getElementById('input-image')
let pickImage = window.document.getElementById('image-change')

inputFile.addEventListener('change', event => {
  function toDataUrl(url, callback) {
    var xhr = new XMLHttpRequest()
    xhr.onload = function () {
      var reader = new FileReader()
      reader.onloadend = function () {
        callback(reader.result)
      }
      reader.readAsDataURL(xhr.response)
    }
    xhr.open('GET', url)
    xhr.responseType = 'blob'
    xhr.send()
  }

  pickImage
  console.log({
    event: event.target.value
  })
})
