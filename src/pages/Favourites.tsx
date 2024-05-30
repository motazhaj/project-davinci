import { useEffect, useState } from "react";
import { getLocalFavs } from "../utility/favouritesUtils";
import ProductGrid from "../components/product/ProductGrid";
import NavSpacer from "../components/layout/NavSpacer";
import { productInterface } from "../utility/productsUtils";

const Favourites = () => {
  const [favourites, setFavourites] = useState<productInterface[] | []>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch("http://localhost:5000/favourites?favs=" + JSON.stringify(getLocalFavs()))
      .then((data) => {
        data.json().then((data) => {
          setFavourites(data);
        });
      })
      .catch((err) => console.warn("Failed to fetch favourites: ", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="-mt-24">
      <NavSpacer />
      <div className="mt-12 w-full max-w-screen-lg mx-auto flex flex-col gap-4">
        <ProductGrid products={favourites} loading={loading} />
      </div>
    </main>
  );
};

export default Favourites;
