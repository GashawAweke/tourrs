import { useEffect, useState } from 'react';
import Loading from './loading';
import Tours from './tours';

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  useEffect(() => {
    const fetchTours = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const tours = await response.json();
        setTours(tours);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchTours();
  }, []);
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
