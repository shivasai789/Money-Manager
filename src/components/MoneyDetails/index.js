import './index.css'

const MoneyDetails = props => {
  const {BalanceAmount, IncomeAmount, ExpensesAmount} = props
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '50px',
      }}
    >
      <div
        style={{
          border: '1px solid green',
          padding: '10px',
          display: 'flex',
          justifyContent: 'center',
          width: '32%',
        }}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          style={{width: '100px', marginRight: '20px'}}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs {BalanceAmount}</p>
        </div>
      </div>
      <div
        style={{
          border: '1px solid #87CEEB',
          padding: '10px',
          display: 'flex',
          justifyContent: 'center',
          width: '32%',
        }}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
          style={{width: '100px', marginRight: '20px'}}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs {IncomeAmount}</p>
        </div>
      </div>
      <div
        style={{
          border: '1px solid #0000FF',
          padding: '10px',
          display: 'flex',
          justifyContent: 'center',
          width: '32%',
        }}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          style={{width: '100px', marginRight: '20px'}}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs {ExpensesAmount}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
