import React from 'react';

const AuctionList = () => {
  const auctions = [
    { id: 1, title: 'Antique Vase', price: 100 },
    { id: 2, title: 'Vintage Car Model', price: 250 },
    { id: 3, title: 'Limited Edition Painting', price: 500 },
    { id: 4, title: 'Skibidiak', price: 600 }
    { id: 5, title: 'Bread', price: 1000}
  ];

  return (
    <div className="auction-list p-5">
      <h2 className="text-2xl font-bold mb-4">Auction Listings</h2>
      <ul>
        {auctions.map((auction) => (
          <li key={auction.id} className="border p-4 mb-2 rounded-lg shadow">
            <h3 className="text-lg font-semibold">{auction.title}</h3>
            <p>Starting Price: ${auction.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuctionList;
