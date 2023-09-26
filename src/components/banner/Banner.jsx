import './Banner.scss';
import hero from '../../assets/images/hero.jpg';
import linkedin from '../../assets/images/linkedin.png';
import github from '../../assets/images/github.png';
import stackoverflow from '../../assets/images/stack-overflow.png';
const Banner = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-8 d-flex align-items-center justify-content-center text-wrapper' style={{ backgroundColor: '#2c2c2c' }}>
            <div className='my-5'>
              <small className='text-white'>Hi</small>
              <p className='mb-0 name'>I'm Ragulkumar</p>
              <p className='role'>Developer</p>
              <div className='social-icon'>
                <a href='https://www.linkedin.com/in/ragul-kumar/' target='blank' >
                  <img src={linkedin} className='img-fluid' alt='linked-in' />
                </a>
                <a href='https://github.com/RagultheCodder' target='blank'>
                  <img src={github} className='img-fluid' alt='linked-in' />
                </a>
                <a href='https://stackoverflow.com/users/10144272/ragulkumar' target='blank'>
                  <img src={stackoverflow} className='img-fluid' alt='linked-in' />
                </a>
              </div>
            </div>
          </div>
          <div className='col-sm-4' style={{ backgroundColor: '#ffbc01' }}>
            <img src={hero} alt='hero' className='img-fluid' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner;
