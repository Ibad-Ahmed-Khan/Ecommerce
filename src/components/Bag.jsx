import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  useDisclosure,
  OrderedList,
  Text,
  Img,
  ListItem,
  Flex,
  VStack,
  Button,
  Input,
  HStack,
} from "@chakra-ui/react";
import "../css/Bag.css";
import {
  FiShoppingCart,
  FaCalculator,
  FiClipboard,
  FiCast,
} from "react-icons/fi";
import { BiPackage } from "react-icons/bi";
import useZustand from "../Zustand";

const Bag = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { increment, decrement, todos, deleteTodo } = useZustand();

  const calculateTotalPrice = (todoItem) => {
    return todoItem.count * todoItem.price;
  };

  const calculateSubtotal = () => {
    return todos
      .reduce((acc, todoItem) => {
        return acc + calculateTotalPrice(todoItem);
      }, 0)
      .toLocaleString();
  };

  return (
    <Box pos="relative">
      <Box
        _before={{
          content: `'${todos.length}'`, // Display the number of items in the shopping bag
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          bg: "white ",
          fontSize: "sm",
          fontWeight: "bold",
          pos: "absolute",
          w: "1.2rem",
          h: "1.2rem",
          top: "-.2rem",
          right: "-.5rem",
          borderRadius: "1000%",
        }}
      >
        <FiShoppingCart
          cursor="pointer"
          onClick={onOpen}
          style={{ fontSize: "32px" }} // Adjust the size as needed
        />
      </Box>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Your Shopping Bag</DrawerHeader>
            <DrawerBody>
              {todos.length > 0 ? (
                <OrderedList zIndex="1">
                  <Flex mb="10rem" flexDirection="column">
                    <Text color="gray" fontSize="lg">
                      MY BAG({todos.length})
                    </Text>
                    {todos.map((todoItem) => (
                      <ListItem
                        mt="2"
                        key={todoItem.id}
                        borderRadius="md"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        color="black"
                      >
                        <Flex
                          textAlign="center"
                          align="center"
                          justify="center"
                          w="full"
                          boxShadow="0 4px 10px rgba(10, 65, 61, 1)"
                          borderRadius="md"
                          p="4"
                          mt="8"
                        >
                          <Img
                            borderRadius="md"
                            w="5rem"
                            h="5rem"
                            src={todoItem.img}
                            loading="lazy"
                            objectFit="cover"
                          />

                          <VStack>
                            <Text
                              w="full"
                              letterSpacing="1px"
                              color="black"
                              fontSize="sm"
                            >
                              {todoItem.text}
                            </Text>
                            <Flex
                              w="full"
                              align="center"
                              justify="center"
                              color="black"
                              letterSpacing="1px"
                              fontWeight="bold"
                              gap=".3rem"
                            >
                              <Text
                                fontWeight="100"
                                color="gray.600"
                                fontSize="sm"
                                as="span"
                              >
                                {todoItem.count}
                              </Text>
                              <Text
                                fontWeight="100"
                                color="gray.600"
                                fontSize="sm"
                                as="span"
                              >
                                ×
                              </Text>
                              <Text>
                                Rs.
                                {todoItem.price}
                              </Text>
                            </Flex>
                            <Button
                              variant="secondary"
                              fontSize="sm"
                              onClick={() => deleteTodo(todoItem.id)}
                              className="remove-button"
                            >
                              Remove
                            </Button>

                            <Flex w="full" align="center" justify="center">
                              <Button onClick={() => decrement(todoItem.id)}>
                                -
                              </Button>
                              <Input
                                w="full"
                                type="number"
                                textAlign="center"
                                p="0"
                                value={todoItem.count}
                              />
                              <Button onClick={() => increment(todoItem.id)}>
                                +
                              </Button>
                            </Flex>
                            <Text
                              letterSpacing=".6px"
                              fontSize="sm"
                              color="gray"
                            >
                              Total Price : {calculateTotalPrice(todoItem)}
                            </Text>
                          </VStack>
                        </Flex>
                      </ListItem>
                    ))}
                  </Flex>
                  <VStack
                    align="start"
                    w="full"
                    pos="absolute"
                    bottom="0"
                    left="0"
                    zIndex="11"
                    bg="white"
                    p="2"
                    pl="8"
                    pr="8"
                  >
                    <HStack>
                      <Text fontSize="lg">SUBTOTAL</Text>
                      <Text fontSize="lg">RS.{calculateSubtotal()} </Text>
                    </HStack>
                    <VStack w="full" spacing="4">
                      <Button
                        color="white"
                        bg="blue.600"
                        textTransform="uppercase"
                        fontWeight="200"
                        w="full"
                        fontSize="sm"
                        transition="all .3s ease-in"
                        _hover={{
                          color: "blue.600",
                          bg: "white",
                          border: "1px solid ",
                        }}
                      >
                        proceed to checkout
                      </Button>
                      <Button
                        color="blue.600"
                        bg="white"
                        textTransform="uppercase"
                        fontWeight="200"
                        w="full"
                        fontSize="sm"
                        border="1px solid "
                        transition="all .3s ease-in"
                        _hover={{
                          color: "white",
                          bg: "blue.600",
                        }}
                      >
                        {" "}
                        view shopping bag{" "}
                      </Button>
                    </VStack>
                  </VStack>
                </OrderedList>
              ) : (
                <Text
                  color="gray"
                  textAlign="center"
                  fontSize="lg"
                  mt="4"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <BiPackage
                    cursor="pointer"
                    onClick={onOpen}
                    style={{ fontSize: "28px", marginRight: "0.5rem" }}
                  />
                  Your bag is empty, there are no products in the bag.
                </Text>
              )}
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Bag;
