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
      <Box
        position="relative"
        onClick={e => e.stopPropagation()}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {/* Main Image */}
        <Image
          src={images[activeIndex].main}
          boxSize={["80vw", "500px"]}
          borderRadius="xl"
          alt="Product"
          bg="transparent"
          zIndex={1}
          display="block"
        />
        {/* Previous Button */}
        <Box
          as="button"
          onClick={onPrev}
          bg="white"
          border="none"
          borderRadius="full"
          boxSize="36px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          position="absolute"
          left={-6}
          top="50%"
          transform="translateY(-50%)"
          zIndex={2}
          p={0}
          boxShadow="md"
        >
          <Image src={chevronLeftIcon} alt="Previous" boxSize={4} />
        </Box>
        {/* Next Button */}
        <Box
          as="button"
          onClick={onNext}
          bg="white"
          border="none"
          borderRadius="full"
          boxSize="36px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          position="absolute"
          right={-6}
          top="50%"
          transform="translateY(-50%)"
          zIndex={2}
          p={0}
          boxShadow="md"
        >
          <Image src={chevronRightIcon} alt="Next" boxSize={4} />
        </Box>
        {/* Close Button */}
        <Box
          as="button"
          onClick={onClose}
          bg="white"
          border="none"
          borderRadius="full"
          boxSize="28px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          position="absolute"
          top={2}
          right={2}
          zIndex={3}
          p={0}
          boxShadow="md"
        >
          <Image src={closeIcon} alt="Close" boxSize={4} />
        </Box>
      </Box>
    </Box>
  );
};

export default ImageModal;