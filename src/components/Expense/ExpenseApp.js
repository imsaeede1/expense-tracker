import { useState, useEffect } from "react";
import styles from "./expenseApp.module.css";
import TransAction from "../Transaction/TransAction";
import Overview from "../Overview/Overview";

const ExpenseApp = () => {
  const [expense, setExpence] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transValue) => {
    const data = { ...transValue, id: Date.now() };
    setTransactions([...transactions, data]);
  };

  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transactions.forEach((t) =>
      t.type === "expense"
        ? (exp = exp + parseFloat(t.mount))
        : (inc = inc + parseFloat(t.mount))
    );
    setExpence(exp);
    setIncome(inc);
  }, [transactions]);

  return (
    <div className={styles.containerExpense}>
      <Overview
        income={income}
        expense={expense}
        addTransaction={addTransaction}
      />
      <TransAction transactions={transactions} />
    </div>
  );
};

export default ExpenseApp;
