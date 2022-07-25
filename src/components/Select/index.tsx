import React from "react";
import styles from "./Select.module.scss";

type Props = {
  valor: any;
  setValor: any;
  info: any;
  label: string;
};

function Select({ valor, setValor, info, label }: Props) {
  return (
    <div className={styles["form-group"]}>
      <label className={styles.label} htmlFor={label}>{label}</label>
      <div className={styles.select}>
        <select name="select" id={label} onChange={(evento) => setValor(evento.target.value)}>
          {info.map((item: { value: string; label: string }) => {
            return <option value={item.value}>{item.label}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default Select;
