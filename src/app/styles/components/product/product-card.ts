import { styled } from "@/app/styles";


export const ProductCardContainer = styled('div', {
    display: 'flex',
    gap: '1rem',
    flexDirection: 'column'

})

export const ProductCardBody = styled('div', {
    height: '333px',
    width: '256px',
    backgroundColor: '$white',
    boxShadow: '0px 9.734px 14.601px 0px rgba(0, 0, 0, 0.10)',
    display: 'flex',
    flexDirection: 'column',
    padding: '0.5625rem',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'

})

export const CardTitle = styled('h2', {
    fontSize: '1rem',
    letterSpacing: '-0.222px'
})

export const CardPrice = styled('span', {
    textDecoration: 'line-through',
    color: '#888',
    fontSize: '0.6875rem'
    
})

export const CardPriceBadge = styled('span', {
    color: '$white',
    background: '$branding',
    fontSize: '0.625rem',
    fontWeight: '700',
    padding: '0.2px 3px',
    borderRadius: '2px'
})

export const CardMemberPriceContainer = styled('div', {
    display: 'flex',
    gap: '3px',

    p: {
        color: '#1D1D1B',
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: '0.6875rem'
    }

    // span: {

    // }
})

export const CardNotMemberPriceContainer = styled('div', {
    
})

export const CardButton = styled('button', {
    backgroundColor: '$functional-sucess-default',
    padding: '11.681px 23.361px',
    textAlign: 'center',
    borderRadius: '3.894px',
    borderStyle: 'none',
    display: 'block'
})