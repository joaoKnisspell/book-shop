import Image from "next/image"
import { NewsCardContainer, NewsDetail } from "./styles"
import { CardTitle } from "../Title"

interface NewsCardProps{
    title: string,
    description: string,
    news_img: string
}

export function NewsCard({ title, description, news_img }: NewsCardProps){
    return(
        <NewsCardContainer>
            <NewsDetail>
                <CardTitle>{title}</CardTitle>
                <div className="line"></div>
                <p>{description}</p>
            </NewsDetail>
            <Image src={news_img} width={123} height={156} alt=""/>
        </NewsCardContainer>
    )
}