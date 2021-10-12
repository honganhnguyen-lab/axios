import React, {Component} from 'react';
import ProductList from "../Product/ProductList";
import NewProduct from "../Product/NewProduct";
import ProducState from "../Product/ProductState";
import productAPI from '../API/ProductApi';

interface State {
    productList : Array<ProducState>;
    product? : ProducState;
    
}

class Container extends Component<any,State> {
    constructor(props: any){
        super(props)
        this.state = {
            productList : [],
            product:{
                id: "",
                name:"",
                price: 0,
                index: 0,
                unit: "",
                description: "",
                type: []

            } as ProducState,
        }
    }

    fetchProduct =async()=>{
       const response = await productAPI.getAll();
       this.setState({
           productList: [...response.data]

       })

    }
                                                                                                                         
    componentDidMount(){
        this.fetchProduct();
      

    }

    
    deleteProduct = async(id : string) => {
       await productAPI.delete(id);
       this.fetchProduct();
    }
    addProduct = async(product:any)=>{
        await productAPI.create(product).then(
            async=> this.fetchProduct()
            );
       
    }
    editProduct = async(id: string) =>{
       var _product = (await productAPI.getById(id)).data;
       this.setState({
         product: _product
       });
       
    }
    updateProduct = async(product:any,id:any) =>{
       
     await productAPI.update(id,product).then(
            async=> this.fetchProduct()
            );
    }
    render() {
        return (
            <>
                <div className="col-md-7">
                    <ProductList productList = {this.state.productList} 
                                 deleteProduct = {this.deleteProduct}
                                 editProduct= {this.editProduct}/>
     
                </div>
                <div className="col-md-5">
                    <NewProduct addProduct ={this.addProduct}    product={this.state.product} updateProduct={this.updateProduct}/>
                   
                </div>
            </>
        )
    }
}
export default Container;