import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Movies from "./components/Movies";
import Hero from "./components/Hero";
import Header from "./components/Header";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "e0bffddbab49862af731c069375dbebc";

const endpoints = {
  originals: "/discover/tv",
  trending: "/trending/all/week",
  now_playing: "/movie/now_playing",
  popular: "/movie/popular",
  top_rated: "/movie/top_rated",
  upcoming: "/movie/upcoming",
};

function App() {
  const [originals, setOriginals] = useState([]);
  const [trending, setTrending] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    // Load Originals
    axios
      .get(`${URL}${endpoints.originals}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setOriginals(res.data.results));

    // Get other categories with the same pattern here
    //2
    axios
      .get(`${URL}${endpoints.trending}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setTrending(res.data.results));
    // 3
    axios
      .get(`${URL}${endpoints.now_playing}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setNowPlaying(res.data.results));
    //4
    axios
      .get(`${URL}${endpoints.popular}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setPopular(res.data.results));
    //5
    axios
      .get(`${URL}${endpoints.top_rated}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setTopRated(res.data.results));
    //6
    axios
      .get(`${URL}${endpoints.upcoming}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setUpcoming(res.data.results));

  }, []);
  useEffect(() => console.log(originals), [originals]);

  return (
    <>


      <Header />
      <Hero movie={originals[Math.floor(Math.random() * originals.length)]} />
      <Movies title="Netxus originals" movies={originals} />
      <Movies title="Netxus trending" movies={trending} />
      <Movies title="Netxus popular" movies={popular} />
      <Movies title="Netxus upcoming" movies={upcoming} />
      <Movies title="Top Rated" movies={topRated} />
      <Movies title="Now Playing" movies={nowPlaying} />


    </>
  );
}

export default App;
