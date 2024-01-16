import Image from 'next/image'
import Link from 'next/link'
import { Container, FiltersContainer, ProductListContainer } from './styles/pages'
import ProductCard from './components/product/product-card'
import { Product } from './models/product.model'

export default function Home() {
   let product: Product ={
      discount: 60,
      memberPrice: 30,
      price: 37.40,
      name: 'Bacalhôa Meia Pipa Private Selection Castelão Syrah 2014',
      imageUrl:  'https://m.media-amazon.com/images/I/41pvnlP0F-L.__AC_SX342_SY445_QL70_ML2_.jpg'
   }
  return (
    <Container>
        <FiltersContainer>
              <li><input type='checkbox' name='price-filter' /> Até R$40</li>
              <li><input type='checkbox' name='price-filter'/> R$40 A R$60</li>
              <li><input type='checkbox' name='price-filter'/> R$100 A R$200</li>
              <li><input type='checkbox' name='price-filter'/> R$200 A R$500</li>
              <li><input type='checkbox' name='price-filter'/> Acima de R$500</li>
        </FiltersContainer>

        <ProductListContainer>
            <ProductCard produt={product} />
        </ProductListContainer>
      </Container>
  )
}
