import tw from "tailwind-styled-components";

type CardProps = {
  textColor?: string;
  bgColor?: string;
  titleColor?: string;
};

export const Container = tw.div<CardProps>`w-[320px] h-[120px] flex gap-2 flex-col items-center justify-center rounded bg-white drop-shadow-lg ${(
  p,
) => p.bgColor}`;
export const Wrapper = tw.div`w-full flex items-center gap-2 justify-between px-5`;
export const Title = tw.h1<CardProps>`text-black text-center font-medium text-2xl uppercase ${(p) => p.titleColor}`;
export const Paragrafo = tw.p<CardProps>`text-black text-center text-3xl font-bold p-2 ${(p) => p.textColor}`;
