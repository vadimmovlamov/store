import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { isPokemonSelector } from "../../../selectors";
import { loadPokemons } from "../redusers";
import { ROUTE_NAMES } from "../../../router/routeNames";
import Layout from "../../../components/Layouts/shop";
import { usePagination } from "../../../hooks/usePagination";

const BoxContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pokemons = useSelector(isPokemonSelector);
  const [page, handlePageChange] = usePagination(1);

  const handleNavigateToPokemonDetail = useCallback(
    (pokemonId) => {
      navigate(`${ROUTE_NAMES.SHOP_BOX}/${pokemonId}`);
    },
    [navigate]
  );

  useEffect(
    (page) => {
      dispatch(loadPokemons(page));
    },
    [dispatch, page]
  );

  return (
    <Layout
      page={page}
      error={pokemons.error}
      pokemons={pokemons.data}
      onPageChange={handlePageChange}
      isLoading={pokemons.isLoading}
      onNavigateToPokemonDetail={handleNavigateToPokemonDetail}
    />
  );
};

export default BoxContainer;
