import React, {Component} from "react"

import Layout from "../components/layout/Layout"
import SEO from "../components/seo/Seo"

import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import HomeCarousel from "../components/carousel/HomeCarousel"
import Products from "../components/productsSection/Products"
import Benefits from "../components/benefits/Benefits"
import Recommended from "../components/recommendationSector/Recommended"
import Categories from "../components/categorySection/Categories"
import API from "../data/Axios"

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
        Produk: []
    }
  
}

componentDidMount = () => {
    API.GetProduk().then(res => {
        this.setState({
            Produk: res
        })
    })
}
render() {
  return (
  <Layout>
    <SEO />
    <HomeCarousel />
    <Benefits />
    <Products data={this.state.Produk}/>
    <Categories />

  </Layout>
  )}
}

export default IndexPage
