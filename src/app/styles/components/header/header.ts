import { styled } from "@/app/styles";

export const Header = styled('div', {
    width: '100%',
    height: '5.5rem',
    backgroundColor: '$white',
    padding: '0 9.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.35)'
})


export const HorizontalList = styled('ul', {
    display: "flex",
    gap: '2.75rem',
    listStyle: 'none'
})