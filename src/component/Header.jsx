import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import {
    Box,
    IconButton
  } from "@chakra-ui/react"
  import { HamburgerIcon } from '@chakra-ui/icons'
  import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerFooter,
    DrawerBody,
    DrawerCloseButton,
    Button,
    Input, Avatar, AvatarBadge, Stack, Flex, Spacer
  } from "@chakra-ui/react"
  import { Link } from "react-router-dom";

 const Header = () => {
    const { onOpen, isOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
  return (
    <>
    <Box bg='#2C598D' w='100%' p={4} color='white' top="0" position="fixed" zIndex="sticky">
      <Flex>
        <IconButton ref={btnRef} onClick={onOpen} aria-label='Search database' icon={<HamburgerIcon />} />
        <Spacer />
        <Stack direction='row' spacing={4}>
          <Avatar>
            <AvatarBadge boxSize='1.25em' bg='green.500' />
          </Avatar>
        </Stack>
      </Flex>
    </Box>
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
        <Input mb="10" placeholder="Type here..." />
        <Link to="/" onClick={onClose}>
          <Box mb="5" bg='#E6FFFA' w='100%' p={4} color='#285e61' borderRadius='md'>
            Now Playing
          </Box>
        </Link>
        <Link to="/popular" onClick={onClose}>
          <Box mb="5" bg='#E6FFFA' w='100%' p={4} color='#285e61' borderRadius='md'>
            Popular
          </Box>
        </Link>
        <Link to="/up-coming" onClick={onClose}>
          <Box mb="5" bg='#E6FFFA' w='100%' p={4} color='#285e61' borderRadius='md'>
            Up Cooming
          </Box>
        </Link>
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

export default Header