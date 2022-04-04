import {
	Accordion,
	AccordionItem,
	AccordionButton,
	Box,
	AccordionIcon,
	AccordionPanel,
	Container,
	Heading,
	chakra,
	Text
} from '@chakra-ui/react';

const Item = ({title, text, children, ...props}) => {
	return (
		<AccordionItem>
			<h2>
				<AccordionButton
					_expanded={{bg: 'red.500', color: 'white'}}
					_focus={{
						boxShadow: '0'
					}}
				>
					<Box flex="1" textAlign="left">
						{title}
					</Box>
					<AccordionIcon />
				</AccordionButton>
			</h2>
			<AccordionPanel
				pb={4}
				align="start"
				bg="yellow.300"
				color="gray.900"
				{...props}
			>
				<Text
					fontSize={'md'}
					lineHeight="tall"
					fontWeight="normal"
					letterSpacing="wide"
					as={'div'}
				>
					{text || children}
				</Text>
			</AccordionPanel>
		</AccordionItem>
	);
};

export default function FAQs() {
	return (
		<Box align="center" my="12" mx="4">
			<Heading fontSize={'4xl'} my={8}>
				Frequently Asked Questions
			</Heading>
			<Container
				mx="auto"
				bg={'gray.700'}
				maxW="container.md"
				p="5"
				rounded="lg"
			>
				<Accordion allowToggle>
					<Item
						title="What is Pizza stack?"
						text="Pizza stack is a counter-type franchise format offering a revolutionary on-the-go snack. Pizza and drink in a cup. World's first ever pizza and drink in a cup!"
					/>
					<Item
						title="What type of franchise is offered?"
						text="Pizza Stack is offering a single unit franchise for the operation and development of a unit within a trade area."
					/>
					<Item title="What does the total franchise investment cover?">
						<Heading fontSize={'md'} mb={2}>
							The total investment covers the following:
						</Heading>
						<chakra.ul mx="8">
							<li>Use of licensed trademark, name, and logo</li>
							<li>Site selection and evaluation assistance</li>
							<li>Architectural design and construction assistance</li>
							<li>Pre-opening and Start-up assistance</li>
							<li>Comprehensive Franchise Operations Manual</li>
							<li>Training on management, operations, and customer service</li>
							<li>Initial inventory and supplies</li>
							<li>Grand opening and local store marketing assistance</li>
							<li>
								Total support package given to franchisees to be able to open
								and run a franchise unit smoothly and profitably
							</li>
						</chakra.ul>
					</Item>
					<Item
						title="How much is the royalty fee?"
						text="Pizza stack collects 3% from the gross sales monthly"
					/>
					<Item
						title="How much is the system-wide advertising fee?"
						text="Pizza stack collects 0.50% from the gross sales monthly"
					/>
					<Item
						title="What do the system-wide and advertising fees cover?"
						text="System-wide advertising contribution will be used for digital/traditional marketing and social media promotions. With BW Bakeshop, franchisees are not required to pay monthly system-wide ad fee.
                        Franchisees though should allot 0.50% of gross sallies monthly for local advertising and promotion."
					/>
					<Item
						title="What training will we receive as franchisees?"
						text="The franchise owner and the designated management team and outlet personnel will be given extensive training both at the franchisor headquarters, as well as the franchisee store (including a dry-run or soft opening). The training will be conducted within 7 days before grand opening of the franchisee store. Covering all aspects of the business operation and management as well as customer service."
					/>
					<Item title="What other continuing support will I receive?">
						<Heading fontSize={'md'} mb={2}>
							As our franchisee, you will receive continuing support from us
							during the term of the franchise as follows:
						</Heading>
						<chakra.ul mx="8">
							<li>Technical support</li>
							<li>Sales and operation performance reporting guidance</li>
							<li>Regular field visits and business guidance</li>
							<li>Updates on the new products and services</li>
						</chakra.ul>
					</Item>
					<Item
						title="Will I have an exclusive territory?"
						text="You will not be granted an exclusive territory. Pizza stack shall grant a single unit franchise for every 10,000 population in a given trade area. However, franchisor will see to it that each site will service the population to the fullest to make the business viable."
					/>
					<Item
						title="What is the term of the franchise agreement?"
						text="The initial term of the franchise agreement is 3 years renewable to 2 additional terms of 3 years each for a total of 9 years."
					/>
					<Item
						title="Who will look for the location?"
						text="The franchisee searches for their location and submits the sketch location map and details of the proposed location to the franchisor for evaluation and approval."
					/>
				</Accordion>
			</Container>
		</Box>
	);
}
