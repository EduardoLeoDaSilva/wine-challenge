import { Product } from "@/app/models/product.model";
import { CardButton, ProductCardContainer, ProductCardBody, CardTitle, CardPrice, CardPriceBadge, CardMemberPriceContainer, CardNotMemberPriceContainer } from "@/app/styles/components/product/product-card";
import Image from "next/image";


interface ProductCardProps {
    produt: Product
}

export default function ProductCard({ produt }: ProductCardProps) {



    return (
        <ProductCardContainer>
            <ProductCardBody>
                <Image src={produt.imageUrl} alt="" height={178} width={100} />
                <CardTitle>
                    {produt.name}
                </CardTitle>

                <div>
                    <CardPrice>R$ {produt.price}</CardPrice>
                    <span> </span>
                    <CardPriceBadge>{produt.discount}%OFF</CardPriceBadge>
                </div>

                <CardMemberPriceContainer>
                    <p>Sócio Wine</p>
                    <span>{produt.memberPrice}</span>           
                </CardMemberPriceContainer>

                <CardNotMemberPriceContainer>
                    {produt.price}
                </CardNotMemberPriceContainer>
            </ProductCardBody>
            <CardButton>ADICIONAR</CardButton>
        </ProductCardContainer>
    );
}