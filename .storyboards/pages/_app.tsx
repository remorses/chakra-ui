import React, { Fragment, useState } from "react"
import {
  ThemeProvider,
  CSSReset,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Box,
} from "@chakra-ui/core"
import { FiBook as LogoPart } from "react-icons/fi"
import Head from "next/head"
import { StoriesIndex } from "../components/StoriesIndex"
import { Global, css } from "@emotion/core"

export const Logo = ({ ...rest }) => {
  return (
    <Stack
      direction="row"
      align="center"
      fontSize="24px"
      fontWeight="500"
      spacing="2"
      {...rest}
    >
      <Box as={LogoPart} size="1.1em" />
      <Box>Storyboards</Box>
    </Stack>
  )
}

export default function App(props) {
  const [filter, setFilter] = useState("")
  const { Component, pageProps } = props
  return (
    <ThemeProvider>
      <CSSReset />
      <Global styles={globalStyles} />
      <Stack
        overflowX="hidden"
        minWidth="100vw"
        minHeight="100vh"
        bg="gray.100"
      >
        <Stack direction="row" spacing="10" m="10">
          <Stack display={["none", null, "flex"]} spacing="6" width={["260px"]}>
            <Logo />
            <InputGroup shadow="sm">
              <InputLeftElement
                children={<Icon name="search" color="gray.400" />}
              />
              <Input
                onChange={(e) => setFilter(e.target.value)}
                variant="filled"
                bg="white"
                borderRadius="md"
              />
            </InputGroup>
            <StoriesIndex filter={filter} fontWeight="500" />
          </Stack>
          <Stack
            as="main"
            borderLeftWidth={["0", null, "2px"]}
            pl={["0", null, "10"]}
            width="100%"
            align="stretch"
          >
            <Component {...pageProps} />
          </Stack>
        </Stack>
      </Stack>
    </ThemeProvider>
  )
}

export const globalStyles = css`
  * {
    box-sizing: border-box;
  }
  html {
    overflow: hidden;
    height: 100%;
  }
  #__next {
    min-height: 100%;
  }
  body {
    height: 100%;
    overflow: auto;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }
  main {
    -webkit-overflow-scrolling: touch;
  }
`
