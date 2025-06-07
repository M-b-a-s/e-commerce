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
    <Grid templateColumns="1fr 2fr" paddingX={10} gap="100px">
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
        <Box paddingTop={10} >
          <Text fontWeight="bold" color="gray.500" textStyle="xs">
            SNEAKER COMPANY
          </Text>
          <Text textStyle="4xl" fontWeight="bold" mb={8}>
            Fall Limited Edition<br/> Sneakers
          </Text>
          <Text mb={5} color="gray.500" textStyle='sm'>
            These low profile sneakers are your perfect casual wear<br/> companion.
            Featuring durable rubber outer sole, they'll<br/> withstand everything
            the weather can offer.
          </Text>

          <HStack>
            <Text textStyle='xl' fontWeight='bold'>$125.00</Text>
            <Button variant="solid" size='xs'>50%</Button>
          </HStack>
          <Text textDecoration='line-through' color='gray.500' fontWeight='semibold' textStyle='xs'>$250.00</Text>
          <HStack width="100%">
            <Button variant="plain" bg="#f7f8fd">
              <NumberInput.Root defaultValue="0" unstyled spinOnPress={false}>
                <HStack gap="2">
                  <NumberInput.DecrementTrigger asChild>
                    <IconButton variant="plain" size="sm">
                      <LuMinus />
                    </IconButton>
                  </NumberInput.DecrementTrigger>
                  <NumberInput.ValueText
                    textAlign="center"
                    fontSize="lg"
                    minW="3ch"
                  />
                  <NumberInput.IncrementTrigger asChild>
                    <IconButton variant="plain" size="sm">
                      <LuPlus />
                    </IconButton>
                  </NumberInput.IncrementTrigger>
                </HStack>
              </NumberInput.Root>
            </Button>
            <Button colorPalette="orange" variant="solid">
              <Image src={cartIcon}></Image> Add to cart
            </Button>
          </HStack>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default ProductContainer;
