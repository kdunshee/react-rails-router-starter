import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Card } from 'semantic-ui-react'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import ProductsForm from './ProductForm'

const Products = (props) => {
const [products, setProducts ] =useState([]);



const addProduct = (productObj) => {
    console.log(productObj)
    setProducts([productObj, ...products])
}

const renderProducts = () => {
        if (products.length <= 0)
          return <h2>No Products</h2>
        return products.map( product => (
          <Card key = {`product-${product.id}`}>
            <Card.Content>
              <Card.Header>{ product.name }</Card.Header>
              <Card.Meta>{ product.department }</Card.Meta>
              <Card.Description>
                { product.description }
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button as={Link} to={`/products/${product.id}`} color='blue'>
                View
              </Button>
            </Card.Content>
          </Card>
        ))
      }

    useEffect(() => {
        axios.get('api/products').then( res => {
            console.log(res)
            setProducts(res.data)
        }).catch (e => {
            console.log(e)
        })


    }, [])


    return (
        <div>

        <h1>Products</h1>
        <ProductsForm add = {addProduct}/>
        <Card.Group>
            {renderProducts()}
        </Card.Group>
        </div>
    )
}

export default Products