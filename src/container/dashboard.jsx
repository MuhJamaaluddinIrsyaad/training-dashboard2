import React, { Component } from 'react'
import SideMenu from '../component/SideMenu'
import { ChakraProvider } from '@chakra-ui/react'

export class dashboard extends Component {
  render() {
    return (
        <ChakraProvider>
        <SideMenu/>
        </ChakraProvider>
    )
  }
}

export default dashboard