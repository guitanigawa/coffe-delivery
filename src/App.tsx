import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./themes/defaultTheme"
import { GlobalStyle } from "./global"
import Router from "./Router"
import { IconContext } from "@phosphor-icons/react"

export default function App() {
  
  return (
    <ThemeProvider theme={defaultTheme}>
      
      <IconContext.Provider value={{size: "1.3rem"}}>
        <Router/>
      </IconContext.Provider>
      
      <GlobalStyle/>
    </ThemeProvider>
  )
}

