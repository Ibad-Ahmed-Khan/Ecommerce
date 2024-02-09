import { Box, Button, Flex, Img, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { RingLoader } from "react-spinners";
import { AiOutlineCheck, AiOutlineShoppingCart } from "react-icons/ai";
import useZustand from "../Zustand";

const Home = () => {
  const [data, setData] = useState([]);
  const { todo, todos, setTodo, addTodo } = useZustand();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setData(response.data.products);
      setLoading(false);
    });
  }, []);

  // Function to check if a product is added to the bag
  const isProductAdded = (id) => todos.some((todo) => todo.id === id);

  return (
    <Flex minH="100vh" pt="4rem" bg="gray.700">
      {loading ? (
        <Flex w="full" align="center" justify="center">
          <RingLoader color="#4FD1C5" loading={loading} size={100} />
        </Flex>
      ) : (
        <SimpleGrid
          minH="100vh"
          w="full"
          columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
          align="center"
          justify="center"
          bg="gray.200"
          boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
          borderRadius="md"
          gap="1rem"
          p="1rem"
        >
          {data.map((item) => (
            <Flex
              flexDirection="column"
              align="center"
              justify="center"
              key={item.id}
              gap="1rem"
              p="2rem"
              border="5px solid white"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            >
              <Img
                borderRadius="md"
                w="10rem"
                h="10rem"
                src={item.images[0]}
                loading="lazy"
                objectFit="cover"
                transition="all .25s ease-in"
                _hover={{ p: "1rem", cursor: "pointer" }}
              />
              <Text fontWeight="100" w="15rem">
                {" "}
                {item.title}
              </Text>
              <Text letterSpacing="1px" fontWeight="bold" w="15rem">
                RS.{item.price}
              </Text>
              <Flex gap="0.5rem">
                {isProductAdded(item.id) ? (
                  <Button
                    variant="outline"
                    colorScheme="green"
                    leftIcon={<AiOutlineCheck />}
                  >
                    Added
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="outline"
                      colorScheme="red"
                      leftIcon={<AiOutlineShoppingCart />}
                      onClick={() => addTodo(item)}
                      _hover={{
                        background:
                          "linear-gradient(to right, #FF416C, #FF4B2B)",
                        color: "white",
                      }}
                    >
                      Add to Cart
                    </Button>
                  </>
                )}
              </Flex>
            </Flex>
          ))}
        </SimpleGrid>
      )}
    </Flex>
  );
};

export default Home;
