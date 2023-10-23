import { useState } from "react";
import { ItemList } from "../ItemList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as S from "./style";

export const Form = ({ handleAdd, transactionList, setTransactionList }: any) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [isExpense, setExpense] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleButton = () => {
    if (!description || !amount) {
      toast.warning("Informe uma descrição e o valor.", {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: false,
        theme: "light",
      });
      return;
    } else {
      const transaction = {
        id: generateID(),
        description: description,
        amount: amount,
        expense: isExpense,
      };

      handleAdd(transaction);

      setDescription("");
      setAmount(0);
    }
  };

  return (
    <div>
      <ToastContainer />
      <div>
        <div>
          <div>
            <input type="text" value={description} placeholder="Descrição" onChange={(e) => setDescription(e.target.value)} />

            <input type="number" value={amount} placeholder="Valor" onChange={(e) => setAmount(e.target.valueAsNumber)} />
          </div>

          <div>
            <div>
              <input type="radio" id="entrada" name="group1" defaultChecked onChange={() => setExpense(!isExpense)} />
              <label htmlFor="entrada">Entrada</label>
            </div>

            <div>
              <input type="radio" id="saida" name="group1" onChange={() => setExpense(!isExpense)} />
              <label htmlFor="saida">Saida</label>
            </div>
          </div>

          <div>
            <button onClick={handleButton}>Adicionar</button>
          </div>
        </div>
      </div>

      <div>
        <ItemList itens={transactionList} setItens={setTransactionList} />
      </div>
    </div>
  );
};
