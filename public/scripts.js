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
    id: 1,
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
    //somar as entradas
  },
  expenses() {
    //somar as saidas
  },
  total() {
    //entradas - saidas
  }
}

const DOM = {
  transactionsContanier: document.querySelector('#data-table tbody'),
  addTransaction(transaction, index) {
    const tr = document.createElement('tr')
    tr.inneHTML = DOM.innerHTMLTransaction(transaction)

    DOM.transactionsContanier.appendChild(tr)

    console.log(tr.innerHTML)
  },
  innerHTMLTransaction(transaction) {
    const html = `
    <tr>
              <td class="description">${transaction.description}</td>
              <td class="expense">${transaction.amount}</td>
              <td class="date">${transaction.date}</td>
              <td>
                <img src="./assets/minus.svg" alt="Remover Transação" />
              </td>
            </tr>
    `
    return html
  }
}

DOM.addTransaction(transaction[0])
DOM.addTransaction(transaction[1])
DOM.addTransaction(transaction[2])

transactions.forEach(function (transaction) {
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
