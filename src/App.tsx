import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./themes/defaultTheme"
import { GlobalStyle } from "./global"
import Router from "./Router"

export default function App() {
  
  return (
    <ThemeProvider theme={defaultTheme}>

      
      <Router/>

      <GlobalStyle/>
    </ThemeProvider>
  )
}

