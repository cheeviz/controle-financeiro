import tw from 'tailwind-styled-components'

type TitleProps = {
  textColor?: string
}

export const Tr = tw.tr``
export const Td = tw.td`text-black font-medium text-xl p-2`
export const Title = tw.h1<TitleProps>`font-medium text-xl ${(p) => p.textColor}`