import React, {useContext} from 'react';
import { WishlistContext } from '../../../contexts/WishlistContext';
import { AuthContext } from '../../../contexts/AuthContext';

const WishlistStructure = async () => {
  const { user } = useContext(AuthContext);
  const { getWishlistItems } = useContext(WishlistContext);
  const wishlistItems = await getWishlistItems(user.sub);

  return (
    <>
      {JSON.stringify(wishlistItems)}
    </>
  )
}

export default WishlistStructure;
