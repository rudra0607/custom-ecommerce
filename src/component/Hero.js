//import '../css/Nav.css';
import logo from "../image/my_site_logo.png";
import hero1 from "../image/hero-img1.jpg";
import hero2 from "../image/hero-img2.jpg";
import hero3 from "../image/hero-img3.jpg";

function Hero() {
  return (
    <>
		<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
			<ol class="carousel-indicators">
				<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			</ol>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img style={{height: '400px'}} class="d-block w-100" src={hero1} alt="First slide"/>
				</div>
				<div class="carousel-item">
					<img style={{height: '400px'}} class="d-block w-100" src={hero2} alt="Second slide"/>
				</div>
				<div class="carousel-item">
					<img style={{height: '400px'}} class="d-block w-100" src={hero3} alt="Third slide"/>
				</div>
			</div>
			<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="sr-only">Previous</span>
			</a>
			<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="sr-only">Next</span>
			</a>
		</div>
	</>
  );
}

export default Hero;
