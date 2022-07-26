import React from "react";
import styles from "./Input.module.scss";
type Props = {
  type: string;
  valor: any;
  setValor: any;
  info: any;
  inline?: boolean;
};
type params = {
  id: string | undefined;
  name: string | undefined;
  label: string;
};

function Input({ valor, setValor, type, info = [],inline = true}: Props) {
  return (
    <>
      {type === "radio" && (
        <div className={inline ? styles["form-group"]:styles["form-group-inline"]}>
          {info.map((item: params) => {
            return (
              <>
                <label className={styles.container}>
                  {item.label}
                  <input
                    id={item.id}
                    type={type}
                    name={item.name}
                    value={item.label}
                    required={true}
                    onChange={(evento) => setValor(evento.target.value)}
                  />
                  <span className={styles.checkmark}></span>
                </label>
              </>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Input;
