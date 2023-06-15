import React, { Component } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Header from '../component/Header';
import Content from '../component/Content'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailContent from '../component/DetailContent'

const api_key = "19feafc002d5a11018b8d141dedf0402";

class dashboard extends Component {

  state = {
    postNowPlaying : [],
    postPopular : [],
    postUpcoming : [],
    postType : ""
  }

  componentDidMount() {
    axios.get('https://api.themoviedb.org/3/movie/now_playing',{
      params: {
        api_key : api_key
      }
    })
  .then((response) => {
    //handle success
    this.setState({
      postNowPlaying : response.data.results
    })
  })
  .catch(function (error) {
    // handle error
    console.log(error.message);
  })

  axios.get('https://api.themoviedb.org/3/movie/popular',{
      params: {
        api_key : api_key
      }
    })
  .then((response) => {
    //handle success
    this.setState({
      postPopular : response.data.results
    })
  })
  .catch(function (error) {
    // handle error
    console.log(error.message);
  })

  axios.get('https://api.themoviedb.org/3/movie/upcoming',{
      params: {
        api_key : api_key
      }
    })
  .then((response) => {
    //handle success
    this.setState({
      postUpcoming : response.data.results
    })
  })
  .catch(function (error) {
    // handle error
    console.log(error.message);
  })
  } 

  render() {
    return (
      <ChakraProvider>
      <BrowserRouter>
      <Header/>
      <Routes>
            <Route path="/up-coming" element={<Content data={this.state.postUpcoming} postType="Up Coming"/>}/>
            <Route path="/popular" element={<Content data={this.state.postPopular} postType="Popular"/>}/>
            <Route path="/" element={<Content data={this.state.postNowPlaying} postType="Now Playing"/>}/>
            <Route path="/detail/:postType/:ContentId" element={<DetailContent/>}/>
      </Routes>
      </BrowserRouter>
      </ChakraProvider>
    )
  }
}

export default dashboard