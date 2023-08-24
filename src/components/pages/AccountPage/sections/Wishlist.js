import React, { useState, useEffect, useContext, Suspense } from "react";
import WishlistStructure from '../../../organisms/Wishlist/WishlistStructure';
import { AuthContext } from '../../../../contexts/AuthContext';
import { WishlistContext } from '../../../../contexts/WishlistContext';
const LazyComponent = React.lazy(() =>
  import("../../../organisms/Product/Product"),
);

const Placeholder = () => {
  return <div>Loading...</div>;
};

const Wishlist = () => {
  const { user } = useContext(AuthContext);
  const [wishlistItems, setWishlistItems] = useState([]);
  const { getWishlistItems, wishlist } = useContext(WishlistContext);



  useEffect(() => {
    const fetchData = async () => {
      const product = await getWishlistItems(user.sub);
      setWishlistItems(product);
    };

    fetchData();
  }, [user.sub]); // This will run once when the component mounts and whenever user.sub changes

  return (
    <div>
      <h2>Wishlists</h2>
      {console.table(wishlistItems)}
      <div className="sm:px-6 mx-auto mt-10 max-w-7xl px-4 ">
        <Suspense fallback={<Placeholder />}>
          <LazyComponent
            listType="Wishlist"
            showProductList={true}
            wishlistItems={wishlistItems.filter(product => product !== undefined)}
          />
        </Suspense>
      </div>
      <ul>

        {/*{wishlistItems.filter(item => item !== undefined).map((item,index) => (*/}
        {/*  <li key={item.id}>*/}
        {/*    <img src={item.imageUrl} alt={item.name} />*/}
        {/*    <h3>{item.name}</h3>*/}
        {/*    <p>{item.description}</p>*/}
        {/*    <p>${item.price}</p>*/}
        {/*    {item.labelText && <span>{item.labelText}</span>}*/}
        {/*    {item.oldPrice && <p>Old Price: ${item.oldPrice}</p>}*/}
        {/*  </li>*/}
        {/*))}*/}
      </ul>
    </div>
  );
};

export default Wishlist;
