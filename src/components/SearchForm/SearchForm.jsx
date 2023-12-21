import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import styles from './SearchForm.module.css';

export const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('searchQuery') ?? '';

  const handleSubmit = evt => {
    evt.preventDefault();
    const inputValue = evt.target.elements.searchQuery.value.trim();

    if (inputValue === '') {
      toast.error("You didn't enter anything. Try again!");
      return;
    }

    setSearchParams({ searchQuery: inputValue });
    evt.currentTarget.reset();
  };

  return (
    <div className={styles.FormContainer}>
      <form className={styles.Form} autoComplete="off" onSubmit={handleSubmit}>
        <input
          className={styles.InputStyled}
          type="text"
          placeholder="Enter movie name..."
          name="searchQuery"
          defaultValue={search}
        />
        <button className={styles.ButtonStyled} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
