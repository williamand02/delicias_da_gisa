import React, { useState } from "react";
import miniBolo from "../../assets/json/miniBolo.json";
import Input from "../../components/Input";
import Select from "../../components/Select";

function MiniBolo() {
  const [cobertura, setCobertura] = useState("");
  const [tamanho,setTamanho] = useState("");
  const [recheio, setRecheio] = useState("")
  return (
    <>
      <Select 
              label="Cobertura"
              valor={cobertura}
              setValor={setCobertura}
              info={miniBolo.cobertura}
      />
      
      {cobertura==='chantilly'&&
        <Input
        info={miniBolo.chantilly}
        valor={tamanho}
        setValor={setTamanho}
        type="radio"
        />
      }

      {cobertura==='chantininho'&&
        <Input
        info={miniBolo.chantininho}
        valor={tamanho}
        setValor={setTamanho}
        type="radio"
        />
      }
            

      <Select
        label="Recheios"
        valor={recheio}
        setValor={setRecheio}
        info={miniBolo.recheios}
      />

    </>
  );
}

export default MiniBolo;
