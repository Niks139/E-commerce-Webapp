import React from 'react'
import  {Grid}  from '@material-ui/core'
import Product from './Product/Product'

const products = [
    { id:1, name: 'Book', description: 'Novels', price:'$9.99'},
    { id:2, name: 'Book', description: 'Interview Crack', price: '$12.99'}
]

const Products = () => {
    return (
        <div>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}> 
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Products