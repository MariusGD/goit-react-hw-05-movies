import { useParams } from 'react-router-dom';
import { fetchCast } from '../Services/ApiMovies';
import { useState, useEffect } from 'react';
import styles from './Cast.module.css';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      if (!movieId) return;

      try {
        const data = await fetchCast(movieId);
        setCast(data.cast);
      } catch (error) {
        console.error('Error fetching cast:', error.message);
      }
    };

    fetchData();
  }, [movieId]);

  const defaultActorImg = 'https://i.ibb.co/L9KRX9r/no-image-icon-w200.jpg';

  return (
    <div>
      {cast.length === 0 && <p>No cast information for this movie...</p>}
      <ul className={styles.ListActors}>
        {cast.map(actor => (
          <li className={styles.Actor} key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : defaultActorImg
              }
              alt={actor.name}
            />
            <p>{actor.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
