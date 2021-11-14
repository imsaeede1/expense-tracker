import { useState } from "react/cjs/react.development";
import styles from "./form.module.css";

const TransForm = ({ addTransaction, setIsshow }) => {
  const [transValue, setTransValue] = useState({
    type: "expense",
    desc: "",
    mount: 0,
  });

  const changeHndler = (e) => {
    setTransValue({ ...transValue, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(transValue);
    setIsshow(false);
  };

  return (
    <form onSubmit={submitHandler} className={styles.containerForm}>
      <input
        type="text"
        name="desc"
        onChange={changeHndler}
        value={transValue.desc}
        placeholder="description"
        className={styles.inputpadding}
      />
      <input
        type="number"
        name="mount"
        onChange={changeHndler}
        value={transValue.mount}
        placeholder="amount"
      />
      <div className={styles.radioBox}>
        <input
          type="radio"
          value="expense"
          name="type"
          onChange={changeHndler}
          checked={transValue.type === "expense"}
        />
        <label className={styles.incomepadding}>Expense</label>
        <input
          type="radio"
          value="income"
          name="type"
          onChange={changeHndler}
          checked={transValue.type === "income"}
        />
        <label>Income</label>
      </div>
      <button className={styles.btnTrans}>Add transaction</button>
    </form>
  );
};

export default TransForm;
