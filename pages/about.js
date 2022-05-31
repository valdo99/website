import React from "react";
import Head from "next/head";
import {
  Button,
  VStack,
  HStack,
  Text,
  IconButton,
  Heading,
  Wrap,
} from "@chakra-ui/react";
import PageTransition from "../components/page-transitions";
import Section from "@/components/section";
import interests from "../data/interests.json";
import InterestTag from "@/components/interest-tag";
import Link from "@/components/link";

const About = () => (
  <PageTransition>
    <VStack spacing={8}>
      <Section>
        <VStack align="start">
          <Heading as="h1">About</Heading>
          <Text>
            I've always been interested and passioned about tech, at 13 i built
            my first website ever. I spend roughly 30/35 % of my free time
            reading, studying and testing out fresh new technologies and trends.
            Still, it's not all about technology, I think that the networking
            and business part is crucial in order to succeed and make better
            products. I am a serial startup hunter, something that I'm really
            into is looking for the most innovative and fast-growing{" "}
            <Link passHref variant="text" href="/tools">
              startups
            </Link>
            . //I also like football and big fan of FC Internazionale.
          </Text>
        </VStack>
      </Section>
      <Section>
        <VStack align="stretch" spacing={4}>
          <Heading as="h3" size="lg">
            Work
          </Heading>
          <Text>
            My first working experience was at Avanade Inc. (consultancy
            company), I worked there for about a year, when I realizes that big
            corporates don't have room for my energy and my ideas. Then i took a
            year to study and teach myself about startup ecosystem, best
            practices to iterate a product, market-fits etc. So, I found a job
            position as CTO in a fintech startup, and I started to work on my
            network. When I saw all the opportunities that came up, I decided to
            start working as a freelancer, so that I would be able to help the
            startups I was interested in as much as I could.
          </Text>
        </VStack>
      </Section>
      <Section>
        <VStack align="stretch" spacing={4}>
          <Heading as="h2">✅</Heading>
          <Wrap>
            {interests.like.map((el) => (
              <InterestTag name={el} like />
            ))}
          </Wrap>
        </VStack>
      </Section>
      <Section>
        <VStack align="stretch" spacing={4}>
          <Heading as="h2">❌</Heading>
          <Wrap>
            {interests.dislike.map((el) => (
              <InterestTag name={el} />
            ))}
          </Wrap>
        </VStack>
      </Section>
    </VStack>
  </PageTransition>
);

export default About;
