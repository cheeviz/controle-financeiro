import tw from "tailwind-styled-components";

type BoxProps = {
  py?: string;
};

type FormBox = {
  gap?: string;
};

export const Container = tw.div`w-[1000px] flex flex-col items-center justify-center`;
export const Box = tw.div<BoxProps>`w-full bg-white mt-2 drop-shadow-xl ${(p) => p.py}`;

export const Form = tw.div`flex items-center justify-center gap-5`;
export const FormBox = tw.div<FormBox>`flex items-center ${(p) => p.gap}`;

export const InputText = tw.input`text-black w-[250px] bg-transparent border-b-2 border-[#37bbf8] placeholder:text-[#636363] text-xl font-medium h-8 focus:outline-none`;
export const InputRadio = tw.input`w-4 h-4 rounded-full accent-blue-500 cursor-pointer`;
export const Text = tw.label`text-black font-medium text-xl p-2 cursor-pointer`;
export const InputBox = tw.div`flex items-center`

export const Button = tw.button`text-black text-xl font-bold uppercase bg-[#37bbf8] w-32 h-10 rounded-2xl hover:bg-[#3fa1cf] transition-colors`;
