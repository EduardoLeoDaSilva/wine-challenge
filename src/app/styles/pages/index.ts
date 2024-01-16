import { styled } from "..";

export const Container = styled('div',{
    height: '100%',
    width: '100%',
    padding: '2.5rem 10rem',
    display: 'flex',
    gap: '2rem'
})


export const FiltersContainer = styled('ul', {
    display: 'flex',
    gap: '1.12rem',
    flexDirection: 'column'
})

export const ProductListContainer = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)'
})