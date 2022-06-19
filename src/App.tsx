import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
  Button,
  Heading,
  Image,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Results } from "./Results";
import { Home } from "./Home";

export const App = () => {

  const [showResults, setShowResults] = React.useState(false);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          {showResults ? <Results showResults={() => setShowResults(false)} /> : <Home showResults={() => setShowResults(true)} />}
        </Grid>
      </Box>
    </ChakraProvider>
  );
}
