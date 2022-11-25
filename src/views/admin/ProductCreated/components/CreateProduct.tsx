import { Box, Button, Flex, FormControl, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { useGlobalFilter, usePagination, useSortBy, useTable } from 'react-table';

// Custom components
import Card from 'components/card/Card';
import Menu from 'components/menu/MainMenu';
export default function CreateProduct(props: { columnsData: any; tableData: any }) {
	const { columnsData, tableData } = props;

	const columns = useMemo(() => columnsData, [ columnsData ]);
	const data = useMemo(() => tableData, [ tableData ]);

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
		<Card flexDirection='column' w='100%' px='0px' h='500px'>
			<Flex px='25px' justify='space-between' mb='20px' align='center'>
				<Text color={textColor} fontSize='22px' fontWeight='700' lineHeight='100%'>
					Cadastro de Produtos
				</Text>
				<Menu />
			</Flex>
            <FormControl
            
            >

                <Box background-color="red" w="500px">
                    
                        Cadastrando Produtos da Loja
                            
            
                    <Box background-color="red" w="500px">
                    
                    <Button colorScheme='blue'>Button</Button>
                
                                    
                    </Box>
                </Box>
            </FormControl>
		</Card>
	);
}
