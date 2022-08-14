import './style.css'
import cf from '../../utils/formatters/currency';

const Total = ( { listTransactions } ) => {
  const value = listTransactions.reduce((acc, elem) => elem.type === 'Entrada' ? acc + Number(elem.value) : acc - Number(elem.value), 0) 
  return (
    <div className="total-container">
      <div className="left-container">
        <h1 className='total-value'>Valor total:</h1>
        <span className='total-description'>O valor refere-se ao saldo</span>
      </div>
      <div className="right-container">
        <h1 className='price'>{cf.format(value)}</h1>
      </div>
    </div>
  );
};
export default Total


