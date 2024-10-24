import React, { useState, useEffect } from 'react';
import AuctionItem from './AuctionItem'; // Import the AuctionItem component

import vaseImg from '../images/vase.jpg';
import carImg from '../images/car.jpg';
import paintingImg from '../images/painting.jpg';


const AuctionList = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    const mockData = [
      { id: 1, title: 'Antique Vase', price: 100, imgUrl: vaseImg },
      { id: 2, title: 'Vintage Car Model', price: 250, imgUrl: carImg },
      { id: 3, title: 'Limited Edition Painting', price: 500, imgUrl: paintingImg },
    ];
    setAuctions(mockData);
  }, []);

  return (
    <div className="auction-list p-5">
      <h2 className="text-2xl font-bold mb-4">Auction Listings</h2>
      <ul>
        {auctions.map((auction) => (
          <AuctionItem key={auction.id} auction={auction} /> // Render AuctionItem
        ))}
      </ul>
    </div>
  );
};

export default AuctionList;
