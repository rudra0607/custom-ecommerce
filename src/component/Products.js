import productData from "../asset/productData";
import Tile from "./Tile"
function Products(params) {
    return (
        <>
            <center>
                <h1>Products Section</h1>
            </center>
            <div className="row my-4 mx-0" >
                {productData.map((elem, index) => {
                return (<Tile updateFn={params.updateFn} image={elem.image} title={elem.title} desc={elem.desc} index={index} pid={elem.productId} />);
                })}
            </div>
        </>
    );
}

export default Products;