import { useEffect, useState } from 'react';

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {}, []);
  return <h2>Tours Starter</h2>;
};
export default App;
