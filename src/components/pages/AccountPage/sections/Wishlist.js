import React, { useState, useEffect, useContext } from "react";
import WishlistStructure from '../../../organisms/Wishlist/WishlistStructure';
import { AuthContext } from '../../../../contexts/AuthContext';
import { WishlistContext } from '../../../../contexts/WishlistContext';

const Wishlist = () => {
  const { user } = useContext(AuthContext);
  const { getWishlistItems } = useContext(WishlistContext);

  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const items = await getWishlistItems(user.sub);
      setWishlistItems(items);
    };

    fetchData();
  }, [user.sub]); // This will run once when the component mounts and whenever user.sub changes

  return (
    <div>
      <h2>Wishlist</h2>
      <ul>
        {wishlistItems.map((item) => (
          <li key={item.id}>
            {item.productName} - ${item.productPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
