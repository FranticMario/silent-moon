import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import supabase from '../../utils/supabase';
import { FavIcon } from '../../assets/svg/FavIcon';
import { ListenerIcon } from '../../assets/svg/ListenerIcon';
import { useFavouritesContext } from '../../context/FavoriteProvider';

export const UserCount = () => {
  const { article, id } = useParams();
  const { savedFav } = useFavouritesContext();
  const [favouriteCounter, setFavoriteCounter] = useState<number>(0);

  useEffect(() => {
    const fetchFav = async () => {
      const { data: favData, error: favError } = await supabase
        .from(article === 'yoga' ? 'user_favorites_yoga' : 'user_favorites_meditation')
        .select('*')
        .eq('item_id', id);

      if (favData) {
        setFavoriteCounter(favData.length);
      }

      if (favError) {
        console.error(favError, 'Error beim faverr');
      }
    };

    fetchFav();
  }, [savedFav]);

  return (
    <div className="flex gap-9">
      <div className="fav__container flex items-center gap-1.5">
        <FavIcon />
        <p>{favouriteCounter} Favorits</p>
      </div>

      <div className="listner__container flex items-center gap-1.5">
        <ListenerIcon />
        <p>{Math.ceil(favouriteCounter * 1.11)} Listener</p>
      </div>
    </div>
  );
};
