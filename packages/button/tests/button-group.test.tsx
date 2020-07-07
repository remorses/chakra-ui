import * as React from "react"
import { render } from "@chakra-ui/test-utils/src"
import { ButtonGroup, Button } from ".."

test("ButtonGroup renders correctly", () => {
  const { asFragment } = render(
    <ButtonGroup>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
      <Button>Button 4</Button>
    </ButtonGroup>,
  )
  expect(asFragment()).toMatchSnapshot()
})
