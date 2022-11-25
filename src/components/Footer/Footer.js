/*eslint-disable*/
import React from "react";
import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function Footer(props) {
  // const linkTeal = useColorModeValue("teal.400", "red.200");=
  return (
    <Flex
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent="space-between"
      px="30px"
      pb="20px"
    >
      <Text
        color="gray.400"
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}
      >
        &copy; {1900 + new Date().getYear()},{" "}
        <Text as="span">
          {document.documentElement.dir === ""
            ? "  "
            : " "}
        </Text>
        <Link
          // color={linkTeal}
          color="teal.400"
          href="https://www.linkedin.com/in/myltiane-alves/"
          target="_blank"
        >
          {document.documentElement.dir === ""
            ? "Todos os Direitos Reservados"
            : "Myltiane Alves "}
        </Link>
        &
        <Link
          // color={linkTeal}
          color="teal.400"
          href="https://github.com/Myltiane-Alves"
          target="_blank"
        >
          {document.documentElement.dir === "" ? "" : " "}
        </Link>
        {document.documentElement.dir === ""
          ? ""
          : " Todos os Direitos Reservados"}
      </Text>
      <List display="flex">
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          <Link color="gray.400" href="https://github.com/Myltiane-Alves">
            {document.documentElement.dir === ""
              ? ""
              : ""}
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          <Link color="gray.400" href="https://github.com/Myltiane-Alves">
            {document.documentElement.dir === "" ? "" : ""}
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          <Link
            color="gray.400"
            href="#blog"
            href="https://github.com/Myltiane-Alves"
          >
            {document.documentElement.dir === "" ? "" : ""}
          </Link>
        </ListItem>
        <ListItem>
          <Link
            color="gray.400"
            href="#license"
            href="https://github.com/Myltiane-Alves"
          >
            {document.documentElement.dir === "" ? "" : ""}
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}
