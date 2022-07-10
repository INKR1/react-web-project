import { useContext } from "react"

import FavoritesContext from "../store/favorites-context"
import CitiesList from "../components/cities/CitiesList"

export default function Favorites() {

  const favCtx = useContext(FavoritesContext);

  let content;

  if(favCtx.favorites.length === 0) {
    content = <p>You got no favorites yet</p>
  } else {
    content = <CitiesList cities={favCtx.favorites} />

  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  )
}
