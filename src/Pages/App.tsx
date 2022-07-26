import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import styles from "./App.module.scss";
import Bolo from "./Bolo";
import MiniBolo from "./MiniBolo";

function App() {
  const [tipo, setTipo] = useState("");


  
  const tipoBolo = [
    {   
        "id":"bolo",
        "name":"tipo",
        "label":"bolo"
    },
    {   
        "id":"mini-bolo",
        "name":"tipo",
        "label":"mini bolo"
    }
  ]
  return (

    <div className={styles.App}>
      <h1 className={styles.title} >Monte seu pedido</h1>
      <p className={styles.subTitle}>Escolha o tipo de bolo</p>
        <Input 
          info={tipoBolo}
          valor={tipo}
          setValor={setTipo}
          type="radio"
        />
        {tipo === "bolo" && <Bolo />}
        {tipo === "mini bolo" && <MiniBolo />}

    </div>
  );
}

export default App;
