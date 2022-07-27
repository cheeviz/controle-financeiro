import { useEffect, useState } from "react";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Resume } from "./components/Resume";

export const App = () => {
  const data = localStorage.getItem("transactions");
  const [transactionList, setTransactionList] = useState(
    data ? JSON.parse(data) : []
  );

  const [saida, setSaida] = useState(0);
  const [entrada, setEntrada] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amountSaida = transactionList
      .filter((item: any) => item.expense)
      .map((transaction: any) => Number(transaction.amount));

    const amountEntrada = transactionList
      .filter((item: any) => !item.expense)
      .map((transaction: any) => Number(transaction.amount));

    const saida = amountSaida
      .reduce((acc: any, cur: any) => acc + cur, 0)
      .toFixed(2);

    const entrada = amountEntrada
      .reduce((acc: any, cur: any) => acc + cur, 0)
      .toFixed(2);

    const total = Math.abs(entrada - saida).toFixed(2);

    setEntrada(entrada);
    setSaida(saida);
    setTotal(Number(total));
  }, [transactionList]);

  const handleAdd = (transaction: any) => {
    const newArrayTransaction = [...transactionList, transaction];
    setTransactionList(newArrayTransaction);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransaction));
  };

  return (
    <div>
      <Header title="Controle Financeiro" />
      <Resume entrada={entrada} saida={saida} total={total} />
      <Form
        handleAdd={handleAdd}
        transactionList={transactionList}
        setTransactionList={setTransactionList}
      />
    </div>
  );
};
