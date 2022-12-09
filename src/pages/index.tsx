import Head from "@modules/common/components/head"
import FeaturedProducts from "@modules/home/components/featured-products"
import Categories from "@modules/home/components/categories/index"
import Hero from "@modules/home/components/hero/index"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"
import ShopValues from "@modules/home/components/shop-values"

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head
        title="Home"
        description="Shop all available models only at the ACME. Worldwide Shipping. Secure Payment."
      />
      <Hero />
      <Categories />
      <ShopValues />
      <FeaturedProducts />
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
