import './index.css'

const HistoryList = props => {
  const {details, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = details
  const onDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="history-list">
      <p>{timeAccessed}</p>
      <div className="sub-row">
        <img src={logoUrl} alt="domain logo" />
        <div className="title-container">
          <h1 className="heading">{title}</h1>
          <p className="doamin"> {domainUrl} </p>
        </div>
        <button type="button" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-button"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryList
