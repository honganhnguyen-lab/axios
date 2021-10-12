import { Component } from 'react';
import ProductState from "./ProductState";
import Product from "./Product";

interface Props {
    productList: Array<ProductState>;
    deleteProduct:any;
    editProduct:any;
}

interface State {
    price : number;
}

class ProductList extends Component<Props, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            price : 20000,
        }
    }
    

    deleteProduct = (id : string) => {
        this.props.deleteProduct(id);
    }
    editProduct = (id:string)=>{
        this.props.editProduct(id);
    }

    render() {
        return (
            <fieldset className="border p-2">
                <legend className="scheduler-border">Danh sách sản phẩm</legend>
                <table className="table table-dark table-striped table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Tên sản phẩm</th>
                            <th scope="col">Giá</th>
                            <th scope="col">Đơn vị tính</th>
                            <th scope="col"><div className="text-center">#</div></th>
                        </tr>
                    </thead>
                    <tbody id="tableBody">
                        {
                            this.props.productList.map((product,i) => {
                                return <Product
                                    key={i}
                                    index={this.props.productList.indexOf(product) + 1}
                                    id={product.id}
                                    name={product.name}
                                    price={product.price}
                                    unit={product.unit}
                                    deleteProduct = {this.deleteProduct}
                                    // editProduct = {() => this.editProduct(product.id)}
                                    editProduct = {this.editProduct}
                                />
                            })
                        }
                    </tbody>
                </table>
            </fieldset>
        )
    }
}
export default ProductList;