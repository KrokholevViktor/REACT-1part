import Carousel from 'react-bootstrap/Carousel';

const BootstrapTest = () => {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://img.freepik.com/premium-photo/beautiful-landscape-photography-wallpaper-background-peaks-lake-canyon-sky-white-clouds_1024980-97535.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://img.freepik.com/premium-photo/beautiful-landscape-photography-wallpaper-background-peaks-lake-canyon-sky-white-clouds_1024980-97535.jpg"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://img.freepik.com/premium-photo/beautiful-landscape-photography-wallpaper-background-peaks-lake-canyon-sky-white-clouds_1024980-97535.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      );
}

export default BootstrapTest;