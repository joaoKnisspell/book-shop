// Next
import { NextApiRequest, NextApiResponse } from "next";

//Stripe
import { stripe } from "@/src/lib/stripe";

export default async function Checkout(req: NextApiRequest, res: NextApiResponse){

    const { productId } = req.body 

    if(req.method !== 'POST'){
        return res.status(403).json("You don't have permission to access this resource!")
    }

    if(!productId){
        return res.status(403).redirect("/")
    }


    const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
    const cancelUrl = `${process.env.NEXT_URL}/`

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: successUrl,
        cancel_url: cancelUrl,
        mode: 'payment',
        line_items: [
            { 
                price: productId,
                quantity: 1,
            },
        ]
    })

    return res.status(201).json({ successUrl: checkoutSession.url })
}