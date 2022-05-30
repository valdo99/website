import React from "react";
import Head from "next/head";
import {
  Button,
  Box,
  VStack,
  Text,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import PageTransition from "../components/page-transitions";
import Section from "@/components/section";
import { TwitterLogo } from "phosphor-react";
import ProjectCard from "@/components/project-card";
import { getTable } from "@/lib/airtable";
import Link from "@/components/link";
import SubscribeCard from "@/components/subscribe-card";

const Home = ({ projects }) => (
  <Box>
    <PageTransition>
      <VStack spacing={12}>
        <Section>
          <VStack spacing={4} align="start" fontSize="2xl">
            <Heading size="xl">Hey, I'm Edvaldo 👋</Heading>
            <VStack>
              <Text>
                I'm a freelancer based in Italy who wants to support startups by
                helping them making technical decisions. I'm mainly focused on
                the fintech industry, but I'm also interested in Web3 and dev
                tools. You can also find me on{" "}
                <Link variant="text" href="https://github.com/valdo99">
                  Github
                </Link>{" "}
                and{" "}
                <Link
                  variant="text"
                  href="https://www.linkedin.com/in/edvaldo-g-20a271121/"
                >
                  LinkedIn
                </Link>
                , where I keep up with new technologies and share my work.
              </Text>
            </VStack>
            {/* <Link href="https://twitter.com/wirtzdan" unstyled>
              <Button
                colorScheme="blue"
                rounded="lg"
                size="lg"
                leftIcon={<TwitterLogo weight="fill" />}
                mt={4}
              >
                Follow me on Twitter
              </Button>
            </Link> */}
          </VStack>
        </Section>
        <Section>
          <SubscribeCard
            title="Subscribe to my newsletter"
            description="Helpful tools, thoughtful articles and other findings from the web. From my desk to yours."
          />
        </Section>

        <Section>
          <VStack align="start" spacing={8}>
            <Heading size="lg">Projects</Heading>
            <SimpleGrid columns={1} spacing={4} mt={8} w="100%">
              {projects.map((projects) => (
                <ProjectCard
                  key={projects.id}
                  name={projects.fields.name}
                  description={projects.fields.description}
                  logo={projects.fields.logo}
                  link={projects.fields.link}
                  type={projects.fields.type}
                />
              ))}
            </SimpleGrid>
          </VStack>
        </Section>
      </VStack>
    </PageTransition>
  </Box>
);

export async function getStaticProps() {
  const projects = await getTable("Projects");

  return {
    props: {
      projects,
    },
    revalidate: 600,
  };
}

export default Home;
