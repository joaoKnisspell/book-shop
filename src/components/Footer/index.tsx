import { FooterContainer, FooterContentLayout, List } from "./styles"

import Image from "next/image"

export function Footer() {
    return(
        <FooterContainer>
            <FooterContentLayout>
                <List>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                    <li>Sales and Refunds</li>
                    <li>Legal</li>
                </List>
                <List>
                    <li><Image src="/img/insta.svg" width={24} height={24} alt=""/></li>
                    <li><Image src="/img/google.svg" width={24} height={24} alt=""/></li>
                    <li><Image src="/img/face.svg" width={24} height={24} alt=""/></li>
                </List>
            </FooterContentLayout>
        </FooterContainer>
    )
}