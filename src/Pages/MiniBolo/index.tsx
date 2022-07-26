import React, { useState } from "react";
import miniBolo from "../../assets/json/miniBolo.json";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";
import styles from "./MiniBolo.module.scss";

function MiniBolo() {
  const [cobertura, setCobertura] = useState("");
  const [peso, setPeso] = useState("");
  const [recheio, setRecheio] = useState("");
  const [massa, setMassa] = useState("");

  const url = "https://api.whatsapp.com/send?phone=";
  const telefone = "5562993313660";
  
  const msg = mensagem();
  
  function enviarPedido(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    alert("Enviar Bolo")
  }
  function mensagem(){
    const lineFeed ="%0A";
    const textTipo = "Gostaria de pedir um Bolo."
    const textCobertura = "• cobertura sabor "+ cobertura;
    const textMassas = "• massa do bolo de sabor "+ massa;
    const textRecheios = "• recheios sabor " + recheio;
    const textPeso = "• pesando "+ peso+"Kg";

    return `&text=
    ${textTipo}${lineFeed}
    ${textCobertura}${lineFeed}
    ${textMassas}${lineFeed}
    ${textRecheios}${lineFeed}
    ${textPeso}${lineFeed}
    `
  }

  return (
    <form className={styles.form} onSubmit={enviarPedido}>
      <p className={styles.subTitle}>Escolha a cobertura</p>
      <Input
        info={miniBolo.cobertura}
        valor={cobertura}
        setValor={setCobertura}
        type="radio"
      />

      {cobertura === "chantilly" && (
        <Input
          info={miniBolo.chantilly}
          valor={peso}
          setValor={setPeso}
          type="radio"
          inline={false}
        />
      )}

      {cobertura === "chantininho" && (
        <Input
          info={miniBolo.chantininho}
          valor={peso}
          setValor={setPeso}
          type="radio"
          inline={false}
        />
      )}

      <p className={styles.subTitle}>Escolha a Massa</p>
      <Input
        info={miniBolo.massas}
        valor={massa}
        setValor={setMassa}
        type="radio"
      />

      <Select
        label="Recheios"
        valor={recheio}
        setValor={setRecheio}
        info={miniBolo.recheios}
      />

      {/* {tipo === "mini bolo" && (
          <>
            <p>observação: somente recheios com mousse</p>
            <h2>Formas de pagamento:</h2>
            Para confirmar seu pedido sera necessario 50% de entrada. O restante
            no momento da retirado. Entrada: pix ( comprovante) deposito
            (comprovante)
          </>
        )} */}
      <Button>Enviar</Button>
      <a href={url+telefone+msg} target="_blank" rel="noreferrer">what</a>
    </form>
  );
}

export default MiniBolo;
