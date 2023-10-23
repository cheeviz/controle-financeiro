import { useState } from "react";
import { ItemList } from "../ItemList";

export const Form = ({ handleAdd, transactionList, setTransactionList }: any) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<number>();
  const [isExpense, setExpense] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleButton = () => {
    if (!description || !amount) {
      alert("Informe uma descrição e o Valor!");
      return;
    } else if (amount < 1) {
      alert("Valor tem que ser positivo");
      return;
    }

    const transaction = {
      id: generateID(),
      description: description,
      amount: amount,
      expense: isExpense,
    };

    handleAdd(transaction);
  };

  return (
    <div className="w-[1000px] flex flex-col items-center justify-center">
      <div className="w-full bg-white py-4">
        <form className="flex items-center justify-center">
          <div className="flex items-center justify-center">
            <input
              className="text-black w-[250px] bg-transparent border-b-2 border-[#37bbf8] placeholder:text-[#636363] text-xl font-medium h-8 focus:outline-none"
              type="text"
              value={description}
              placeholder="Descrição"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="flex flex-col mx-10 ">
            <input
              className="text-black w-[250px] bg-transparent border-b-2 border-[#37bbf8] placeholder:text-[#636363] text-xl font-medium h-8 focus:outline-none"
              type="number"
              value={amount}
              placeholder="Valor"
              onChange={(e) => setAmount(e.target.valueAsNumber)}
            />
          </div>

          <div className="flex items-center">
            <input
              className="w-4 h-4 rounded-full accent-blue-500 cursor-pointer"
              type="radio"
              id="entrada"
              name="group1"
              defaultChecked
              onChange={() => setExpense(!isExpense)}
            />
            <label className="text-black font-medium text-xl p-2 cursor-pointer" htmlFor="entrada">
              Entrada
            </label>
          </div>

          <div className="flex items-center">
            <input className="w-4 h-4 accent-blue-500 cursor-pointer" type="radio" id="saida" name="group1" onChange={() => setExpense(!isExpense)} />
            <label className="text-black font-medium text-xl p-2 cursor-pointer" htmlFor="saida">
              Saida
            </label>
          </div>

          <div className="flex items-center justify-center ml-2">
            <button
              className="text-black text-xl font-bold uppercase bg-[#37bbf8] w-32 h-10 rounded-2xl hover:bg-[#3fa1cf] transition-colors"
              onClick={handleButton}
            >
              Adicionar
            </button>
          </div>
        </form>
      </div>

      <div className="w-full mt-2 overflow-y-auto">
        <ItemList itens={transactionList} setItens={setTransactionList} />
      </div>
    </div>
  );
};
