import { Component } from 'react';


interface State {
    id: number;
    name: string;
    code: string;
    price: number;
    productTypes: Array<SelectBoxItem>;
    description?: string,
    importDate?: string,
    unit?: string;
    changeByInput : boolean;


}
interface Props {
    addProduct?: any;
    editProduct?: any;
    updateProduct?: any;
     product: any;

}
const initialState = {
    id: 0,
    name: '',
    code: '',
    price: 0,
    productTypes: [
        { id: "productType1", value: 1, text: "Đồ gia dụng", checked: false },
        { id: "productType2", value: 2, text: "Đồ điện tử", checked: false },
        { id: "productType3", value: 3, text: "Quần áo", checked: false },
        { id: "productType4", value: 4, text: "Sách", checked: false }
    ],
    changeByInput:false,

}
interface SelectBoxItem {
    value: number,
    text: string,
    id: string,
    checked: boolean
}


class NewProduct extends Component<Props, State> {
    changeState:boolean;
    constructor(props: any) {
        super(props)
        this.state = initialState; 
        this.changeState = false; 
    }
   
    static getDerivedStateFromProps = (props: Props, state: State) => {
        var currentProduct = {
            id:state.id,
            name:state.name,
            price:state.price,
            productTypes: [...initialState.productTypes],
            unit: props.product.unit,

        }
        if (props.product !== currentProduct && !state.changeByInput) {
            return {
                id: props.product.id,
                name: props.product.name,
                price: props.product.price,
                index: props.product.index,
                description: props.product.description,
                productTypes: [...initialState.productTypes],
                unit: props.product.unit,
                changeByInput: false
            };
        }
        return {...state,changeByInput:false};
    }

    saveProduct = () => {
        if((this.state.id=== null)||(this.state.id=== undefined)){
            this.props.addProduct({
                name: this.state.name,
                id: this.state.id,
                code: this.state.code,
                price: this.state.price,
                type: this.state.productTypes
            });
        }else{
            this.props.updateProduct(this.state.id,{
                name: this.state.name,
                id: this.state.id,
                code: this.state.code,
                price: this.state.price,
                type: this.state.productTypes
            });
            this.reset();
        }

        
        this.reset();

    }
    reset = () => {
        this.setState(initialState);
    }

    onChange = (event: { target: { name: any; value: any; };}) => {
        this.setState({ [event.target.name]:  event.target.value,changeByInput:true, } as Pick<State, keyof State>);

    };
    onCheck = (event: { target: { checked: any; value: any; }; }) => {
        let productlistTypes = this.state.productTypes;
        for (let productType of productlistTypes) {
            if (productType.value.toString() === event.target.value) {
                productType.checked = event.target.checked;
                break;
            }
        }
        this.setState({ productTypes: productlistTypes });
    }
   
    render() {
        return (
            <fieldset className="border p-2">
            <legend className="scheduler-border">Thông tin sản phẩm</legend>
            <form>
                <div className="mb-3 row">
                    <div className="col-md-4">
                        <label>Tên sản phẩm:</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" className="form-control" name="name"  value = {this.state.name}  id="productName" onChange={this.onChange} placeholder="Nhập tên sản phẩm ..."/>
                        <div className="invalid-feedback d-block">
                           
                        </div>
                        <input type="hidden" id="productId" value = {this.state.id} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-md-4">
                        <label>Mã sản phẩm:</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" className="form-control" name="code" value= {this.state.code} onChange={this.onChange} id="productCode" placeholder="Nhập mã sản phẩm ..." />
                        <div className="invalid-feedback d-block">
                          
                        </div>
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-md-5">
                        <label>Loại sản phẩm:</label>
                    </div>
                    <div className="form-check col-md-7">
                        {
                            this.state.productTypes.map(productType => {
                                return <>
                                    <input className="form-check-input" type="checkbox" value =  {productType.value} name="productType" 
                                    id= {productType.id} checked={productType.checked} key = {productType.id} onChange={this.onCheck} />
                                    <label className="form-check-label">{productType.text}</label><br/>
                                </>
                            })
                        }
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-md-4">
                        <label>Loại sản phẩm:</label>
                    </div>
                    <div className="col-md-8">
                        <select className="form-control" name = "unit" id="productUnit" value = {this.state.unit} onChange = {this.onChange}>
                            <option value="">-- Chọn đơn vị tính --</option>
                            <option value="1">Cái</option>
                            <option value="2">Chiếc</option>
                            <option value="3">Bao</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-md-4">
                        <label>Giá sản phẩm:</label>
                    </div>
                    <div className="col-md-8">
                        <input type="number" className="form-control" name = "price" value = {this.state.price}  onChange = {this.onChange} id="productPrice" placeholder="Nhập giá sản phẩm ..."/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-md-4">
                        <label>Ngày nhập:</label>
                    </div>
                    <div className="col-md-8">
                        <input type="date" className="form-control" name= "importDate" value ={this.state.importDate} onChange = {this.onChange} id="productImportDate" placeholder="Nhập giá sản phẩm ..." />
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-md-4">
                        <label>Mô tả:</label>
                    </div>
                    <div className="col-md-8">
                        <textarea className="form-control"  name= "description" value ={this.state.description} onChange = {this.onChange} id="productDescription" placeholder="Mô tả sản phẩm ..."></textarea>
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="offset-sm-4 col-sm-7 pull-right">
                        <button type="button" onClick = {this.saveProduct} className="btn btn-primary">Save</button>
                    </div>
                </div>
            </form>
        </fieldset>
        )
    }
}
export default NewProduct;

function id(id: any, arg1: { name: string; code: string; price: number; type: SelectBoxItem[]; }) {
    throw new Error('Function not implemented.');
}
