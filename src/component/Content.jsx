import React from 'react'
import {
    Card, 
    CardBody,
    Heading,
    Image,
    Stack,
    Text,
    Divider,
    CardFooter,
    ButtonGroup,
    Button,
    SimpleGrid,
    Box,
    Progress
  } from '@chakra-ui/react'
  import { Link } from "react-router-dom";

  const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

function Content(props) {
  return (
    <Box py={110} mx="30">
    <Heading mb="10">{props.postType}</Heading>
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
    {
        props.data.map((list) => {                  
return <Card maxW='sm'>
        <CardBody>
            <Image
            src={getImage(list.poster_path)}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
            <Heading size='md'>{list.original_title}</Heading>
            <Text>
            Realese : {list.release_date}
            </Text>
            <Box display="flex" justifyContent="center" alignItems="center">
                <Progress value={list.vote_average*10} flex="1" mr="5"/>
                <Text color='blue.600' fontSize='2xl'>
                    {list.vote_average*10}%
                </Text>
            </Box>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <ButtonGroup spacing='2'>
            <Link to={`/detail/${list.id}`}>
            <Button variant='solid' colorScheme='blue'>
                Show Detail Movie
            </Button>
            </Link>
            </ButtonGroup>
        </CardFooter>
        </Card>
        })
    }
        </SimpleGrid>
        </Box>
  )
}

export default Content