import React from "react";
import styles from "./Input.module.scss";
type Props = {
  type: string;
  valor: any;
  setValor: any;
  info: any;
};
type params = {
  id: string | undefined;
  name: string | undefined;
  label: string;
};

function Input({ valor, setValor, type, info = [] }: Props) {
  return (
    <>
      {type === "radio" && (
        <div className={styles["form-group"]}>
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
