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
    <S.Container>
      <ToastContainer />
      <S.Box py="py-4">
        <S.Form>
          <S.FormBox gap="gap-5">
            <S.InputText type="text" value={description} placeholder="Descrição" onChange={(e) => setDescription(e.target.value)} />

            <S.InputText type="number" value={amount} placeholder="Valor" onChange={(e) => setAmount(e.target.valueAsNumber)} />
          </S.FormBox>

          <S.FormBox>
            <S.InputBox>
              <S.InputRadio type="radio" id="entrada" name="group1" defaultChecked onChange={() => setExpense(!isExpense)} />
              <S.Text htmlFor="entrada">Entrada</S.Text>
            </S.InputBox>

            <S.InputBox>
              <S.InputRadio type="radio" id="saida" name="group1" onChange={() => setExpense(!isExpense)} />
              <S.Text htmlFor="saida">Saida</S.Text>
            </S.InputBox>
          </S.FormBox>

          <S.FormBox>
            <S.Button onClick={handleButton}>Adicionar</S.Button>
          </S.FormBox>
        </S.Form>
      </S.Box>

      <S.Box>
        <ItemList itens={transactionList} setItens={setTransactionList} />
      </S.Box>
    </S.Container>
  );
};
