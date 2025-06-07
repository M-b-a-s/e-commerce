import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import cartIcon from "../assets/images/icon-cart.svg";
import minusIcon from "../assets/images/icon-minus.svg";
import plusIcon from "../assets/images/icon-plus.svg";
import { useState } from "react";
import { productImages } from "../data";

const ProductContainer = () => {
  const [quantity, setQuantity] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <Grid templateColumns="1fr 2fr" paddingX={10} gap="100px">
      <GridItem>
        <Box width="300px">
          <Image
            src={productImages[activeIndex].main}
            boxSize="300px"
            borderRadius="xl"
          />
          <HStack justify="space-between">
            {productImages.map((img, idx) => (
              <Image
                key={idx}
                src={img.thumbnail}
                boxSize="65px"
                borderRadius="md"
                cursor="pointer"
                border={activeIndex === idx ? "2px solid #ff7d1a" : "2px solid transparent"}
                onClick={() => setActiveIndex(idx)}
                _hover={{ border: "2px solid #ff7d1a" }}
                mt={4}
              />
            ))}
          </HStack>
        </Box>
      </GridItem>
      <GridItem>
        <Box paddingTop={10} width={"400px"}>
          <Text fontWeight="bold" color="gray.500" textStyle="xs" mb={2}>
            SNEAKER COMPANY
          </Text>
          <Text textStyle="4xl" fontWeight="bold" mb={8}>
            Fall Limited Edition<br /> Sneakers
          </Text>
          <Text mb={5} color="gray.500" textStyle="sm">
            These low profile sneakers are your perfect casual wear<br /> companion.
            Featuring durable rubber outer sole, they'll<br /> withstand everything
            the weather can offer.
          </Text>

          <HStack>
            <Text textStyle="xl" fontWeight="bold">
              $125.00
            </Text>
            <Button variant="solid" size="xs">
              50%
            </Button>
          </HStack>
          <Text
            textDecoration="line-through"
            color="gray.500"
            fontWeight="semibold"
            textStyle="xs"
            mb={4}
          >
            $250.00
          </Text>
          <HStack width="100%">
            <HStack
              bg="#f7f8fd"
              borderRadius="md"
              px={4}
              width={"40"}
              justify={"space-between"}
            >
              <Button
                variant="plain"
                bg="transparent"
                onClick={handleDecrement}
                minW="auto"
                p={0}
              >
                <Image src={minusIcon} alt="minus" />
              </Button>
              <Text fontSize="lg" minW="3ch" textAlign="center">
                {quantity}
              </Text>
              <Button
                variant="plain"
                bg="transparent"
                onClick={handleIncrement}
                minW="auto"
                p={0}
              >
                <Image src={plusIcon} alt="plus" />
              </Button>
            </HStack>
            <Button colorPalette="orange" variant="solid" width="60%">
              <Image src={cartIcon}></Image> Add to cart
            </Button>
          </HStack>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default ProductContainer;