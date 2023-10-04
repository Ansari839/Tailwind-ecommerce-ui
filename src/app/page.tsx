import Image from 'next/image'
import Banner from './components/Banner'
import NewArrival from './components/NewArrival'
import Feature from './components/Feature'
import ProductOffer from './components/ProductOffer'
import TopSellersProduct from './components/TopSellersProduct'
export default function Home() {
  return (
    <>
    <Banner />
    <NewArrival />
    <Feature />
    <ProductOffer />
    <TopSellersProduct />
    </>
      )
}
