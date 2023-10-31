import { useState } from "react";
import { ItemList } from "../ItemList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Form = ({ handleAdd, transactionList, setTransactionList }: any) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<any>(0 || "Valor");
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
      setAmount("valor");
    }
  };

  return (
    <div className="w-[25rem] md:w-[62.5rem] flex flex-col items-center justify-center mb-5">
      <ToastContainer />
      <div className="w-full bg-white mt-5 drop-shadow-xl py-5">
        <div className="flex flex-col md:flex-row items-center justify-center gap-5">
          <div className="flex flex-col md:flex-row items-center gap-5">
            <input
              className="text-black w-[250px] bg-transparent border-b-2 border-[#37bbf8] placeholder:text-[#636363] text-xl font-medium h-8 focus:outline-none"
              type="text"
              value={description}
              placeholder="Descrição"
              onChange={(e) => setDescription(e.target.value)}
            />

            <input
              className="text-black w-[250px] bg-transparent border-b-2 border-[#37bbf8] placeholder:text-[#636363] text-xl font-medium h-8 focus:outline-none"
              type="number"
              value={amount}
              placeholder="Valor"
              onChange={(e) => setAmount(e.target.valueAsNumber)}
            />
          </div>

          <div className="flex items-center">
            <div>
              <input
                className="`w-4 h-4 rounded-full accent-blue-500 cursor-pointer"
                type="radio"
                id="entrada"
                name="group1"
                defaultChecked
                onChange={() => setExpense(!isExpense)}
              />
              <label className="text-black font-medium text-xl px-2 cursor-pointer" htmlFor="entrada">
                Entrada
              </label>
            </div>

            <div className="flex items-center">
              <input
                className="`w-4 h-4 rounded-full accent-blue-500 cursor-pointer"
                type="radio"
                id="saida"
                name="group1"
                onChange={() => setExpense(!isExpense)}
              />
              <label className="text-black font-medium text-xl px-2 cursor-pointer" htmlFor="saida">
                Saida
              </label>
            </div>
          </div>

          <div>
            <button
              className="text-black text-xl font-bold uppercase bg-[#37bbf8] w-32 h-10 rounded-2xl hover:bg-[#3fa1cf] transition-colors"
              onClick={handleButton}
            >
              Adicionar
            </button>
          </div>
        </div>
      </div>

      <div className="w-full mt-5">
        <ItemList itens={transactionList} setItens={setTransactionList} />
      </div>
    </div>
  );
};
