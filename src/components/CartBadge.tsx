import { Box, Text } from "@chakra-ui/react";

interface CartBadgeProps {
  count: number;
}

const CartBadge = ({ count }: CartBadgeProps) => {
  if (count < 1) return null;
  return (
    <Box
      position="absolute"
      top={-2}
      right={-2}
      bg="#ff7d1a"
      color="white"
      borderRadius="full"
      minW="20px"
      h="20px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      fontSize="xs"
      fontWeight="bold"
      zIndex={1}
      px={1}
      boxShadow="md"
    >
      <Text>{count}</Text>
    </Box>
  );
};

export default CartBadge;