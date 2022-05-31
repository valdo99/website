import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Avatar,
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Divider,
  Tag,
  SimpleGrid,
  Button,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const AvatarNavigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const open = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  return (
    <Link href="/">
      <Avatar
        name="Edvaldo Gjonikaj"
        size="sm"
        src="/avatar-small.png"
        cursor="pointer"
      />
    </Link>
  );
};

export default AvatarNavigation;
