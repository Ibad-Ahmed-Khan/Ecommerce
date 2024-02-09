import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  VStack,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Bag from "./Bag";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [drawerOpen, setDrawerOpen] = useState(false); // State variable for drawer
  const [delayedClose, setDelayedClose] = useState(null); // State variable for delayed close

  const handleMouseEnter = () => {
    onOpen();
    clearTimeout(delayedClose);
  };

  const handleMouseLeave = () => {
    const delay = 300;
    setDelayedClose(setTimeout(() => onClose(), delay));
  };

  const handlePopoverMouseEnter = () => {
    clearTimeout(delayedClose);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Flex
      pos="fixed"
      zIndex="111"
      align="center"
      justify="space-between"
      w="full"
      px={8}
      py={4}
      bg="gray.900"
      color="white"
    >
      <HamburgerIcon
        color="white"
        style={{ fontSize: "22px" }}
        cursor="pointer"
        display={["block", "block", "none", "none"]}
        onClick={toggleDrawer}
      />{" "}
      {/* Toggle Drawer */}
      <Drawer placement="left" onClose={toggleDrawer} isOpen={drawerOpen}>
        {" "}
        {/* Drawer Component */}
        <DrawerOverlay />
        <DrawerContent fontWeight="bold" color="white" bg="gray.900">
          <DrawerCloseButton fontWeight="bolder" border="2px solid white" />
          <DrawerHeader letterSpacing="1px">Menu</DrawerHeader>
          <DrawerBody
            fontWeight="bold"
            letterSpacing="1px"
            color="white"
            bg="gray.900"
          >
            <VStack spacing={4} align="start">
              <Link to="/">
                <Text cursor="pointer" onClick={toggleDrawer}>
                  Home
                </Text>
              </Link>
              <Link to="/catalog">
                <Text cursor="pointer" onClick={toggleDrawer}>
                  Catalog
                </Text>
              </Link>
              <Link to="/contact">
                <Text cursor="pointer" onClick={toggleDrawer}>
                  Contact
                </Text>
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/* Logo and Navigation */}
      <Link to="/">
        <Text
          cursor="pointer"
          textDecoration="line-through"
          fontWeight="bolder"
          fontSize="lg"
          pos="relative"
          _before={{
            content: "''",
            position: "absolute",
            top: "50%",
            left: "60%",
            width: "150%",
            height: "150%",
            backgroundColor: "white",
            opacity: ".7",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: -1,
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)", // Add shadow for depth
            clipPath:
              "polygon(50% 10%, 70% 10%, 70% 20%, 100% 20%,  0 90%, 0 20%, 30% 20%, 30% 10%, 50% 10%)", // Cart-like shape
          }}
        >
          Ibad Ahmed
        </Text>
      </Link>
      <HStack spacing={10} display={["none", "none", "Flex", "Flex"]}>
        <Link to="/">
          <Text cursor="pointer">Home</Text>
        </Link>
        <Popover isOpen={isOpen} onClose={onClose}>
          <PopoverTrigger>
            <Text
              cursor="pointer"
              _hover={{ textDecoration: "none" }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Catalog
            </Text>
          </PopoverTrigger>
          <PopoverContent
            onMouseEnter={handlePopoverMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <PopoverArrow />
            <PopoverBody>
              <VStack direction="column" color="black">
                <ChakraLink as={Link} to="/catalog">
                  All Products
                </ChakraLink>
                <ChakraLink as={Link} to="/catalog/casual-shirt">
                  Casual Shirt
                </ChakraLink>
                <ChakraLink as={Link} to="/catalog/jackets">
                  Jackets
                </ChakraLink>
                <ChakraLink as={Link} to="/catalog/casual-pant">
                  Casual Pant
                </ChakraLink>
                <ChakraLink as={Link} to="/catalog/socks-stock">
                  Socks Stock
                </ChakraLink>
                <ChakraLink as={Link} to="/catalog/clearance-sale">
                  Clearance Sale 🅽🅴🆆
                </ChakraLink>
              </VStack>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <Link to="/contact">
          <Text cursor="pointer">Contact</Text>
        </Link>
      </HStack>
      {/* Search and Bag */}
      <HStack spacing={4}>
        <Bag />
      </HStack>
    </Flex>
  );
};

export default Header;
