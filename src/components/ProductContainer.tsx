import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Image,
  IconButton,
  NumberInput,
  Text,
} from "@chakra-ui/react";
import imageProduct from "../assets/images/image-product-1.jpg";
import imageProductThumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import imageProductThumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import imageProductThumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import imageProductThumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";
import cartIcon from "../assets/images/icon-cart.svg";
import { LuMinus, LuPlus } from "react-icons/lu";

const ProductContainer = () => {
  const thumbnails = [
    imageProductThumbnail1,
    imageProductThumbnail2,
    imageProductThumbnail3,
    imageProductThumbnail4,
  ];
  return (
    <Grid templateColumns="repeat(2, 1fr)">
      <GridItem>
        <Box width="300px">
          <Image src={imageProduct} boxSize="300px" borderRadius="xl"></Image>
          <HStack justify="space-between">
            {thumbnails.map((thumbnail, index) => (
              <Image
                key={index}
                src={thumbnail}
                boxSize="60px"
                borderRadius="md"
                cursor="pointer"
                _hover={{ border: "2px solid #000" }}
                mt={5}
              />
            ))}
          </HStack>
        </Box>
      </GridItem>
      <GridItem>
        <Text>SNEAKER COMPANY</Text>
        <Text>Fall Limited Edition Sneakers</Text>
        <Text>
          These low profile sneakers are your perfect casual wear companion.
          Featuringdurable rubber outer sole, they'll withstand everything the
          weather can offer.
        </Text>

        <HStack>
          <Button variant="plain">$125.00</Button>
          <Button variant="solid">50%</Button>
        </HStack>
        <Button variant="plain">$250.00</Button>
        <HStack>
          <Button variant="plain">
            <NumberInput.Root defaultValue="0" unstyled spinOnPress={false}>
              <HStack gap="2">
                <NumberInput.DecrementTrigger asChild>
                  <IconButton variant="outline" size="sm">
                    <LuMinus />
                  </IconButton>
                </NumberInput.DecrementTrigger>
                <NumberInput.ValueText
                  textAlign="center"
                  fontSize="lg"
                  minW="3ch"
                />
                <NumberInput.IncrementTrigger asChild>
                  <IconButton variant="outline" size="sm">
                    <LuPlus />
                  </IconButton>
                </NumberInput.IncrementTrigger>
              </HStack>
            </NumberInput.Root>
          </Button>
          <Button colorPalette='orange.500' variant="solid">
            <Image src={cartIcon}></Image> Add to cart
          </Button>
        </HStack>
      </GridItem>
    </Grid>
  );
};

export default ProductContainer;
