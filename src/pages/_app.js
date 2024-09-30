import "@/styles/globals.css" // Ensure this path is correct
import { ThemeProvider } from "next-themes"

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
