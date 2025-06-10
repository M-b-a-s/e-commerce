import { Grid, GridItem} from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductContainer from "./components/ProductContainer";

const PRICE_PER_ITEM = 125; // Example price

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleDelete = () => setCartCount(0);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "main main"`,
      }}
      paddingX='200px'
    >
      <GridItem area="nav">
        <Navbar
          cartCount={cartCount}
          cartQuantity={cartCount}
          pricePerItem={PRICE_PER_ITEM}
          onDelete={handleDelete}
        />
      </GridItem>
      
      <GridItem area="main" marginTop="50px">
        <ProductContainer setCartCount={setCartCount}/>
      </GridItem>
    </Grid>
  )
}

export default App