import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
import "./style.css";

const Form = ({ setListTransactions }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [entrance, setEntrance] = useState("Entrada");
  const [error, setError] = useState(false)

  const transaction = {
    description: description,
    value: Number(value),
    type: entrance,
  };

  const handleTransaction = (event) => {
    event.preventDefault();
    if (transaction.value > 0) {
      setListTransactions((oldValues) => [...oldValues, transaction]);
    } else {
      return setError(true)
    }
    
    setDescription("");
    setValue("");
    setEntrance("Entrada");
  };

  return (
    <form onSubmit={handleTransaction} className="form-container">
      <div className="description-container">
        <label htmlFor="">Descrição</label>
        <input
          required
          value={description}
          className="input-value"
          type="text"
          placeholder="Ex: Pagamento do aluguel"
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <div className="value-container">
        <div className="value-aff">
          <label htmlFor="">Valor</label>
          <input
            required
            value={value}
            className="input-value"
            type="number"
            placeholder="Ex: 1500"
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
        <div className="value-aff">
          <label htmlFor="">Tipo</label>
          <select
            required
            value={entrance}
            className="input-value-option"
            name=""
            id=""
            onChange={(event) => setEntrance(event.target.value)}
          >
            <option value="Entrada">Entrada</option>
            <option value="Saida">Saída</option>
          </select>
        </div>
      </div>
      <button className="button-form">Inserir valor</button>
    </form>
  );
};

export default Form;
