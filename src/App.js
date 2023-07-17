import { useEffect } from 'react';
import './App.css';
import Banner from './components/banner/Banner';
import Skills from './components/skills/Skills';
import { useParams } from 'react-router-dom';

function App() {
  const { orgName, payload , courseData} = useParams();

  console.log(orgName);
  console.log(payload);
  console.log(courseData);
  useEffect(() => {
    // Get the URL query string
    const queryString = window.location.search;

     // Output the entire query string
     console.log('Query String:', queryString);

    // Parse the query string to get the parameters
    const urlParams = new URLSearchParams(queryString);

    console.log(urlParams);

    // Access the individual parameter values
    const param1 = urlParams.get('orgName');
    const param2 = urlParams.get('payload');
    const param3 = urlParams.get('courseData');

    // Access the URL parameters here
    console.log('param1:', param1);
    console.log('param2:', param2);
    console.log('param3:', param3);

  }, []);
  return (
    <>
      <Banner />
      <Skills />
      <h4 className='text-center text-danger'>* Blog not yet fully completed get back soon quickly * </h4>
    </>
  );
}

export default App;
