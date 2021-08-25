import React from 'react'
import { Card, CardContent, CardActions, Typography, IconButton, CardMedia } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from './style'

const Product = ({product}) => {

    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image='' title={product.name} />
                <CardContent>
                    <div className={classes.CardContent}>
                        <Typography variant="h5" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            {product.price}
                        </Typography>
                    </div>
                    <Typography variant="body2" color="textSecondary">{product.description}</Typography>
                    <CardActions disableSpacing className={classes.CardActions}>
                        <IconButton aria-label="Add to Cart">
                            <AddShoppingCart />
                        </IconButton>
                    </CardActions>
                </CardContent>
            </Card>
            
        </div>
    )
}

export default Product
