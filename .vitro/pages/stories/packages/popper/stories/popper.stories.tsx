import React from "react"
import * as exported from "@/../packages/popper/stories/popper.stories"
import { default as GlobalWrapper } from "@/../.storybook/wrapper"
import storiesMap from "@/storiesMap"
import { StoryPage } from "@vitro/ui"

const absolutePath =
  "/Users/morse/Documents/GitHub/chakra-ui/packages/popper/stories/popper.stories.tsx"

export default function Page() {
  return (
    <StoryPage
      storiesMap={storiesMap}
      GlobalWrapper={GlobalWrapper}
      absolutePath={absolutePath}
      storyExports={exported}
    />
  )
}
