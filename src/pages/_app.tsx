import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "@/components/Navbar/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  const colors = {
    brand: {
      50: "#ecefff",
      100: "#cbceeb",
      200: "#a9aed6",
      300: "#888ec5",
      400: "#666db3",
      500: "#4d5499",
      600: "#3c4178",
      700: "#2a2f57",
      800: "#181c37",
      900: "#080819",
    },
  };
  const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
  };

  const theme = extendTheme({ colors, config });

  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}