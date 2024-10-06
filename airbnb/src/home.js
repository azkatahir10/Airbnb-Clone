import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import Categories from './Categories';
import ListingCard from './ListingCard';
import Footer from './Footer';
import './Home.css';

const mockListings = [
  {
    image: 'property1.jpg',
    title: 'Beautiful Beachfront Property',
    type: 'Entire home',
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    price: 200,
    rating: 4.5,
  },
  {
    image: 'property2.jpg',
    title: 'Cabin in the Woods',
    type: 'Private room',
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    price: 150,
    rating: 4.7,
  },
];

const Home = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setListings(mockListings);
  }, []);

  return (
    <div className="home">
      <Navbar />
      <SearchBar />
      <Categories />
      <div className="listings">
        {listings.map((listing, index) => (
          <ListingCard key={index} property={listing} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
