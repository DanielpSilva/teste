import Banner from "./components/Banner/Banner"
import Category from "./components/CategorySection/Category"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import CategoryTabs from "./components/CategoryTabs/CategoryTabs"
import SectionTitle from "./components/SectionTitle/SectionTitle"
import ProductCard from "./components/ProductCarousel/ProductCarousel"
import ProductCart  from "./components/ProductCard/ProductCart"
import Newsletter from "./components/NewsletterForm/Newsletter"
import BrowseBrand from "./components/browseBrands/BrowseBrands"

function App() {

  return (
    <>
    <Header />
    <Banner />
    <Category />

    {/* first section */}
    <SectionTitle />
    <CategoryTabs activeTab="CELULAR" isVisible={true} />
    <ProductCard />
    <ProductCart />

    {/*second section*/}
    <SectionTitle showAll={true}/>
    <ProductCard />
    <ProductCart />

    {/*third section*/}
    <BrowseBrand />
    <SectionTitle showAll={true}/>
    <ProductCard />
    
    <Newsletter />
    <Footer />
    </>
  )
}

export default App
