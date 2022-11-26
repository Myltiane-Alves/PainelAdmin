import { Avatar, Box, Button, chakra, Checkbox, Divider, Flex, FormControl, FormHelperText, FormLabel, GridItem, Heading, Icon, Image, Input, InputGroup, InputLeftAddon, Radio, RadioGroup, Select, SimpleGrid, Stack, Table, Tbody, Td, Text, Textarea, Th, Thead, Tr, useColorModeValue, VisuallyHidden } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { useGlobalFilter, usePagination, useSortBy, useTable } from 'react-table';

// Custom components
import Card from 'components/card/Card';
import Menu from 'components/menu/MainMenu';
import { FaUser } from 'react-icons/fa';
export default function CreateProduct(props: { columnsData: any; tableData: any }) {
	const { columnsData, tableData } = props;

	const columns = useMemo(() => columnsData, [columnsData]);
	const data = useMemo(() => tableData, [tableData]);

	const tableInstance = useTable(
		{
			columns,
			data
		},
		useGlobalFilter,
		useSortBy,
		usePagination
	);

	const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow, initialState } = tableInstance;
	initialState.pageSize = 5;

	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
	return (
		<Card flexDirection='column' w='100%' px='0px' h='500px' bg="#edf3f8"
		_dark={{
			bg: "#111",
		}} >
			<FormControl>

				<Stack px='25px' justify='space-between' mb='20px' align='center'>
					<Text color={textColor} fontSize='32px' fontWeight='700' lineHeight='100%'>
						Cadastro de Produtos
					</Text>
					
				</Stack>
		


				<Box
					bg="#edf3f8"
					_dark={{
						bg: "#111",
					}}
					p={10}
				>
				

					<Divider
						my="5"
						borderColor="gray.300"
						_dark={{
							borderColor: "whiteAlpha.300",
						}}
						visibility={{
							base: "hidden",
							sm: "visible",
						}}
					/>

					<Box mt={[10, 0]}>
						<SimpleGrid
							display={{
								base: "initial",
								md: "grid",
							}}
							columns={{
								md: 3,
							}}
							spacing={{
								md: 6,
							}}
						>
							<GridItem
								colSpan={{
									md: 1,
								}}
							>
								<Box px={[4, 0]}>
									<Heading fontSize="lg" fontWeight="medium" lineHeight="6">
									 	Informações de Produtos
									</Heading>
									<Text
										mt={1}
										fontSize="sm"
										color="gray.600"
										_dark={{
											color: "gray.400",
										}}
									>
										Preencha todo o Formulário
									</Text>
								</Box>
							</GridItem>
							<GridItem
								mt={[5, null, 0]}
								colSpan={{
									md: 2,
								}}
							>
								<chakra.form
									method="POST"
									shadow="base"
									rounded={[null, "md"]}
									overflow={{
										sm: "hidden",
									}}
								>
									<Stack
										px={4}
										py={5}
										p={[null, 6]}
										bg="white"
										_dark={{
											bg: "#141517",
										}}
										spacing={6}
									>
										<SimpleGrid columns={6} spacing={6}>
											<FormControl as={GridItem} colSpan={[6, 3]}>
												<FormLabel
													htmlFor="first_name"
													fontSize="sm"
													fontWeight="md"
													color="gray.700"
													_dark={{
														color: "gray.50",
													}}
												>
													Nome do Produto
												</FormLabel>
												<Input
													type="text"
													name="first_name"
													id="first_name"
													autoComplete="given-name"
													mt={1}
													focusBorderColor="brand.400"
													shadow="sm"
													size="sm"
													w="full"
													rounded="md"
												/>
											</FormControl>

											<FormControl as={GridItem} colSpan={[6, 3]}>
												<FormLabel
													htmlFor="last_name"
													fontSize="sm"
													fontWeight="md"
													color="gray.700"
													_dark={{
														color: "gray.50",
													}}
												>
													Descrição Abreviada do produto
												</FormLabel>
												<Input
													type="text"
													name="last_name"
													id="last_name"
													autoComplete="family-name"
													mt={1}
													focusBorderColor="brand.400"
													shadow="sm"
													size="sm"
													w="full"
													rounded="md"
												/>
											</FormControl>

											<FormControl as={GridItem} colSpan={[6, 4]}>
												
												<FormLabel
													fontSize="sm"
													fontWeight="md"
													color="gray.700"
													_dark={{
														color: "gray.50",
													}}
												>
													Descrição detalhada do Produto
												</FormLabel>
												<Textarea
													placeholder=""
													mt={1}
													rows={3}
													shadow="sm"
													focusBorderColor="brand.400"
													fontSize={{
														sm: "sm",
													}}
												/>
												<FormHelperText>
													Descreva o Produto de Forma detalahada
												</FormHelperText>
											</FormControl>
										

											<FormControl as={GridItem} colSpan={[6, 3]}>
												<FormLabel
													htmlFor="country"
													fontSize="sm"
													fontWeight="md"
													color="gray.700"
													_dark={{
														color: "gray.50",
													}}
												>
													Preço do Produto
												</FormLabel>
												<Input
													type="text"
													name="price"
													id="price"
													autoComplete="given-price"
													mt={1}
													focusBorderColor="brand.400"
													shadow="sm"
													size="sm"
													w="full"
													rounded="md"
												/>
											</FormControl>

										
										</SimpleGrid>
										<FormControl>
											<FormLabel
												fontSize="sm"
												fontWeight="md"
												color="gray.700"
												_dark={{
													color: "gray.50",
												}}
											>
												Foto
											</FormLabel>
											<Flex alignItems="center" mt={1}>
											
											<Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />
											
												{/* <Avatar
													boxSize={12}
													bg="gray.100"
													_dark={{
														bg: "gray.800",
													}}
													icon={
														<Icon
															as={FaUser}
															boxSize={9}
															mt={3}
															rounded="full"
															color="gray.300"
															_dark={{
																color: "gray.700",
															}}
														/>
													}
												/> */}
												<Button
													type="button"
													ml={5}
													variant="outline"
													size="sm"
													fontWeight="medium"
													_focus={{
														shadow: "none",
													}}
												>
													Alterar Foto 
												</Button>
											</Flex>
										</FormControl>

										<FormControl>
											<FormLabel
												fontSize="sm"
												fontWeight="md"
												color="gray.700"
												_dark={{
													color: "gray.50",
												}}
											>
												Selecione a Foto
											</FormLabel>
											<Flex
												mt={1}
												justify="center"
												px={6}
												pt={5}
												pb={6}
												borderWidth={2}
												_dark={{
													color: "gray.500",
												}}
												borderStyle="dashed"
												rounded="md"
											>
												<Stack spacing={1} textAlign="center">
													<Icon
														mx="auto"
														boxSize={12}
														color="gray.400"
														_dark={{
															color: "gray.500",
														}}
														stroke="currentColor"
														fill="none"
														viewBox="0 0 48 48"
														aria-hidden="true"
													>
														<path
															d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
															strokeWidth="2"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</Icon>
													<Flex
														fontSize="sm"
														color="gray.600"
														_dark={{
															color: "gray.400",
														}}
														alignItems="baseline"
													>
														<chakra.label
															htmlFor="file-upload"
															cursor="pointer"
															rounded="md"
															fontSize="md"
															color="brand.600"
															_dark={{
																color: "brand.200",
															}}
															pos="relative"
															_hover={{
																color: "brand.400",
																_dark: {
																	color: "brand.300",
																},
															}}
														>
															<span>Enviar um arquivo</span>
															<VisuallyHidden>
																<input
																	id="file-upload"
																	name="file-upload"
																	type="file"
																/>
															</VisuallyHidden>
														</chakra.label>
														<Text pl={1}>ou Arraste e solte</Text>
													</Flex>
													<Text
														fontSize="xs"
														color="gray.500"
														_dark={{
															color: "gray.50",
														}}
													>
														PNG, JPG, GIF up to 10MB
													</Text>
												</Stack>
											</Flex>
										</FormControl>
									</Stack>
									<Box
										px={{
											base: 4,
											sm: 6,
										}}
										py={3}
										bg="gray.50"
										_dark={{
											bg: "#121212",
										}}
										textAlign="right"
									>
										<Button
											type="submit"
											colorScheme="brand"
											_focus={{
												shadow: "",
											}}
											fontWeight="md"
											fontSize={20}
											w={200}
											h={50}
										>
											Salvar
										</Button>
									</Box>
								</chakra.form>
							</GridItem>
						</SimpleGrid>
					</Box>
				</Box>;
			</FormControl>
		</Card>
	);
}
