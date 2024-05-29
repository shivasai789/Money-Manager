import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  onClickCreateTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const newTransaction = {
      id: uuidv4(),
      titleInput,
      amountInput,
      optionId,
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      titleInput: '',
      amountInput: '',
    }))
  }

  onDeleteTransaction = id => {
    const {transactionsList} = this.state
    const UpdatedTransactionList = transactionsList.filter(
      item => item.id !== id,
    )
    this.setState({transactionsList: UpdatedTransactionList})
  }

  onUpdateTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onUpdateAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onUpdateType = event => {
    this.setState({optionId: event.target.value})
  }

  getIncome = () => {
    let income = 0
    const {transactionsList} = this.state
    transactionsList.forEach(eachItem => {
      if (eachItem.optionId === 'INCOME') {
        income = Number(income) + Number(eachItem.amountInput)
      }
    })
    return income
  }

  getExpenses = () => {
    let expenses = 0
    const {transactionsList} = this.state
    transactionsList.forEach(eachItem => {
      if (eachItem.optionId === 'EXPENSES') {
        expenses = Number(expenses) + Number(eachItem.amountInput)
      }
    })
    return expenses
  }

  getBalance = () => {
    let balance = 0
    let expenses = 0
    let income = 0
    const {transactionsList} = this.state
    transactionsList.forEach(eachItem => {
      if (eachItem.optionId === 'INCOME') {
        income += eachItem.amountInput
      } else {
        expenses += eachItem.amountInput
      }
    })
    balance = income - expenses
    return balance
  }

  render() {
    const {titleInput, amountInput, transactionsList} = this.state
    const BalanceAmount = this.getBalance()
    const IncomeAmount = this.getIncome()
    const ExpensesAmount = this.getExpenses()

    console.log(IncomeAmount, 'BalanceAmount')
    return (
      <div className="bg-container">
        <div className="header-container">
          <div style={{paddingTop: '70px', paddingLeft: '50px'}}>
            <h1>Hi, Richard</h1>
            <p style={{marginTop: '20px'}}>
              Welcome back to your{' '}
              <span style={{color: 'blue'}}>Money Manager</span>
            </p>
          </div>
          <MoneyDetails
            BalanceAmount={BalanceAmount}
            IncomeAmount={IncomeAmount}
            ExpensesAmount={ExpensesAmount}
          />
          <div style={{display: 'flex', marginTop: '15px'}}>
            <div
              style={{width: '40%', padding: '15px', border: '1px solid black'}}
            >
              <h1>Add Transactions</h1>
              <form onSubmit={this.onClickCreateTransaction}>
                <label htmlFor="title">TITLE</label>
                <input
                  type="text"
                  id="title"
                  placeholder="TITLE"
                  value={titleInput}
                  onChange={this.onUpdateTitle}
                />
                <br />
                <label htmlFor="amount">AMOUNT</label>
                <input
                  type="number"
                  id="amount"
                  placeholder="AMOUNT"
                  value={amountInput}
                  onChange={this.onUpdateAmount}
                />
                <br />
                <label htmlFor="selector">TYPE</label>
                <select id="selector" onChange={this.onUpdateType}>
                  {transactionTypeOptions.map(eachOption => (
                    <option
                      key={eachOption.optionId}
                      value={eachOption.optionId}
                    >
                      {eachOption.displayText}
                    </option>
                  ))}
                </select>
                <br />
                <button type="submit">Add</button>
              </form>
            </div>
            <div
              style={{width: '60%', padding: '15px', border: '1px solid black'}}
            >
              <h1 style={{marginBottom: '10px'}}>History</h1>
              <ul style={{border: '1px solid black'}}>
                <li style={{display: 'flex', justifyContent: 'space-between'}}>
                  <p>Title</p>
                  <p>Amount</p>
                  <p>Type</p>
                  <p style={{color: 'white'}}>Delete</p>
                </li>
                {transactionsList.map(eachItem => (
                  <TransactionItem
                    key={eachItem.id}
                    transactionDetails={eachItem}
                    onDeleteTransaction={this.onDeleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
