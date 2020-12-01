import React from "react";
import PropTypes from "prop-types";
import s from "./Transaction.module.css";

const TransactionTab = ({id, type, amount, currency}, i) => {
  const trClassName = i % 2 === 1 ? s.grey : s.white;
  return (
    <tr key={id} className={trClassName}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  )
}
const TransactionBody = ({ items }) => {
  if(items.length === 0) return null;
  return <tbody className={s.tbody}>{items.map(TransactionTab)}</tbody>
}

const Transactions = ({ transactions }) => {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <TransactionBody items={transactions} />
    </table>
  );
};
Transactions.propTypes = {
  transactions: PropTypes.arrayOf (
    PropTypes.exact({
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
   }),
  )
}
 
export default Transactions;
