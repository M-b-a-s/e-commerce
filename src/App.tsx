import { Grid, GridItem} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import ProductContainer from "./components/ProductContainer";
  

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "main main"`,
      }}
      paddingX='200px'
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      
      <GridItem area="main">
        <ProductContainer />
      </GridItem>
    </Grid>
  )
}

export default App