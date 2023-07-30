import { ProductPageContainer, ProductContainer, ProductDetail } from "@/src/styles/pages/product"
import { MainTitle } from "@/src/components/Title"
import { Button } from "@/src/components/Button"
import Image from "next/image"
import Link from "next/link"

import { useState } from "react"

import { GetStaticProps, GetStaticPaths } from "next"

import { useRouter } from "next/router"

//Stripe
import { stripe } from "@/src/lib/stripe"
import Stripe from "stripe"

//Axios
import axios from "axios"

interface ProductPageProps {
    product: {
        name: string,
        description: string,
        cover_img: string,
        price: string,
        defaultPriceId: string,
    }
}

export default function Product({ product }: ProductPageProps){

    const [ loading, setLoading ] = useState(false)

    const { isFallback } = useRouter()

    if(isFallback){
        return <p>Loading...</p>
    }

    async function handleOnPurchase(){

        setLoading(true)

        try{
            const response = await axios.post("/api/checkout", {
                productId: product.defaultPriceId
            })

            const { successUrl } = response.data;

            window.location.href = successUrl
        }catch(err){
            setLoading(false)
            console.log(err)
        }
    }

    return(
        <ProductPageContainer>
            
                <ProductContainer>
                    <Image src={product.cover_img} width={272} height={400} alt=""/>
                </ProductContainer>
                <ProductDetail>
                    <MainTitle>Book: {product.name}</MainTitle>
                    <span>{product.price}</span>
                    <p>{product.description}</p>
                    <Button size='product' onClick={handleOnPurchase} loading={loading}><Link href="#">{loading ? 'Loading . . .' : 'Buy Now'}</Link></Button>
                </ProductDetail>
            
        </ProductPageContainer>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return{
        paths: [],
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {

    const product_id = params.id

    const response = await stripe.products.retrieve(product_id, {
        expand: ['default_price', 'default_price.product']
    })

    const price = response.default_price as Stripe.Price

    const product = {
        name: response.name,
        description: response.description,
        cover_img: response.images[0],
        price: new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price.unit_amount / 100),
        defaultPriceId: price.id,
    }

    return{
        props:{
            product,
        },
        revalidate: 60 * 60 * 2 //2 hours
    }
}

