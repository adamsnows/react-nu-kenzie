import cf from "../../utils/formatters/currency";

const Card = ({ transaction, handleRemove }) => {
  return (
    <div className="cards-list">
      <div
        className={`cards ${transaction.type === "Entrada" ? "greenCard" : ""}`}
      >
        <div className="card-title">
          <span className="title-card">{transaction.description}</span>
          <span className="type-card">{transaction.type}</span>
        </div>
        <div className="card-value">
          <span>{cf.format(transaction.value)}</span>
        </div>
        <div className="card-icon">
          <i
            onClick={() => handleRemove(transaction)}
            className="fa fa-trash"
            aria-hidden="true"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
