/*eslint-disable*/

import { ButtonGroup, Flex, IconButton, Link, List, ListItem, Text, useColorModeValue } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { RiWhatsappFill } from 'react-icons/ri';

export default function Footer() {
	const textColor = useColorModeValue('gray.400', 'white');
	return (
		<Flex
			zIndex='3'
			flexDirection={{
				base: 'column',
				xl: 'row'
			}}
			alignItems={{
				base: 'center',
				xl: 'start'
			}}
			justifyContent='space-between'
			px={{ base: '30px', md: '50px' }}
			pb='30px'>
			<Text
				color={textColor}
				textAlign={{
					base: 'center',
					xl: 'start'
				}}
				mb={{ base: '20px', xl: '0px' }}>
				{' '}
				&copy; {new Date().getFullYear()}
				<Text as='span' fontWeight='500' ms='4px'>
					
					<Link mx='3px' color={textColor} href='https://www.simmmple.com' target='_blank' fontWeight='700'>
						Myltiane Alves
					</Link>
				</Text>
			</Text>
			<List display='flex'>
			<ButtonGroup variant="solid" size="sm" spacing={3}>
					<Link fontWeight='500' color={textColor} href='https://www.linkedin.com/in/myltiane-alves/'>
						
						<IconButton
							colorScheme="blue"
							icon={<RiWhatsappFill  />}
							aria-label="Up"
							alignItems={"center"}
							bg="#1AD03F"
						/>
					</Link>
					<Link fontWeight='500' color={textColor} href='https://www.linkedin.com/in/myltiane-alves/'>
					
                      <IconButton
                        colorScheme="green"
                        icon={<BsLinkedin />}
                        aria-label="Edit"
                        alignItems="center"
                        bg="#0073B1"
                      />
					</Link>
					<Link fontWeight='500' color={textColor} href='https://github.com/Myltiane-Alves'>
					
                      <IconButton
                        colorScheme="#24292F"
                        variant="outline"
                        icon={<AiFillGithub />}
                        aria-label="Delete"
                        alignItems="center"
						bg="#24292F"
                      />
					</Link>
			</ButtonGroup>
				
			</List>
		</Flex>
	);
}
