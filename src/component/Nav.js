import '../css/Nav.css';
import logo from "../image/my_site_logo.png";
import productDatabase from '../asset/productData';
import React, {useState} from 'react';
function Nav(params) {
	var [obj, setObj] = useState({});
	var [totalP, setTotal] = useState(0);
	var productCountObj = {};
	function showCart(e) {
		var productData = localStorage.getItem("products");
		var productStr = productData === null ? '[]' : productData;
		var pidArray = JSON.parse(productStr);
		productCountObj = {}
		var uniqueProducts = [];
		setTotal(0);
		var total = 0;
		pidArray.forEach(element => {
			var product = uniqueProducts.find((pid) => element === pid);
			if (!product) {
				var realProduct = productDatabase.find((prod) => element === prod.productId);
				// console.log(realProduct);
				uniqueProducts.push(element);

				productCountObj[element] = {};
				productCountObj[element].count = 1;
				productCountObj[element].desc = realProduct.desc;
				productCountObj[element].image = realProduct.image;
				productCountObj[element].productId = realProduct.productId;
				productCountObj[element].title = realProduct.title;
			} else {
				productCountObj[element].count += 1;
			}
			total += Number(productCountObj[element].desc.substring(1).replaceAll(',', ''));
			
		});
		setTotal(total);
		// console.log(productCountObj)
		setObj(productCountObj);
		
	}
  return (
    <>
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" href="#"><img src={logo} className="App-logo" alt="logo" /></a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active ">
						<a className="nav-link" href="#"><b>Home</b> <span className="sr-only">(current)</span></a>
					</li>
					<li className="nav-item">
					<a className="nav-link" href="#"><b>Shop</b></a>
					</li>
					<li className="nav-item	">
						<a className="nav-link" href="#"><b>ContactUs</b></a>
					</li>
					<li className="nav-item">
					<a className="nav-link" href="#"><b>AboutUs</b></a>
					</li>
					<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						<b>Product</b>
						</a>
						<div className="dropdown-menu" aria-labelledby="navbarDropdown">
							<a className="dropdown-item" href="#">Kitchen Product</a>
							<a className="dropdown-item" href="#">Office Product</a>
							<a className="dropdown-item" href="#">Home Product</a>
							<div className="dropdown-divider"></div>
							<a className="dropdown-item" href="#">Something else here</a>
						</div>
					</li>
					{/* <button type="button" className="btn btn-secondary">Login</button> */}
				</ul>
			
				
				<button type="button" className="btn btn-secondary" onClick={showCart} data-toggle="modal" data-target="#cartModal">
					<i className="fas fa-shopping-basket"></i><span className="badge badge-light">{params.cartVal}</span>
				</button>

				<div className="modal fade" id="cartModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog">
						<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">Mini Cart</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
						<table class="table table-hover">
							<thead>
								<tr>
								<th scope="col">Products</th>
								<th scope="col">Name</th>
								<th scope="col">ID</th>
								<th scope="col">Count</th>
								<th scope="col">Price</th>
								</tr>
							</thead>
							<tbody>
								{	
									Object.keys(obj).map((product) => {
										return(
											<tr>
												{}
												<td scope="row"><img src={obj[product].image} width={100} class="rounded float-left" alt=""></img></td>
												<td style={{}}>{obj[product].title.substring(0,30)}</td>
												<td>{obj[product].productId}</td>
												<td>{obj[product].count}</td>
												<td>{obj[product].desc}</td>
											</tr>
										)
									})
								}
								
							</tbody>
							</table>
							<center><h3>Total Price : ₹{totalP}.00</h3></center>
							
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary">Go To Payment</button>
						</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</>
  );
}

export default Nav;
