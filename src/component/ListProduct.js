import React, { Component } from 'react';
import pubsub from 'pubsub';

export class ListProduct extends Component {
    state = {
        products:[]
    }
   
    delete = (id) => {
        this.props.deleteProduct(id);
    }

    onEdit = (product) => {
        pubsub.publish('edit-product', product);
      // this.props.edit-product(product);
    }
    componentDidMount(){
        let url="http://localhost:3001/products";
        fetch(url)
        .then(resp=>resp.json())
        .then(data=>{
            let products=data.map((product)=>{
                return(
      <table>
                 <thead className="thead-dark">
                     <tr>
                         <th>Description</th>
                        <th>Price</th>
                         <th>quantity</th>
                        <th>Actions</th>
                    </tr>
                 </thead>
                 <tbody></tbody>
             <tr key={product.id}>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>
                                    <button color="info" size="sm" onClick={e => this.onEdit(product)}>Edit</button>
                                    <button color="danger" size="sm" onClick={e => this.delete(product.id)}>Delete</button>
                                </td>
                            </tr></table>

                  
                )
            })
            this.setState({products: products});
        })
    }
    render() {
        return (
   
            <div classname="App">
            {this.state.products}
        </div>
        )
    }
}

export default ListProduct;
