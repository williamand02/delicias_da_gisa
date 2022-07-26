import React, { useState } from "react";
import bolo from "../../assets/json/bolo.json";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";
import styles from "./Bolo.module.scss";


function Bolo() {
  const [massa, setMassa] = useState("");
  const [peso, setPeso] = useState("");
  const [cobertura, setCobertura] = useState("");
  const [recheios, setRecheios] = useState("");

  const url = "https://api.whatsapp.com/send?phone=";
  const telefone = "5562993313660";
  
  const msg = mensagem();
  
  
  function enviarPedido(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    alert("Enviar Bolo")
  }
  function validaFormulario(){
    return false;
  }
  function mensagem(){
    const lineFeed ="%0A";
    const textTipo = "Gostaria de pedir um Bolo."
    const textCobertura = "• cobertura sabor "+ cobertura;
    const textMassas = "• massa do bolo de sabor "+ massa;
    const textRecheios = "• recheios sabor " + recheios;
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
        info={bolo.cobertura}
        valor={cobertura}
        setValor={setCobertura}
        type="radio"
      />

      <p className={styles.subTitle}>Escolha a Massa</p>
      <Input
        info={bolo.massa}
        valor={massa}
        setValor={setMassa}
        type="radio"
      />

      <Select
        label="Recheios"
        valor={recheios}
        setValor={setRecheios}
        info={bolo.recheios}
      />

      <Select 
        label="Peso" 
        valor={peso} 
        setValor={setPeso} 
        info={bolo.peso} 
      />
      {/* <Button type="button">Enviar</Button> */}
      {
      validaFormulario() ?
        <a className={styles.button} href={url+telefone+msg} target="_blank" rel="noreferrer">Enviar</a>
        :
        <a className={styles.buttonDisabled} onClick={(e)=>e.preventDefault()}>Enviar</a>
      
      }
    </form>
  );
}

export default Bolo;
