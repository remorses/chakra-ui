import React from "react"
import * as exported from "@/../packages/layout/stories/code.stories"
import { default as GlobalWrapper } from "@/../.storybook/wrapper"
import storiesMap from "@/storiesMap"
import { StoryPage } from "@vitro/ui"

const absolutePath =
  "/Users/morse/Documents/GitHub/chakra-ui/packages/layout/stories/code.stories.tsx"

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
