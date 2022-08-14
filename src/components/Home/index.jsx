import logo from "../../assets/logo.png";
import img from "../../assets/img.png"
import "./style.css";

const Home = ({ setButton }) => {
    
  return (
    <div className="geral-container">
      <div className="start-left-container">
        <img className="img-logo" src={logo} alt="" />
        <h1>Centralize o controle das suas finanças.</h1>
        <span>de forma rápida e segura</span>
        <button className="button-start" onClick={() => setButton(true)}>Iniciar</button>
      </div>
      <div className="start-right-container">
        <figure>
          <img src={img} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default Home;
