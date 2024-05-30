export interface favouritesInterface {
  ids: number[];
}

export function getLocalFavs() {
  return JSON.parse(localStorage.getItem("favourites")?.toString() || "[]");
}

export function setLocalFavs(favourites: favouritesInterface[]) {
  localStorage.setItem("favourites", JSON.stringify(favourites));
}

export function addFavourite(id: number) {
  const favourites = getLocalFavs();
  if (isFavourite(id)) {
    alert("Item already in favourites");
    return;
  }

  setLocalFavs([...favourites, id]);
}

export function removeFavourite(id: number) {
  const favourites = getLocalFavs();
  setLocalFavs(favourites.filter((favId: number) => favId !== id));
}

export function isFavourite(id: number) {
  const favourites = getLocalFavs();
  return favourites.some((favId: number) => favId === id);
}
