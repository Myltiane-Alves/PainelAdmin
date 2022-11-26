import { Flex, useColorModeValue, SimpleGrid, Stack, ButtonGroup, IconButton, Button, chakra, Icon } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { useGlobalFilter, usePagination, useSortBy, useTable } from 'react-table';
import { AiFillEdit, AiTwotoneLock } from 'react-icons/ai';
import { BsFillTrashFill, BsBoxArrowUpRight  } from 'react-icons/bs';
// Custom components
import Card from 'components/card/Card';

export default function List(props: { columnsData: any; tableData: any }) {
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
  initialState.pageSize = 11;

  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
  return (
    <Card flexDirection='column' w='100%' px='0px' >
      <Flex
        w="full"
        // bg="#edf3f8"
        // _dark={{
        //   bg: "#3e3e3e",
        // }}
        p={50}
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          direction={{
            base: "column",
          }}
          w="full"
          // bg={{
          //   md: bg,
          // }}
          shadow="lg"
        >
          
            
              <Flex
                direction={{
                  base: "row",
                  md: "column",
                }}
                // bg={bg2}
                // key={tid}
              >
                <SimpleGrid
                  spacingY={3}
                  columns={{
                    base: 1,
                    md: 4,
                  }}
                  w={{
                    base: 120,
                    md: "full",
                  }}
                  textTransform="uppercase"
                  // bg={bg3}
                  color={"gray.500"}
                  py={{
                    base: 1,
                    md: 4,
                  }}
                  px={{
                    base: 2,
                    md: 10,
                  }}
                  fontSize="md"
                  fontWeight="hairline"
                >
                  <span>Nome</span>
                  <span>Data de Criação</span>
                  <span>Autor</span>
                  <chakra.span
                    textAlign={{
                      md: "right",
                    }}
                  >
                    Ações
                  </chakra.span>
                </SimpleGrid>
                <SimpleGrid
                  spacingY={3}
                  columns={{
                    base: 1,
                    md: 4,
                  }}
                  w="full"
                  py={2}
                  px={10}
                  fontWeight="hairline"
                >
                  <span>Camiseta</span>
                  <chakra.span
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                  >
                    26/01/2022
                  </chakra.span>
                  <Flex>
                    <Button
                      size="sm"
                      variant="solid"
                      leftIcon={<Icon as={AiTwotoneLock} />}
                      colorScheme="purple"
                    >
                      View Profile
                    </Button>
                  </Flex>
                  <Flex
                    justify={{
                      md: "end",
                    }}
                  >
                    <ButtonGroup variant="solid" size="sm" spacing={3}>
                      <IconButton
                        colorScheme="blue"
                        icon={<BsBoxArrowUpRight  />}
                        aria-label="Up"
                        alignItems={"center"}
                        bg="#9AE6B4"
                      />
                      <IconButton
                        colorScheme="green"
                        icon={<AiFillEdit />}
                        aria-label="Edit"
                        alignItems="center"
                        bg="#9ae6b4"
                      />
                      <IconButton
                        colorScheme="red"
                        variant="outline"
                        icon={<BsFillTrashFill />}
                        aria-label="Delete"
                        alignItems="center"
                      />
                    </ButtonGroup>
                  </Flex>
                </SimpleGrid>
              </Flex>
           
        </Stack>
      </Flex>

    </Card>
  );
}
