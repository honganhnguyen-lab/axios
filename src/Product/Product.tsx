import { Component } from 'react';


interface Props {
    id : string;
    name : string;
    price : number;
    index : number;
    unit: string;
    deleteProduct? : any;
    editProduct? : any;
}
class Product extends Component<Props, any> {
    constructor(props: Props) {
        super(props)
        this.state = {
        };       
    }

    delete = (id : string) => {
        this.props.deleteProduct(id);
        
    }
    edit = (id:string) =>{
        this.props.editProduct(id);
    }
    
    render() {    
        return (
            <tr>
                <th scope="row">{this.props.index}</th>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
                <td>{this.props.unit}</td>
                <td>
                   
                        <button type="button" className="btn btn-primary"><i className="bi bi-search"></i></button>
                    <button type="button" className="btn btn-primary" onClick = {() => this.edit(this.props.id)}><i className="bi bi-pencil-square"></i></button>
                    <button type="button" className="btn btn-danger" onClick = {() => this.delete(this.props.id)}><i className="bi bi-trash"></i></button>
                </td>
            </tr>
        )
    }
}
export default Product;