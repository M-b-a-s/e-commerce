import { Grid, GridItem} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import ProductContainer from "./components/ProductContainer";
import { useState } from "react";
  

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "main main"`,
      }}
      paddingX='200px'
    >
      <GridItem area="nav">
        <Navbar cartCount={cartCount}/>
      </GridItem>
      
      <GridItem area="main" marginTop="50px">
        <ProductContainer setCartCount={setCartCount}/>
      </GridItem>
    </Grid>
  )
}

export default App