const TransactionItem = props => {
  const {transactionDetails, onDeleteTransaction} = props
  const {id, titleInput, amountInput, optionId} = transactionDetails

  const onClickDeleteItem = () => {
    onDeleteTransaction(id)
  }
  return (
    <li style={{display: 'flex', justifyContent: 'space-between'}}>
      <p>{titleInput}</p>
      <p>{amountInput}</p>
      <p>{optionId}</p>
      <button type="button" onClick={onClickDeleteItem} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
          alt="delete"
          style={{height: '18px'}}
        />
      </button>
    </li>
  )
}

export default TransactionItem
