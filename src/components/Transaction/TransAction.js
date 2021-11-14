import styles from "./transaction.module.css";

const Transaction = ({ transactions }) => {
  return (
    <div>
      {transactions.length &&
        transactions.map((t) => (
          <div
            key={t.id}
            className={styles.trans}
            style={{ borderRight: t.type === "expense" && "4px solid red" }}
          >
            <span> {t.desc}</span>
            <span> {t.mount}</span>
          </div>
        ))}
    </div>
  );
};

export default Transaction;
