import { VitroApp } from "@vitro/ui"
import storiesMap from "@/storiesMap"

export default function App(props) {
  return <VitroApp {...props} storiesMap={storiesMap} />
}
