import React from 'react'
import {useParams} from "react-router-dom"
import {
    Card, 
    CardBody,
    Heading,
    Image,
    Stack,
    CardFooter,
    Text,
    Button,
    Box
  } from '@chakra-ui/react'
  import axios from 'axios'

function DetailContent() {

    const [state, setstate] = React.useState({})

    const {ContentId} = useParams();

    const api_key = "19feafc002d5a11018b8d141dedf0402";

    const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

    React.useEffect(() => {
    
        axios.get(`https://api.themoviedb.org/3/movie/${ContentId}`,{
        params: {
            api_key : api_key
        }
        })
        .then((response) => {
            //handle success
            setstate(response.data);
          })
          .catch(function (error) {
            // handle error
            console.log(error.message);
          })
        
    }, [])

    return (
        <Box py={190} mx="110">
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={getImage(state.poster_path)}
                alt='Caffe Latte'
            />

            <Stack>
                <CardBody>
                <Heading size='md'>{state.original_title}</Heading>

                <Text py='2'>
                    {state.overview}
                </Text>
                </CardBody>

                <CardFooter>
                <Button variant='solid' colorScheme='blue'>
                    Buy Ticket
                </Button>
                </CardFooter>
            </Stack>
            </Card>
        </Box>
    )
}

export default DetailContent