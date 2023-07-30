//Next
import Image from "next/image"

//Styles
import { HeaderContainer } from "./styles"

//Logo
import logo from '../../assets/logo.png'
import Link from "next/link"

export function Header(){
    return(
        <HeaderContainer>
            <div className="logo">
                <Link href="/"><Image src={logo} width={77} height={77} alt="" /></Link>
            </div>
        </HeaderContainer>
    )
}