import Total from "../Total";
import Header from "../Header";
import Form from "../Form";
import List from "../List";
import "./style.css";

const Dashboard = ({ setButton, setListTransactions, listTransactions }) => {
  return (
    <div className="body">
      <div className="dashboard-header">
        <Header setButton={setButton} />
      </div>
      <div className="dashboard-form">
        <div>
          <Form setListTransactions={setListTransactions} />
          <Total listTransactions={listTransactions} />
        </div>
        <div className="dashboard-total">
          <List listTransactions={listTransactions} setListTransactions={setListTransactions}/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
