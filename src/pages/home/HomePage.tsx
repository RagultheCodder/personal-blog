import { ReactComponent as Home } from '../../assets/homepage.svg';

const HomePage = () => {
  return (
    <>
      <div className="home-text">
        <p className="w-75  mx-auto">
          Get started today and experience the convenience of Academic
          Electronic Health Records !
        </p>
        <Home className="d-block mx-auto" />
      </div>
    </>
  );
};

export default HomePage;
