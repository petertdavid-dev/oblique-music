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

interface IHome {
  showResults: (show: boolean) => void;
}

export const Home = (props: IHome) => (
  <VStack spacing={8}>
    <Heading>Oblique Strategies and Limitations</Heading>
    <Image src={process.env.PUBLIC_URL + '/eno.jpg'} alt='Eno loves recording' borderRadius='md' />
    <Text>
      Eno loves recording.
    </Text>
    <Button colorScheme='blue' onClick={() =>props.showResults(true)}>Generate Constraints</Button>
  </VStack>
)
