import * as exported from "@/../packages/tooltip/stories/tooltip.stories"
const absolutePath =
  "/Users/morse/Documents/GitHub/chakra-ui/packages/tooltip/stories/tooltip.stories.tsx"
import React, { Fragment } from "react"
import { StoryPage } from "storyboards/dist/story"

const GlobalWrapper = getWrapperComponent()

export default function Page() {
  return (
    <StoryPage
      GlobalWrapper={GlobalWrapper}
      absolutePath={absolutePath}
      storyExports={exported}
    />
  )
}

function getWrapperComponent() {
  try {
    return require(WRAPPER_COMPONENT_PATH).default
  } catch (e) {
    return Fragment
  }
}
