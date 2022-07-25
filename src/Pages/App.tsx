import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import styles from "./App.module.scss";
import Bolo from "./Bolo";
import MiniBolo from "./MiniBolo";

function App() {
  const [tipo, setTipo] = useState("");

  function enviarPedido(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    alert("Enviar")
  }
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
      <form className={styles.form} onSubmit={enviarPedido}>
        <Input 
          info={tipoBolo}
          valor={tipo}
          setValor={setTipo}
          type="radio"
        />
        {tipo === "bolo" && <Bolo />}
        {tipo === "mini bolo" && <MiniBolo />}
        <Button>Enviar</Button>

        {/* {tipo === "mini bolo" && (
          <>
            <p>observação: somente recheios com mousse</p>
            <h2>Formas de pagamento:</h2>
            Para confirmar seu pedido sera necessario 50% de entrada. O restante
            no momento da retirado. Entrada: pix ( comprovante) deposito
            (comprovante)
          </>
        )} */}
      </form>
    </div>
  );
}

export default App;
