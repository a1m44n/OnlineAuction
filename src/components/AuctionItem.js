import React, { useState } from 'react';

const AuctionItem = ({ auction }) => {
  const [bid, setBid] = useState(auction.price);
  const [userBid, setUserBid] = useState('');

  const handleBidSubmit = (e) => {
    e.preventDefault();
    if (userBid > bid) {
      setBid(userBid);
      alert('Bid placed successfully!');
    } else {
      alert('Your bid must be higher than the current bid.');
    }
  };

  return (
    <li className="border p-4 mb-2 rounded-lg shadow">
      <img src={auction.imgUrl} alt={auction.title} className="w-full h-40 object-cover mb-2 rounded-lg" />
      <h3 className="text-lg font-semibold">{auction.title}</h3>
      <p>Current Bid: ${bid}</p>
      <form onSubmit={handleBidSubmit}>
        <input
          type="number"
          value={userBid}
          onChange={(e) => setUserBid(e.target.value)}
          className="border rounded p-1 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">
          Place Bid
        </button>
      </form>
    </li>
  );
};

export default AuctionItem;