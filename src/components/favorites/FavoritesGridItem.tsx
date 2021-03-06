import { FavoriteGridInfo } from './FavoriteInfo';
import starshipImg from '../../images/starship.png';
import { favStartRemove } from '../../app/services/favorites/actions';
import { useDispatch } from 'react-redux';

interface Props {
  starship: Starship;
}

export const FavoritesGridItem = ({ starship }: Props) => {
  const dispatch = useDispatch();
  const handleDelete = (starship: Starship) => {
    dispatch(favStartRemove(starship));
  };

  return (
    <div className="col-12 col-md-6 col-lg-4 my-2">
      <div className="card bg-dark p-4 p-lg-3 h-100 position-relative">
        <button
          className="btn btn-favorite btn-danger rounded-circle"
          onClick={handleDelete.bind(this, starship)}
          title="Remove from favorites"
        >
          <i className="fas fa-trash text-light" />
        </button>
        <div className="card-block">
          <div className="card-title">
            <h4>{starship.name}</h4>
          </div>
          <img
            src={starshipImg}
            alt={starship.name}
            className="img-fluid w-50 py-4"
          />
          <div className="card-text text-start">
            <FavoriteGridInfo label="Name" text={starship.name} />
            <FavoriteGridInfo label="Model" text={starship.model} />
            <FavoriteGridInfo
              label="Manufacturers"
              text={starship.manufacturers}
            />
            <FavoriteGridInfo
              label="Cost in Credits"
              text={starship.costInCredits}
            />
            <FavoriteGridInfo label="Length" text={starship.length} />
            <FavoriteGridInfo
              label="Max Atmosphering Speed"
              text={starship.maxAtmospheringSpeed}
            />
            <FavoriteGridInfo label="Crew" text={starship.crew} />
            <FavoriteGridInfo label="Passengers" text={starship.passengers} />
            <FavoriteGridInfo
              label="Starship Class"
              text={starship.starshipClass}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
