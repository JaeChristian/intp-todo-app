import { extendTheme } from "@chakra-ui/react";
import {mode} from "@chakra-ui/theme-tools";
const styles = {
    global: props=>({
        body: {
            bg: mode('#f0e7db', '#202023')(props)
        }
    })
}

const config = {
    initialColorMode: 'dark'
}

const theme = extendTheme({
    fonts: {
      heading: "'M PLUS Rounded 1c', sans-serif",
    //   body: "'M Plus Rounded 1c', sans-serif",
    },
    config,
    styles
  })

export default theme;