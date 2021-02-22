import React, {useEffect} from 'react'
//  Disaptch -> Call an action
// useSelector -> Select parts of the state (we want the productList of the state)
import {useDispatch, useSelector} from "react-redux"
import {Row, Col} from "react-bootstrap"
import Product from "../components/Product"
import { listProducts } from "../actions/productActions"
import Spinner from "../components/Spinner"
import Message from "../components/Message"

const HomeScreen = () => {
    const dispatch = useDispatch()

    // Pulling the productList from the state 
    const productList = useSelector((state) => state.productList)
    const {loading, error, products} = productList

    // Runs first when the component loads
    useEffect(() => {
        dispatch(listProducts()) // Calling the action to list all the products from the action 
    }, [dispatch])
    
    return (
        <>
          <h1>Lastest Products</h1>
          {loading ? <Spinner/> 
          : error ? <Message variant="danger" header="Oops, Something Went Wrong" message={error}/> : <Row>
              {products.map(product => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                      <Product product={product}/>
                  </Col>
              ))}
          </Row>}
        </>
    )
}

export default HomeScreen
