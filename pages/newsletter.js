import React from "react";
import {
  VStack,
  Text,
  Heading,
  useColorModeValue,
  HStack,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import PageTransition from "../components/page-transitions";
import Section from "@/components/section";
import sorter from "sort-isostring";
import { getAllNewsletters } from "../lib/airtable";
import Link from "@/components/link";
import SubscribeCard from "@/components/subscribe-card";

export default function Newsletter({ posts }) {
  return (
    <PageTransition>
      <Section>
        <VStack spacing={16}>
          <VStack spacing={4}>
            <Heading as="h1">Newsletter</Heading>
            <Text
              fontSize="2xl"
              color={useColorModeValue("gray.500", "gray.200")}
              maxW="lg"
              textAlign="center"
            >
              You will recieve a weekly report of the best startups, dev tools
              and technologies
            </Text>
            <SubscribeCard
              image={false}
              title=""
              description=""
              card={false}
              center
            />
          </VStack>

          {/* {!posts.length && "No posts found."} */}
          <VStack w="full" spacing={8}>
            <Heading as="h2" size="md">
              Past newsletters
            </Heading>
            <VStack alignItems="flex-start" spacing={4} w="full">
              {posts
                .filter((p) => p.fields.status === "Published")
                .sort((x, y) =>
                  sorter(y.fields["Published on"], x.fields["Published on"])
                )
                .map((post) => {
                  return (
                    <Stack
                      key={post.id}
                      direction={["column", "row"]}
                      justify="space-between"
                      align="flex-start"
                      width="full"
                    >
                      <HStack>
                        <Text
                          display={["none", "block"]}
                          fontSize="md"
                          color={useColorModeValue(
                            "neutral.800",
                            "neutralD.800"
                          )}
                        >
                          {post.fields.number.toString().padStart(2, "0")}
                        </Text>
                        <Text fontSize="md">{post.fields.subject}</Text>
                      </HStack>
                      <Text
                        display={["none", "block"]}
                        color={useColorModeValue("neutral.800", "neutralD.800")}
                        fontSize="md"
                      >
                        {
                          new Date(post.fields["Published on"])
                            .toISOString()
                            .split("T")[0]
                        }
                      </Text>
                    </Stack>
                  );
                })}
            </VStack>
          </VStack>
        </VStack>
      </Section>
    </PageTransition>
  );
}

export async function getStaticProps() {
  const posts = await getAllNewsletters();

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}
