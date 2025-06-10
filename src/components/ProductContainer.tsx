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
import ImageModal from "./ImageModal";

interface ProductContainerProps {
  setCartCount: (count: number) => void;
}

const ProductContainer = ({ setCartCount }: ProductContainerProps) => {
  const [quantity, setQuantity] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleMainImageClick = () => setIsModalOpen(true);

  const handleModalPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? productImages.length - 1 : prev - 1));
  };

  const handleModalNext = () => {
    setActiveIndex((prev) => (prev === productImages.length - 1 ? 0 : prev + 1));
  };

  const handleAddToCart = () => {
    setCartCount(quantity);
  };

  return (
    <>
      <Grid templateColumns="1fr 2fr" paddingX={10} gap="100px">
        <GridItem>
          <Box width="300px">
            <Image
              src={productImages[activeIndex].main}
              boxSize="300px"
              borderRadius="xl"
              onClick={handleMainImageClick}
              cursor="pointer"
            />
            <HStack justify="space-between">
              {productImages.map((img, idx) => (
                <Box
                  key={idx}
                  role="group"
                  position="relative"
                  display="inline-block"
                  borderRadius="md"
                  mt={4}
                  cursor="pointer"
                  border={
                    activeIndex === idx
                      ? "2px solid #ff7d1a"
                      : "2px solid transparent"
                  }
                  onClick={() => setActiveIndex(idx)}
                  transition="border-color 0.2s"
                >
                  <Image
                    src={img.thumbnail}
                    boxSize="65px"
                    borderRadius="md"
                  />
                  {/* White overlay on active or hover */}
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    width="100%"
                    height="100%"
                    borderRadius="md"
                    bg="white"
                    opacity={activeIndex === idx ? 0.5 : 0}
                    pointerEvents="none"
                    transition="opacity 0.2s"
                    _groupHover={{ opacity: 0.5 }}
                  />
                </Box>
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
              Fall Limited Edition
              <br /> Sneakers
            </Text>
            <Text mb={5} color="gray.500" textStyle="sm">
              These low profile sneakers are your perfect casual wear
              <br /> companion. Featuring durable rubber outer sole, they'll
              <br /> withstand everything the weather can offer.
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
                <Text fontSize="lg" minW="3ch" textAlign="center" color='#000' >
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
              <Button colorPalette="orange" variant="solid" width="60%" onClick={handleAddToCart}>
                <Image src={cartIcon}></Image> Add to cart
              </Button>
            </HStack>
          </Box>
        </GridItem>
      </Grid>
      <ImageModal
        isOpen={isModalOpen}
        images={productImages}
        activeIndex={activeIndex}
        onClose={() => setIsModalOpen(false)}
        onPrev={handleModalPrev}
        onNext={handleModalNext}
      />
    </>
  );
};

export default ProductContainer;
