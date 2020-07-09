import CSSReset from "@chakra-ui/css-reset/src"
import theme from "@chakra-ui/theme/src"
import { ChakraProvider, Stack } from "@chakra-ui/core/src"
import * as React from "react"

export const Chakra: React.FC = ({ children }) => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <Stack flex="1" w="100%" align="center" justify="center" p="40px">
      {children}
    </Stack>
  </ChakraProvider>
)

export default Chakra
