import React, { useState } from "react";
import bolo from "../../assets/json/bolo.json";
import Input from "../../components/Input";
import Select from "../../components/Select";
import styles from "./Bolo.module.scss"
function Bolo() {
  const [massas, setMassas] = useState("");
  const [peso, setPeso] = useState("");
  const [cobertura, setCobertura] = useState("");
  const [recheios, setRecheios] = useState("");

  return (
    <>
      <p className={styles.subTitle}>Escolha a cobertura</p>
      <Input
        info={bolo.cobertura}
        valor={cobertura}
        setValor={setCobertura}
        type="radio"
      />
    
      <p className={styles.subTitle}>Escolha a Massa</p>
      <Input
        info={bolo.massas}
        valor={massas}
        setValor={setMassas}
        type="radio"
      />

      <Select
        label="Recheios"
        valor={recheios}
        setValor={setRecheios}
        info={bolo.recheios}
      />

      <Select label="Peso" valor={peso} setValor={setPeso} info={bolo.peso} />
    </>
  );
}

export default Bolo;
