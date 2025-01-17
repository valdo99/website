import React from "react";
import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Tag,
  Box,
  Image as ChakraImage,
} from "@chakra-ui/react";
import Image from "./image";
import { usePalette } from "react-palette";
import Link from "@/components/link";

const ProjectCard = ({ name, description, logo, link, type }) => {
  const { data, loading, error } = usePalette(logo[0].thumbnails.large.url);

  const getTypeColor = (type) => {
    if (type === "Web App") {
      return "teal";
    } else if (type === "Extension") {
      return "blue";
    } else if (type === "Community") {
      return "orange";
    }
  };

  return (
    <Link href={link} unstyled>
      <HStack
        p={4}
        bg={useColorModeValue("white", "neutralD.100")}
        rounded="lg"
        borderWidth="1px"
        borderColor={useColorModeValue("neutral.400", "neutralD.400")}
        w="100%"
        h="100%"
        textAlign="left"
        align="start"
        spacing={4}
        transition="all 0.25s"
        transition-timing-function="spring(1 100 10 10)"
        _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
      >
        <Box
          rounded="lg"
          p={2}
          position="relative"
          overflow="hidden"
          lineHeight={0}
          boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.04)"
          flexShrink={0}
        >
          <Box
            bg={data.lightVibrant}
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            right={0}
            opacity={0.25}
          ></Box>
          <Image
            src={logo ? logo[0].thumbnails.large.url : "/"}
            height={36}
            width={36}
            layout="fixed"
            rounded="md"
            objectFit="contain"
            flexShrink={0}
          ></Image>
        </Box>

        <VStack align="start" justify="flex-start" spacing={1}>
          <VStack spacing={0} align="start">
            <HStack>
              <Text fontWeight="bold" fontSize="md" noOfLines={2}>
                {name}
              </Text>
              <Tag size="sm" colorScheme={getTypeColor(type)}>
                {type}
              </Tag>
            </HStack>

            <Text
              fontSize="sm"
              color={useColorModeValue("neutral.1000", "neutralD.1000")}
            >
              {description}
            </Text>
          </VStack>
        </VStack>
      </HStack>
    </Link>
  );
};

export default ProjectCard;
