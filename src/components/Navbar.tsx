import { Box, HStack, Image, List } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";
import logo from "../assets/images/logo.svg";
import cartIcon from "../assets/images/icon-cart.svg";
import imageAvatar from "../assets/images/image-avatar.png";
import CartBadge from "./CartBadge";
import CartPanel from "./CartPanel";
import { useState, useRef, useEffect } from "react";

interface NavbarProps {
  cartCount: number;
  cartQuantity: number;
  pricePerItem: number;
  onDelete: () => void;
}

const Navbar = ({ cartCount, cartQuantity, pricePerItem, onDelete }: NavbarProps) => {
  const [showCart, setShowCart] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showCart) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        cartRef.current &&
        !cartRef.current.contains(event.target as Node)
      ) {
        setShowCart(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showCart]);

  return (
    <Box padding="4" borderBottom='1px solid' borderColor='gray.300'>
      <HStack justify="space-between">
        <Box>
          <HStack>
            <Image src={logo} paddingRight={6}></Image>
            <List.Root listStyle="none" color="gray.600" fontSize="sm">
              <HStack gapX={4}>
                <List.Item>Collections</List.Item>
                <List.Item>Men</List.Item>
                <List.Item>Women</List.Item>
                <List.Item>About</List.Item>
                <List.Item>Contacts</List.Item>
              </HStack>
            </List.Root>
          </HStack>
        </Box>
        <Box>
          <HStack gapX={4} position="relative">
            <ColorModeButton />
            <Box position="relative" display="inline-block" ref={cartRef}>
              <Image
                src={cartIcon}
                onClick={() => setShowCart((prev) => !prev)}
                cursor="pointer"
              />
              <CartBadge count={cartCount} />
              {showCart && (
                <Box position="absolute" top="36px" right={0} zIndex={5}>
                  <CartPanel
                    quantity={cartQuantity}
                    pricePerItem={pricePerItem}
                    onDelete={onDelete}
                  />
                </Box>
              )}
            </Box>
            <Image src={imageAvatar} boxSize={8}></Image>
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default Navbar;
