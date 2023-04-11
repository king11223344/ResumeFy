import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import "./introduction.css";
import homeLogo from "./../../Assets/home-logo.png";

import { Image } from "@chakra-ui/react";
import { useContext } from "react";
import ResumeContext from "../../Context/ResumeContext";
import ThemeTemplateData from "../../db/ThemeTemplateData";
import { Helmet } from "react-helmet";
import Footer from "../Footer/Footer";
export default function Introduction() {
  const {
    selectBtn,
    setSelectBtn,
    setCurrentTheme,
    showComponent,
    setShowComponent,
  } = useContext(ResumeContext);

  const handleSelectTemplate = () => {
    setSelectBtn(!selectBtn);
  };

  const showTheme = (e) => {
    setShowComponent(!showComponent);
    setCurrentTheme(e.target.id);
  };

  return (
    <>
      <Helmet>
        <title>ResumeFy - Create Your Resume in Minutes</title>
        <meta
          name="description"
          content="Build your professional resume in minutes using our easy-to-use online resume builder. Choose from a variety of templates and customize your resume to land your dream job. Get started now!"
        />
        <meta
          name="keywords"
          content="Cv, CV builder, online cv,best resume tempelate and builder,resume builder, professional resumes, online resumes, resume templates"
        />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Shashank Singhania" />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/51441410?s=400&u=8c04ee1ad4067469dacccaae344f727e6383bf02&v=4"
        />
        
        <meta property="og:type" content="website" />
      </Helmet>

      <Container
        my={{ base: 1.5, md: 16 }}
        justifyContent={"space-between"}
        flexDirection={{ base: "column", md: "row", sm: "column" }}
        display={"flex"}
        alignItems={"center"}
        maxW={"7xl"}
      >
        <Stack
          width={{ base: "95%", md: "47%" }}
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 1.5, md: 10, sm: "14" }}
        >
          {selectBtn ? (
            <>
              <Heading
                fontWeight={600}
                fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
                lineHeight={"110%"}
              >
                Your resume in three{" "}
                <Text as={"span"} color={"#38B2AC"}>
                  easy{" "}
                </Text>
                steps
              </Heading>

              <Text
                color={"gray.700"}
                _dark={{ color: "gray.300" }}
                maxW={"3xl"}
              >
                 Resumefy makes it easy to create a professional resume. A
                professional-looking resume may be made quickly and easily with
                the help of a resume builder. The Resume Architect provides a
                variety of template selections, allowing you to find and use the
                format that works best for you.
              </Text>

              <Flex
                _dark={{ color: "gray.50" }}
                textAlign={"start"}
                flexDirection={"column"}
                w={"full"}
              >
                <Box className="Bullet_Points">
                  <Button>1</Button>
                  <Text
                    _dark={{ color: "gray.400" }}
                    color={"gray.900"}
                    fontSize={"xl"}
                  >
                    Select a template from our collection.
                  </Text>
                </Box>
                <Box className="Bullet_Points">
                  <Button>2</Button>
                  <Text
                    _dark={{ color: "gray.400" }}
                    color={"gray.900"}
                    fontSize={"xl"}
                  >
                    Build you resume using our easy to use Resumefy.
                  </Text>
                </Box>
                <Box className="Bullet_Points">
                  <Button>3</Button>
                  <Text
                    _dark={{ color: "gray.400" }}
                    color={"gray.900"}
                    fontSize={"xl"}
                  >
                    Download your resume.
                  </Text>
                </Box>
              </Flex>
            </>
          ) : (
            <Heading
              m={"1.5"}
              textAlign={{ base: "center", md: "start" }}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
            >
              Select a{" "}
              <Text as={"span"} color={"#38B2AC"}>
                Template{" "}
              </Text>
              from the our collection
            </Heading>
          )}
        </Stack>

        {selectBtn ? (
          <Stack>
            <Image style={{height:"90vh"}} src={homeLogo} 
            
            alt="home logo" my={"4"} />
            <Button
              onClick={handleSelectTemplate}
              rounded={"full"}
              px={6}
              className="mb-4"
              colorScheme={"teal"}
              bg={"#38B2AC"}
              _hover={{ bg: "#319795" }}
            >
              Select Template
            </Button>
          </Stack>
        ) : (
          <>
            <Box maxW={{ base: "100%", md: "61%" }} className="templatesList">
              {ThemeTemplateData.map((item, index) => {
                return (
                  <div key={index} className="template" onClick={showTheme}>
                    <img id={item.id} src={item.imageSrc} alt={item.imageAlt} />
                  </div>
                );
              })}
            </Box>
          </>
        )}
      </Container>
      <Footer />
    </>
  );
}
