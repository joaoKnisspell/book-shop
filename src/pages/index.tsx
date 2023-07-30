//Next
import Link from "next/link"
import Image from "next/image"
import { GetStaticProps } from "next"

//Styles
import { IntroduceContainer, IntroduceText, IntroduceArt } from "../styles/pages/home"

//Components
import { MainTitle } from "../components/Title"
import { Button } from "../components/Button"
import { ProductCard } from "../components/ProductCard"
import { ProductsSectionContainer } from "../components/ProductsSection" 
import { ProductsWrapper } from "../components/ProductsSection"
import { SectionTitle } from "../components/Title"
import { NewsCard } from "../components/NewsCard"

//Stripe
import { stripe } from "../lib/stripe"
import Stripe from "stripe"


interface HomeProps {
  products: ProductProps[]
}

interface ProductProps {
  id: string,
  name: string,
  price: string,
  description: string,
  cover_img: string,
  previousPrice: string
}

export default function Home({ products }: HomeProps) {

  const recommended = products.slice(0, 3)
  const newReleases = products.slice(3)

  // console.log(newReleases)

  // console.log(products)

  return (
    <>
      <IntroduceContainer>
        <IntroduceText>
          <MainTitle>New Releases This Week</MainTitle>
          <p>It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone</p>
          <Button size="default"><Link href="/news">View News</Link></Button>
        </IntroduceText>
        <IntroduceArt>
          <Image className="img-1" src="/img/p1.jpg" width={242} height={348} alt=""/>
          <Image className="img-2" src="/img/p2.jpg" width={216} height={311} alt=""/>
          <Image className="img-3" src="/img/p3.jpg" width={186} height={267} alt=""/>
        </IntroduceArt>
      </IntroduceContainer>

      <ProductsSectionContainer>
        <SectionTitle>Top Sellers</SectionTitle>
        <ProductsWrapper>
          {recommended.map((item) => {
            return(
              <ProductCard key={item.id} item={item}/>
            )
          })}
        </ProductsWrapper>
      </ProductsSectionContainer>

      <ProductsSectionContainer>
        <SectionTitle>Recommended for you</SectionTitle>
        <ProductsWrapper>
        {newReleases.map((item) => {
            return(
              <ProductCard key={item.id} item={item}/>
            )
          })}
        </ProductsWrapper>
      </ProductsSectionContainer>

      <ProductsSectionContainer>
        <SectionTitle>News</SectionTitle>
        <ProductsWrapper>
          <Link href="/news">
            <NewsCard 
              title="February's Best Children's Books" 
              description="Some of the finest children's authors currently writing have books publishing this month, from Natasha Farrant to Elle McNicoll and from Tahereh Mafi to Harriet Muncaster. Across all areas and age ranges there are plenty of fantastic titles..."
              news_img="/img/news1.png"
              />
          </Link>
          <Link href="/news">
            <NewsCard 
              title="The Books You Need to Read in 2023"
              description="his is the blog we know you've all been waiting for. We present the top 10 titles for 2023 in fiction, non-fiction and children's books; a glorious mix of masterful storytelling, compelling subject matter and page-turning thrills..."
              news_img="/img/news2.png"
            />
          </Link>
        </ProductsWrapper>
      </ProductsSectionContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const response = await stripe.products.list({
    expand: ['data.default_price']
  })
  
  const products = response.data.map((element) => {

    const price = element.default_price as Stripe.Price

    return{
      id: element.id,
      name: element.name,
      description: element.description,
      cover_img: element.images[0],
      price: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(price.unit_amount as number / 100),
      previousPrice: new Intl.NumberFormat("en-US", {
        style: 'currency',
        currency: 'USD'
      }).format((price.unit_amount as number * 1.15) / 100)
    }
  })

  // console.log(products)


  return{
    props: {
      products,
    },
    revalidate: 60 * 60 * 2   //2 hours
  }
}

