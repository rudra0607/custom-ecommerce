//import '../css/Nav.css';

function Cart(params) {
  function addToCart(e) {
    var pid = e.currentTarget.id;
    var productData = localStorage.getItem("products");
    var productStr = productData === null ? '[]' : productData;
    var pidArray = JSON.parse(productStr);
    pidArray.push(pid)
    productStr = JSON.stringify(pidArray)
    // productStr = 
    localStorage.setItem("products", productStr)
    params.updateFn(pidArray.length);
  }

  return (
    <>
      <div class="card mt-3 m-0 product" data-pid={params.pid} style={{width: "20%"}}>
        <div className="p-2">
          <img class="card-img-top" src={params.image} alt={"image" + params.index} />
        </div>
        <div className="card-body">
          <h5 class="card-title">{params.title}</h5>
          <p class="card-text">{params.desc}</p>
        </div>
        <div class="card-footer">
          <button className="btn btn-primary" id={params.pid} onClick={addToCart}>Add To Cart</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
