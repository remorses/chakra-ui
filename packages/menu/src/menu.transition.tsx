import {
  Transition,
  TransitionProps,
  TransitionStyles,
} from "@chakra-ui/transition/src"
import { focus, __DEV__ } from "@chakra-ui/utils/src"
import * as React from "react"
import { useMenuContext } from "./use-menu"

export interface MenuTransitionProps {
  transformOrigin?: string
  children: TransitionProps["children"]
  styles?: TransitionProps["styles"]
}

export function MenuTransition(props: MenuTransitionProps) {
  const { transformOrigin = "top left", children, styles } = props
  const menu = useMenuContext()

  const defaultStyles: TransitionStyles = {
    init: {
      opacity: 0.01,
      transformOrigin: transformOrigin,
      transform: "scale(0.8)",
      transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.320, 1.175)",
      transitionProperty: "opacity, transform",
      willChange: "opacity, transform",
    },
    entered: {
      opacity: 1,
      transitionDuration: "200ms",
      transform: "scale(1)",
    },
    exiting: {
      opacity: 0.01,
      transitionDuration: "100ms",
      transform: "scale(0.8)",
    },
  }

  return (
    <Transition
      onEnter={(node) => {
        node.hidden = false
      }}
      onExited={(node) => {
        node.hidden = true
        node.style.pointerEvents = "auto"
        if (menu.buttonRef.current) {
          focus(menu.buttonRef.current)
        }
      }}
      onExit={(node) => {
        node.hidden = false
      }}
      onExiting={(node) => {
        node.style.pointerEvents = "none"
      }}
      timeout={{ enter: 0, exit: menu.isOpen ? 200 : 100 }}
      in={menu.isOpen}
      styles={styles ?? defaultStyles}
      unmountOnExit={false}
      children={children}
    />
  )
}

if (__DEV__) {
  MenuTransition.displayName = "MenuTransition"
}
