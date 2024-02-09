import {
  Flex,
  Text,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Link,
} from "@chakra-ui/react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa"; // Importing Font Awesome icons
import React from "react";

const Contact = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      pt={{ base: "6rem", md: "6rem", lg: "8rem" }}
      paddingInline="2rem"
    >
      <Box
        width="100%"
        maxWidth={{ base: "100%", md: "600px" }}
        textAlign="center"
      >
        <Heading as="h1" size="xl" marginBottom="1rem">
          Contact Us
        </Heading>
        {/* Contact Form */}
        <form>
          <FormControl id="name" marginBottom="1rem">
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder="Enter your name" />
          </FormControl>
          <FormControl id="email" marginBottom="1rem">
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="Enter your email address" />
          </FormControl>
          <FormControl id="message" marginBottom="1rem">
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Enter your message" />
          </FormControl>
          <Button colorScheme="blue" type="submit" marginTop="1rem">
            Submit
          </Button>
        </form>
      </Box>

      {/* Contact Information */}
      <Box marginTop={{ base: "2rem", md: "4rem" }} textAlign="center">
        <Heading as="h2" size="lg" marginBottom="1rem">
          Contact Information
        </Heading>
        <Flex
          flexDirection={{ base: "column", md: "column", lg: "row" }}
          gap="1rem"
          cursor="pointer"
        >
          <Flex
            border="1px dashed "
            p="3rem"
            transition="all .3s ease-in"
            _hover={{ p: "1rem" }}
            align="center"
            justifyContent="center"
          >
            <FaMapMarkerAlt style={{ marginRight: "0.5rem" }} />
            <Text>123 Main St, City, Country</Text>
          </Flex>
          <Flex
            border="1px dashed "
            p="3rem"
            transition="all .3s ease-in"
            _hover={{ p: "1rem" }}
            align="center"
            justifyContent="center"
          >
            <FaEnvelope style={{ marginRight: "0.5rem" }} />
            <Text>
              Email:{" "}
              <Link href="mailto:info@example.com">info@example.com</Link>
            </Text>
          </Flex>
          <Flex
            border="1px dashed "
            p="3rem"
            transition="all .3s ease-in"
            _hover={{ p: "1rem" }}
            align="center"
            justifyContent="center"
          >
            <FaPhone style={{ marginRight: "0.5rem" }} />
            <Text>Phone: +1234567890</Text>
          </Flex>
        </Flex>
      </Box>

      {/* Social Media Links */}
      <Box marginTop={{ base: "2rem", md: "4rem" }} textAlign="center">
        <Heading as="h2" size="lg" marginBottom="1rem">
          Follow Us
        </Heading>
        <Flex align="center" justifyContent="center">
          <Link href="https://www.facebook.com/example" isExternal>
            <FaFacebook style={{ marginRight: "1rem" }} />
          </Link>
          <Link href="https://twitter.com/example" isExternal>
            <FaTwitter style={{ marginRight: "1rem" }} />
          </Link>
          <Link href="https://www.instagram.com/example" isExternal>
            <FaInstagram style={{ marginRight: "1rem" }} />
          </Link>
        </Flex>
      </Box>

      {/* Map */}
      <Box
        marginTop={{ base: "2rem", md: "4rem" }}
        width="100%"
        textAlign="center"
      >
        <Heading as="h2" size="lg" marginBottom="1rem">
          Location
        </Heading>
        <Box
          position="relative"
          overflow="hidden"
          paddingTop="56.25%"
          width="100%"
        >
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1CYaMf9qsEtBnZXGoeMhyMPbMcE4&hl=en_US&ehbc=2E312F"
            width="100%"
            height="100%"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            frameBorder="0"
            allowFullScreen=""
            title="Embedded Google Map"
          ></iframe>
        </Box>
      </Box>
    </Flex>
  );
};

export default Contact;
