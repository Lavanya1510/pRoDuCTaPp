import React, { Component } from 'react';
import pubsub from 'pubsub-js';
export class Product extends Component { state = { 
    products: { 
        id: 0, 
        description: 0,
        price: 0, 
        quantity: 0
    } 
};
setValues = (e, field) => {
    const { products } = this.state;
    products[field] = e.target.value;
    this.setState({ products });
}

create = () => {
    this.setState({ products: { id: 0,  description: 0, price: 0, quantity: 0 } })
    this.props.productCreate(this.state.products);
}

componentWillMount() {
    pubsub.subscribe('edit-product', (topic, product) => {
 //   const { product } = this.props;
        this.setState({ products: product });
    });
}
    render() {
        return (
            <div>
                 <form>
                <formGroup>
                    <label for="description">Description:</label>
                    <input id="description" type="text" value={this.state.products.description} placeholder="Descriptions"
                    onChange={e => this.setValues(e, 'description') } />
                </formGroup>
                <formGroup>
                    <div className="form-row">
                        <div className="col-md-6">
                            <label for="price">Price:</label>
                            <input id="price" type="text"  value={this.state.products.price} placeholder="R$ " 
                            onChange={e => this.setValues(e, 'price') } />
                        </div>
                        <div className="col-md-6">
                            <label for="quantity">Quantity:</label>
                            <input id="quantity" type="text" value={this.state.products.quantity} placeholder="Qtd. de produtos disponíveis" 
                            onChange={e => this.setValues(e, 'quantity') } />
                        </div>
                    </div>
                </formGroup>
                <button onClick={this.create}> save </button>
            </form>
             </div>   
            
        )
    }
}



export default Product

