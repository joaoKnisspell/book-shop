import { ProductContainer, ProductDetail, ProductPrice } from "./styles";

//Next
import Image from "next/image";
import Link from "next/link";

//Components
import { CardTitle } from "../Title";
import { Button } from "../Button";

interface ProductPageProps {
    item: {
        id: string,
        name: string,
        description: string,
        price: string,
        cover_img: string,
        previousPrice: string
    }
}

export function ProductCard({ item }: ProductPageProps){

    return(
        <ProductContainer>
            <Image src={item.cover_img} width={150} height={220} alt=""/>
            <ProductDetail>
                <CardTitle>{item.name}</CardTitle>
                <p>{item.description}</p>
                <ProductPrice>
                    <span>{item.price}</span>
                    <span>{item.previousPrice}</span>
                </ProductPrice>

                <Button size="card"><Link href={`/product/${item.id}`} prefetch={false}>View More</Link></Button>
            </ProductDetail>

        </ProductContainer>
    )
}