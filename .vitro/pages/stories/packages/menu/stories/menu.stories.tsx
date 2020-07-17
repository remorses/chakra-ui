import React from "react"
import * as exported from "@/../packages/menu/stories/menu.stories"
import { default as GlobalWrapper } from "@/../.storybook/wrapper"
import storiesMap from "@/storiesMap"
import { StoryPage } from "@vitro/ui"

const absolutePath =
  "/Users/morse/Documents/GitHub/chakra-ui/packages/menu/stories/menu.stories.tsx"

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
