import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerFooter,
    DrawerBody,
    DrawerCloseButton,
    Button,
    Input,
    Box,
    Heading,
    IconButton,Card, CardHeader, CardBody, CardFooter
  } from "@chakra-ui/react"
  import { HamburgerIcon } from '@chakra-ui/icons'

function SideMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
    <Box bg='#2C598D' w='100%' p={4} color='white'>
        <IconButton ref={btnRef} onClick={onOpen} aria-label='Search database' icon={<HamburgerIcon />} />
    </Box>
    <Card m={150}>
  <CardHeader>
    <Heading size='md'>Employee</Heading>
  </CardHeader>
  <CardBody>
  <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>nama</Th>
        <Th>alamat</Th>
        <Th>umur</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>joko</Td>
        <Td>jogja</Td>
        <Td isNumeric>23</Td>
      </Tr>
      <Tr>
        <Td>sugeng</Td>
        <Td>solo</Td>
        <Td isNumeric>21</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
  </CardBody>
</Card>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Logout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default SideMenu