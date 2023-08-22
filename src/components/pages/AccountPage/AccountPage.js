import React, { useContext, useEffect, useState } from "react";
import AccountMenu from "./menu/AccountMenu";
import { AccountContext } from "../../../contexts/AccountContext";
import { AuthContext } from "../../../contexts/AuthContext";
const AccountPage = () => {
  const { components, currentComponent } = useContext(AccountContext);
  const { isLoggedIn, user, signOut, getUserId } = useContext(AuthContext);
  const [firstName, setFirstName] = useState("");
  // let AWS = require('../../../data/aws-config');
  // let docClient = new AWS.DynamoDB.DocumentClient();

  // const items = [
  //   {
  //     "id": 1,
  //     "name": "Running",
  //     "description": "Lorem Ipsum",
  //     "labelText": "Sale",
  //     "imageUrl": "/products/product-1.jpg"
  //   },
  //   {
  //     "id": 2,
  //     "name": "Walking",
  //     "description": "Lorem Ipsum 2",
  //     "labelText": "",
  //     "imageUrl": "/products/product-2.jpg"
  //   },
  //   {
  //     "id": 3,
  //     "name": "Football",
  //     "description": "Lorem Ipsum 3",
  //     "labelText": "",
  //     "imageUrl": "/products/product-3.jpg"
  //   },
  //   {
  //     "id": 4,
  //     "name": "Basketball",
  //     "description": "Lorem Ipsum 4",
  //     "labelText": "",
  //     "imageUrl": "/products/product-4.jpg"
  //   },
  //   {
  //     "id": 5,
  //     "name": "Paddling",
  //     "description": "Lorem Ipsum 5",
  //     "labelText": "",
  //     "imageUrl": "/products/product-6.jpg"
  //   },
  //   {
  //     "id": 6,
  //     "name": "Tennis",
  //     "description": "Lorem Ipsum 6",
  //     "labelText": "",
  //     "imageUrl": "/products/product-6.jpg"
  //   },
  //   {
  //     "id": 7,
  //     "name": "Biking",
  //     "description": "Lorem Ipsum 7",
  //     "labelText": "",
  //     "imageUrl": "/products/product-7.jpg"
  //   },
  //   {
  //     "id": 9,
  //     "name": "Gym",
  //     "description": "Lorem Ipsum 9",
  //     "labelText": "",
  //     "imageUrl": "/products/product-9.jpg"
  //   },
  //   {
  //     "id": 10,
  //     "name": "Handball",
  //     "description": "Lorem Ipsum 10",
  //     "labelText": "",
  //     "imageUrl": "/products/product-10.jpg"
  //   },
  //   {
  //     "id": 11,
  //     "name": "Yoga",
  //     "description": "Lorem Ipsum 11",
  //     "labelText": "",
  //     "imageUrl": "/products/product-11.jpg"
  //   },
  //   {
  //     "id": 12,
  //     "name": "Skiing",
  //     "description": "Lorem Ipsum 12",
  //     "labelText": "",
  //     "imageUrl": "/products/product-11.jpg"
  //   },
  //   {
  //     "id": 13,
  //     "name": "Skydiving",
  //     "description": "Lorem Ipsum 13",
  //     "labelText": "",
  //     "imageUrl": "/products/product-12.jpg"
  //   },
  //   {
  //     "id": 14,
  //     "name": "Esports",
  //     "description": "Lorem Ipsum 14",
  //     "labelText": "",
  //     "imageUrl": "/products/product-8.jpg"
  //   },
  //   {
  //     "id": 15,
  //     "name": "Boxing",
  //     "description": "Lorem Ipsum 15",
  //     "labelText": "",
  //     "imageUrl": "/products/product-3.jpg"
  //   },
  //   {
  //     "id": 16,
  //     "name": "Cricket",
  //     "description": "Lorem Ipsum 16",
  //     "labelText": "",
  //     "imageUrl": "/products/product-1.jpg"
  //   }
  // ]
  //
  // items.forEach(item => {
  //   const params = {
  //     TableName: 'Categories',
  //     Item: item
  //   }
  //
  //   docClient.put(params, (err, data) => {
  //     if (err) {
  //       console.log(`Error adding item ${item.id}`, err);
  //
  //     } else {
  //       console.log(`Succesfully added item ${item.id}`, data);
  //     }
  //   })
  // })

  useEffect(() => {
    if (user && user.name) {
      const nameParts = user.name.split(" ");
      setFirstName(nameParts[0]);
    }
  }, [user]);

  return (
    <div className="max-w-screen-xl mx-auto flex flex-col py-5 desktop:flex-row">
      <div className=" w-full desktop:w-3/12">
        <AccountMenu />
      </div>
      <div className="mt-5 w-full pl-5 desktop:w-9/12">
        <button onClick={signOut}>Sign Out</button>
        {user && <div>Hi, {firstName}!</div>}
        <div> Your User Id is "{user.sub}"</div>
        <div className="">{components[currentComponent]}</div>
      </div>
    </div>
  );
};

export default AccountPage;
