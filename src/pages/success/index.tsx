import { SuccessPageContainer } from "@/src/styles/pages/success"
import { MainTitle } from "@/src/components/Title"
import Image from "next/image"
import { Button } from "@/src/components/Button"
import Link from "next/link"

import { GetServerSideProps } from "next"

import Stripe from "stripe"
import { stripe } from "@/src/lib/stripe"

interface SuccessPageProps {
    userName: string,
    productName: string,
    productImg: string
}

export default function Success({ userName, productName, productImg }: SuccessPageProps){
    return(
        <SuccessPageContainer>
            <MainTitle>Purchase Made!</MainTitle>
            <Image src={productImg} width={150} height={220} alt=""/>
            <p>Woohoo, <span>{userName}</span>, your <span>{productName}</span> is already on its way to your home!</p>
            <Button size='default'><Link href="/">Return to Home</Link></Button>
        </SuccessPageContainer>
    )
}


export const getServerSideProps: GetServerSideProps = async ({ query }) => {

    const sessionId = String(query.session_id)
    
    const response = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    })
    
    const userName = response.customer_details.name
    const product = response.line_items.data[0].price.product as Stripe.Product

    return{
        props: {
            userName: userName,
            productName: product.name,
            productImg: product.images[0],
        },
    }
}