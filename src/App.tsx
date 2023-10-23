import { useEffect, useState } from "react";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Resume } from "./components/Resume";

export const App = () => {
  const data = localStorage.getItem("transactions");
  const [transactionList, setTransactionList] = useState(data ? JSON.parse(data) : []);

  const [valorSaida, setSaida] = useState(0);
  const [valorEntrada, setEntrada] = useState(0);
  const [saldo, setSaldo] = useState(0);

  useEffect(() => {
    const amountEntrada = transactionList
      .filter((item: any) => !item.expense)
      .map((transaction: any) => Number(transaction.amount));
    const entrada = Number(amountEntrada.reduce((acc: any, cur: any) => acc + cur, 0).toFixed(2));

    const amountSaida = transactionList
      .filter((item: any) => item.expense)
      .map((transaction: any) => Number(transaction.amount));
    const saida = Number(amountSaida.reduce((acc: any, cur: any) => acc + cur, 0).toFixed(2));

    const total = Math.abs(entrada - saida).toFixed(2);

    setEntrada(Number(entrada));
    setSaida(Number(saida));

    if (entrada < saida) {
      setSaldo(Number(-total));
    } else {
      setSaldo(Number(total));
    }
  }, [transactionList]);

  const handleAdd = (transaction: any) => {
    const newArrayTransaction = [...transactionList, transaction];
    setTransactionList(newArrayTransaction);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransaction));
  };

  return (
    <>
      <Header title="Finances" />
      <div className="flex flex-col items-center justify-center pt-44">
        <Resume entrada={valorEntrada} saida={valorSaida} total={saldo} />
        <Form handleAdd={handleAdd} transactionList={transactionList} setTransactionList={setTransactionList} />
      </div>
    </>
  );
};
