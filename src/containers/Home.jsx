import Layout from "../hocs/Layout";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Banner from '../components/home/Banner';
import { get_products } from "../features/services/products/products.service";
import ProductsArrival from '../components/home/ProductsArrival'
import ProductsSold from '../components/home/ProductsSold'

const Home = () => {

  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const products_arrival = useSelector(state => state.products.products_arrival);
  const products_sold = useSelector(state => state.products.products_sold);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(get_products());
    // dispatch(get_products_by_sold());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout>
      <div className="text-blue-500">
        <Banner />
        {/* <ProductsArrival data={products_arrival} />
        <ProductsSold data={products_sold} /> */}
      </div>
    </Layout>
  )
}

export default Home
