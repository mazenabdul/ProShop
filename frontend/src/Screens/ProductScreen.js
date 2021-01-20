import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import products from '../products'
import Rating from '../components/Rating'

const ProductScreen = ({ match }) => {

  //Search the products array to find the product which matches the ID in the url 
  const product = products.find(product => product._id === match.params.id)

  return (
    <>
      <Link className='btn btn-dark my-3 rounded' to='/'>Go Back</Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        <Col md={3}>
          <ListGroup variant='flush'>

            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
          
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroup.Item>

            <ListGroup.Item>
            Price: ${product.price}
            </ListGroup.Item>

            <ListGroup.Item>
              {product.description}
            </ListGroup.Item>
          </ListGroup> 

            <ListGroup.Item>
              <Button className='btn-block' type='button'>Add to Cart</Button>
            </ListGroup.Item>
        </Col>

        <Col md={2}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Stock:</Col>
                  <Col>
                  <strong>{product.countInStock}</strong>
                  </Col>
                  <Col>Status: {product.countInStock>0 ? 'In Stock' : 'Out of Stock'}</Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
