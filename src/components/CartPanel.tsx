import { Box, HStack, Text, Image } from "@chakra-ui/react";
import { productImages } from "../data";
import deleteIcon from "../assets/images/icon-delete.svg";

interface CartPanelProps {
  quantity: number;
  pricePerItem: number;
  onDelete: () => void;
}

const CartPanel = ({ quantity, pricePerItem, onDelete }: CartPanelProps) => {
  const hasItems = quantity > 0;
  const total = pricePerItem * quantity;

  return (
    <Box p={4} minW="300px" bg="white" borderRadius="md" boxShadow="md">
      <Text fontWeight="bold" mb={4} borderBottom={"1px solid"} borderColor="gray.200">
        Cart
      </Text>
      {hasItems ? (
        <HStack>
          <Image
            src={productImages[0].thumbnail}
            boxSize="50px"
            borderRadius="md"
            alt="Product thumbnail"
          />
          <Box flex="1">
            <Text color="gray.600" fontSize="sm">
              Fall Limited Edition Sneakers
            </Text>
            <Text color="gray.500" fontSize="sm">
              ${pricePerItem.toFixed(2)} x {quantity}{" "}
              <Text as="span" fontWeight="bold" color="black">
                ${total.toFixed(2)}
              </Text>
            </Text>
          </Box>
          <Image
            src={deleteIcon}
            boxSize="20px"
            cursor="pointer"
            alt="Delete"
            onClick={onDelete}
          />
        </HStack>
      ) : (
        <Text color="gray.500" textAlign="center" mt={6}>
          Your cart is empty.
        </Text>
      )}
    </Box>
  );
};

export default CartPanel;