import { MainTitle } from "@/src/components/Title"
import { NewsCard } from "@/src/components/NewsCard"
import { ProductsSectionContainer, ProductsWrapper } from "@/src/components/ProductsSection"

export default function News(){
    return(
        <ProductsSectionContainer>
            <MainTitle>News:</MainTitle>
            <ProductsWrapper>
                <NewsCard 
                    title="February's Best Children's Books" 
                    description="Some of the finest children's authors currently writing have books publishing this month, from Natasha Farrant to Elle McNicoll and from Tahereh Mafi to Harriet Muncaster. Across all areas and age ranges there are plenty of fantastic titles.Lorem ipsum dolor sit amet. Id quia debitis eos ratione commodi et expedita quae? Vel alias quis quo saepe dolorum ut impedit distinctio! Ut dolor suscipit ut accusantium dolorem ad accusantium voluptate et ullam voluptatem qui tempore incidunt est odit deleniti aut officia quaerat."
                    news_img="/img/news1.png"
                    
                />
                <NewsCard 
                    title="The Books You Need to Read in 2023"
                    description="his is the blog we know you've all been waiting for. We present the top 10 titles for 2023 in fiction, non-fiction and children's books; a glorious mix of masterful storytelling, compelling subject matter and page-turning thrills.Lorem ipsum dolor sit amet. Id quia debitis eos ratione commodi et expedita quae? Vel alias quis quo saepe dolorum ut impedit distinctio! Ut dolor suscipit ut accusantium dolorem ad accusantium voluptate et ullam voluptatem qui tempore incidunt est odit deleniti aut officia quaerat."
                    news_img="/img/news2.png"
                    
                />
            </ProductsWrapper>
        </ProductsSectionContainer>
    )
}