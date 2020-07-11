import CSSReset from "@chakra-ui/css-reset/src"
import theme from "@chakra-ui/theme/src"
import { ChakraProvider } from "@chakra-ui/system/src"
import { Stack } from "@chakra-ui/layout/src"
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
