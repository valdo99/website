import React from "react";
import {
  chakra,
  Icon,
  VStack,
  HStack,
  Text,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import PageTransition from "../components/page-transitions";
import { getTable } from "@/lib/airtable";
import Section from "@/components/section";

import sorter from "sort-isostring";
import {
  FileJsx,
  RocketLaunch,
  Database,
  ComputerTower,
  BracketsCurly,
} from "phosphor-react";
import ToolCard from "../components/tool-card";
import Hero from "@/components/hero";

const Tools = ({ tools }) => {
  return (
    <PageTransition>
      <VStack spacing={8}>
        <Hero
          title="Tools"
          subtitle="A list of my favorite startups, tools and technologies I like."
        ></Hero>
        <Section>
          <Tabs
            variant="soft-rounded"
            colorScheme="blue"
            align="center"
            w="100%"
          >
            <TabList display="flex" flexWrap="wrap">
              <Tab
                bg={useColorModeValue("neutral.300", "neutralD.300")}
                color={useColorModeValue("neutral.900", "neutralD.900")}
                _selected={{
                  color: useColorModeValue("gray.100", "neutralD.100"),
                  bg: useColorModeValue("gray.900", "gray.100"),
                }}
                mr={2}
                mt={2}
              >
                <HStack spacing={1}>
                  <Icon as={RocketLaunch} weight="fill" />
                  <Text>Startups</Text>
                </HStack>
              </Tab>
              <Tab
                bg={useColorModeValue("neutral.300", "neutralD.300")}
                color={useColorModeValue("neutral.900", "neutralD.900")}
                _selected={{
                  color: "green.800",
                  bg: "green.100",
                }}
                mr={2}
                mt={2}
              >
                <HStack spacing={1}>
                  <Icon as={Database} weight="fill" />
                  <Text>Backend</Text>
                </HStack>
              </Tab>
              <Tab
                bg={useColorModeValue("neutral.300", "neutralD.300")}
                color={useColorModeValue("neutral.900", "neutralD.900")}
                _selected={{
                  color: "red.800",
                  bg: "red.100",
                }}
                mr={2}
                mt={2}
                s
              >
                <HStack spacing={1}>
                  <Icon as={FileJsx} weight="fill" />
                  <Text>Frontend</Text>
                </HStack>
              </Tab>
              <Tab
                bg={useColorModeValue("neutral.300", "neutralD.300")}
                color={useColorModeValue("neutral.900", "neutralD.900")}
                _selected={{
                  color: "blue.800",
                  bg: "blue.100",
                }}
                mr={2}
                mt={2}
              >
                <HStack spacing={1}>
                  <Icon as={ComputerTower} />
                  <Text>Infrastructure</Text>
                </HStack>
              </Tab>
              <Tab
                bg={useColorModeValue("neutral.300", "neutralD.300")}
                color={useColorModeValue("neutral.900", "neutralD.900")}
                _selected={{
                  color: "blue.800",
                  bg: "blue.100",
                }}
                mr={2}
                mt={2}
              >
                <HStack spacing={1}>
                  <Icon as={BracketsCurly} />
                  <Text>Dev tools</Text>
                </HStack>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel px={0}>
                <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                  {tools
                    .filter((t) => t.fields.Platform.includes("startups"))
                    .sort((x, y) => sorter(y.fields.ID, x.fields.ID))
                    .map((tool) => (
                      <ToolCard
                        key={tool.id}
                        name={tool.fields.Name}
                        description={tool.fields.Description}
                        image={tool.fields.Image}
                        platform={tool.fields.Platform[0]}
                        isAffiliate={tool.fields.Affiliate}
                        link={tool.fields.Link}
                      />
                    ))}
                </SimpleGrid>
              </TabPanel>
              <TabPanel px={0}>
                <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                  {tools
                    .filter((t) => t.fields.Platform.includes("backend"))
                    .sort((x, y) => sorter(y.fields.ID, x.fields.ID))
                    .map((tool) => (
                      <ToolCard
                        key={tool.id}
                        name={tool.fields.Name}
                        description={tool.fields.Description}
                        image={tool.fields.Image}
                        platform={tool.fields.Platform[0]}
                        isAffiliate={tool.fields.Affiliate}
                        link={tool.fields.Link}
                      />
                    ))}
                </SimpleGrid>
              </TabPanel>
              <TabPanel px={0}>
                <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                  {tools
                    .filter((t) => t.fields.Platform.includes("frontend"))
                    .sort((x, y) => sorter(y.fields.ID, x.fields.ID))
                    .map((tool) => (
                      <ToolCard
                        key={tool.id}
                        name={tool.fields.Name}
                        description={tool.fields.Description}
                        image={tool.fields.Image}
                        platform={tool.fields.Platform[0]}
                        isAffiliate={tool.fields.Affiliate}
                        link={tool.fields.Link}
                      />
                    ))}
                </SimpleGrid>
              </TabPanel>
              <TabPanel px={0}>
                <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                  {tools
                    .filter((t) => t.fields.Platform[0] === "infrastructure")
                    .sort((x, y) => sorter(y.fields.ID, x.fields.ID))
                    .map((tool) => (
                      <ToolCard
                        key={tool.id}
                        name={tool.fields.Name}
                        description={tool.fields.Description}
                        image={tool.fields.Image}
                        platform={tool.fields.Platform[0]}
                        isAffiliate={tool.fields.Affiliate}
                        link={tool.fields.Link}
                      />
                    ))}
                </SimpleGrid>
              </TabPanel>
              <TabPanel px={0}>
                <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                  {tools
                    .filter((t) => t.fields.Platform[0] === "dev-tools")
                    .sort((x, y) => sorter(y.fields.ID, x.fields.ID))
                    .map((tool) => (
                      <ToolCard
                        key={tool.id}
                        name={tool.fields.Name}
                        description={tool.fields.Description}
                        image={tool.fields.Image}
                        platform={tool.fields.Platform[0]}
                        isAffiliate={tool.fields.Affiliate}
                        link={tool.fields.Link}
                      />
                    ))}
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Section>
      </VStack>
    </PageTransition>
  );
};

export async function getStaticProps() {
  const tools = await getTable("Tools");
  return {
    props: {
      tools,
    },
    revalidate: 600,
  };
}

export default Tools;
