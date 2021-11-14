import React from "react";
import styles from "./app.module.css";
import ExpenseApp from "./components/Expense/ExpenseApp";

const App = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.mainText}>Expense Tracker</h3>
      <ExpenseApp />
    </div>
  );
};

export default App;
