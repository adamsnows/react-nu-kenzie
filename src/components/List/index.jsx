import "./style.css";

import { ReactComponent as Emptycard} from "../../assets/emptycard.svg";
import Card from "../Card";
import { useState } from "react";
import FlatList from "flatlist-react";

const List = ({ listTransactions, setListTransactions }) => {
  const handleRemove = (transaction) => {
    setListTransactions((oldValues) =>
      oldValues.filter((elem) => elem !== transaction)
    );
  };
  const [filtered, setFiltered] = useState('Todos')

  const check = (param) => {
    setFiltered(param)
  }
  return (
    <div className="total-container-list">
      <div className="top-container">
        <div className="title-resume">
          <h1>Resumo Financeiro</h1>
        </div>
        <div>
          <button className="financial-button" onClick={() => check('Todos')}>Todos</button>
          <button className="financial-button" onClick={() => check('Entrada')}>Entradas</button>
          <button className="financial-button" onClick={() => check('Saida')}>Despesas</button>
        </div>
      </div>
      <FlatList 
      list={listTransactions}
      renderItem={(transaction, index) => <Card key={index} transaction={transaction} handleRemove={handleRemove} />}
      renderWhenEmpty={() => <Emptycard />}
      filterBy={card => filtered === "Todos" ? card.type !== filtered : card.type === filtered}/>
    </div>
  );
};

export default List;

