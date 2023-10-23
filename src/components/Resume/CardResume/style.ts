import tw from "tailwind-styled-components";

type CardProps = {
  value: number;
};

export const Container = tw.div`w-[320px] h-[120px] flex gap-2 flex-col items-center justify-center rounded bg-white`;
export const Wrapper = tw.div`w-full flex items-center gap-2 justify-between px-5`;
export const Title = tw.h1`text-black text-center font-medium text-2xl uppercase`;
export const Paragrafo = tw.p<CardProps>`text-black text-center text-3xl font-bold p-2 ${(p) => (p.value < 0 ? "text-red-500" : "")}`;
