import React, { useEffect, useState } from "react";
import Apidata from "./Apidata";

const Apidatas = () => {
  const [api, setapi] = useState([]);

  useEffect(() => {
    apis();
  }, []);

  const apis = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(
        (result) => {
          setapi(result);
        },
        (error) => {
          setapi(null);
        }
      );
  };

  return (
    <>
      <div className="apidatas ">
        {api.map((apis) => (
          <Apidata key={apis.id} apis={apis} />
        ))}
      </div>
    </>
  );
};
export default Apidatas;
