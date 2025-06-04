import { Box, HStack, Image, List } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";
import logo from "../assets/images/logo.svg";
import cartIcon from "../assets/images/icon-cart.svg";
import imageAvatar from "../assets/images/image-avatar.png";

const Navbar = () => {
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
          <HStack gapX={4}>
            <ColorModeButton />
            <Image src={cartIcon}></Image>
            <Image src={imageAvatar} boxSize={8}></Image>
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default Navbar;
