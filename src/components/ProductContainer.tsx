import { Box, Grid, GridItem, Image } from "@chakra-ui/react"
import imageProduct from "../assets/images/image-product-1.jpg"


const ProductContainer = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)">
        <GridItem>
            <Box>
                <Image src={imageProduct} boxSize='300px'></Image>
            </Box>
        </GridItem>
        <GridItem></GridItem>
        
    </Grid>
  )
}

export default ProductContainer