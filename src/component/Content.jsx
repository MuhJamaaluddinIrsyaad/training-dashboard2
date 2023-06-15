import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Card, 
    CardHeader, 
    CardBody,
    Heading
  } from '@chakra-ui/react'
  import { Link } from "react-router-dom";

function Content(props) {
  return (
    <Card m={110}>
        <CardHeader>
            <Heading size='md'>{props.postType}</Heading>
        </CardHeader>
        <CardBody>
            <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                    <Thead>
                    <Tr>
                        <Th>nama film</Th>
                        <Th>Tanggal Rilis</Th>
                        <Th>popularitas</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                        {
                            props.data.map((list) => {
                                return<Tr>
                                    <Td><Link to={`/detail/${props.postType}/${list.id}`}>{list.original_title}</Link></Td>
                                    <Td>{list.release_date}</Td>
                                    <Td>{list.popularity}</Td>
                                </Tr>
                            })
                        }
                    </Tbody>    
                </Table>
            </TableContainer>
        </CardBody>
    </Card>
  )
}

export default Content