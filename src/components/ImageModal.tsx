import { Box, Image, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import closeIcon from "../assets/images/icon-close.svg";
import chevronLeftIcon from "../assets/images/icon-previous.svg";
import chevronRightIcon from "../assets/images/icon-next.svg";

interface ImageModalProps {
  isOpen: boolean;
  images: { main: string; thumbnail: string }[];
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const ImageModal = ({
  isOpen,
  images,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: ImageModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      w="100vw"
      h="100vh"
      bg="rgba(0,0,0,0.7)"
      zIndex={1000}
      display="flex"
      alignItems="center"
      justifyContent="center"
      onClick={onClose}
    >
      <Flex
        position="relative"
        bg="white"
        borderRadius="xl"
        p={4}
        onClick={e => e.stopPropagation()}
        alignItems="center"
      >
        {/* Previous Button */}
        <Box
          as="button"
          onClick={onPrev}
          bg="transparent"
          border="none"
          cursor="pointer"
          mr={2}
        >
          <Image src={chevronLeftIcon} alt="Previous" boxSize={8} />
        </Box>
        {/* Main Image */}
        <Image
          src={images[activeIndex].main}
          boxSize={["80vw", "500px"]}
          borderRadius="xl"
          alt="Product"
        />
        {/* Next Button */}
        <Box
          as="button"
          onClick={onNext}
          bg="transparent"
          border="none"
          cursor="pointer"
          ml={2}
        >
          <Image src={chevronRightIcon} alt="Next" boxSize={8} />
        </Box>
        {/* Close Button */}
        <Box
          as="button"
          onClick={onClose}
          bg="transparent"
          border="none"
          cursor="pointer"
          position="absolute"
          top={2}
          right={2}
        >
          <Image src={closeIcon} alt="Close" boxSize={6} />
        </Box>
      </Flex>
    </Box>
  );
};

export default ImageModal;