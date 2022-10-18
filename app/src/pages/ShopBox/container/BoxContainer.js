import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { isPokemonSelector } from "../../../selectors";
import { ROUTE_NAMES } from "../../../router/routeNames";
import { loadPokemons } from "../redusers";
import PokemonCard from "../components";
import { usePagination } from "../../../hooks";
import { Pagination } from "@mui/material";
import Spinner from "../../../components/Spinner";

const BoxContainer = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [page, handlePageChange] = usePagination(1);

  const { pokemons, isLoading } = useSelector(isPokemonSelector);

  useEffect(() => {
    dispatch(loadPokemons(page));
  }, [page]);

  const handleNavigateToPokemonDetail = (pokemonId) => {
    navigate(`${ROUTE_NAMES.SHOP_BOX}/${pokemonId}`);
  };

  return (
    <div>
      <h1>Store pokemons</h1>
      <div>
        {isLoading ? (
          <Spinner />
        ) : (
          pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              handleClick={() => handleNavigateToPokemonDetail(pokemon.id)}
            />
          ))
        )}
      </div>

      <div>
        <Pagination
          isDisabled={isLoading}
          currentPage={page}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default BoxContainer;
