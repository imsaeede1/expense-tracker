import styles from "./overView.module.css";
import TransForm from "../TransForm/TransForm";
import { useState } from "react";

const Overview = ({ income, expense, addTransaction }) => {
  const [isShow, setIsshow] = useState(false);

  return (
    <>
      <div className={styles.containerExpense}>
        <div className={styles.containerBalnce}>
          <p>Balance: {income - expense}</p>
          <button
            onClick={() => setIsshow((prevState) => !prevState)}
            className={`${styles.btn} ${isShow && styles.cncle}  `}
          >
            {isShow ? "Cancle" : "Add"}
          </button>
        </div>
        {isShow && (
          <TransForm addTransaction={addTransaction} setIsshow={setIsshow} />
        )}
        <div className={styles.containerIncome}>
          <p className={styles.expenseBox}>
            <span>Expense :</span>{" "}
            <h4 className={styles.expenseColor}>{expense}</h4>
          </p>
          <p className={styles.expenseBox}>
            {" "}
            <span>Income :</span>{" "}
            <h4 className={styles.incomeColor}>{income}$</h4>
          </p>
        </div>
      </div>
    </>
  );
};

export default Overview;
