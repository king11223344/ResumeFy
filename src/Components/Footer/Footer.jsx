import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import logo from "./../../Assets/logo.png";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("#A7EDE7", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        textAlign={"center"}
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Image style={{ height: "44px" }} src={logo} alt="logo" />
        <Text>© 2023 ResumeFy, All rights reserved</Text>
        <Text>Made by Shashank Singhania</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton
            label={"Github"}
            href={"https://github.com/king11223344"}
          >
            <FaGithub />
          </SocialButton>
          <SocialButton
            label={"Linkedin"}
            href={"https://www.linkedin.com/in/shashank-singhania-820bb2227/"}
          >
            <FaLinkedin />
          </SocialButton>
          <SocialButton
            label={"Instagram"}
            href={"https://instagram.com/_shashank_singhania"}
          >
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
