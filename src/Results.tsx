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
  SimpleGrid,
  StatLabel,
  StatNumber,
  StatHelpText,
  Stat,
  ButtonGroup,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { obliqueOptions } from "./Data";

interface IResults {
	showResults: (show: boolean) => void;
}

export const Results = (props: IResults) => {
	const [refresh, setRefresh] = React.useState(false);

	const get_random = (list: string[]): string => {
		return list[Math.floor((Math.random()*list.length))];
	}

	const refreshResults = (): void => {
		window.scrollTo(0, 0);
		setRefresh(!refresh);
	}

	return (
		<VStack spacing={8}>
			<Heading>Results</Heading>
			<SimpleGrid columns={2} spacing={10}>
				<Stat>
					<StatLabel>Note</StatLabel>
					<StatNumber>{get_random(obliqueOptions.notes)} {get_random(obliqueOptions.scale)}</StatNumber>
					<StatHelpText>Starting chord or key</StatHelpText>
				</Stat>
				<Stat>
					<StatLabel>Featured Instrument</StatLabel>
					<StatNumber>{get_random(obliqueOptions.instrumentation)}</StatNumber>
				</Stat>
				<Stat>
					<StatLabel>Featured effect</StatLabel>
					<StatNumber>{get_random(obliqueOptions.effects)}</StatNumber>
				</Stat>
				<Stat>
					<StatLabel>Type of percussion</StatLabel>
					<StatNumber>{get_random(obliqueOptions.percussion)}</StatNumber>
				</Stat>
				<Stat>
					<StatLabel>Musical theme</StatLabel>
					<StatNumber>{get_random(obliqueOptions.themes)}</StatNumber>
				</Stat>
				<Stat>
					<StatLabel>Song Length</StatLabel>
					<StatNumber>{get_random(obliqueOptions.lengthOfSong)}</StatNumber>
				</Stat>
				<Stat>
					<StatLabel>Tempo</StatLabel>
					<StatNumber>{get_random(obliqueOptions.tempo)}</StatNumber>
				</Stat>
				<Stat>
					<StatLabel>As played by</StatLabel>
					<StatNumber>{get_random(obliqueOptions.bands)}</StatNumber>
				</Stat>
			</SimpleGrid>
			<Box borderWidth='1px' borderRadius='lg' pt={5} pb={10} px={7} bg='orange.50' boxShadow='lg' maxW='md'>
				<Text fontSize='sm' as='i'>Oblique Strategies</Text>
				<Heading as='h3' mt={2} size='lg'>{get_random(obliqueOptions.enoStrategies)}</Heading>
			</Box>
			<ButtonGroup gap='4'>
				<Button colorScheme='gray' onClick={() => props.showResults(false)}>Go Back</Button>
				<Button colorScheme='blue' onClick={() => refreshResults()}>Refresh</Button>
			</ButtonGroup>
		</VStack>
	)
}
