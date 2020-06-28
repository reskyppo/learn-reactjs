import React, { Component} from 'react'
import Counter from '../CardProduct/Counter'
import '../Product.css'

class CardProduct extends Component{
    render(){
        return(
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://www.konveksipadang.com/wp-content/uploads/2018/08/GROSIR-KAOS-POLOS-DI-PADANG-MURAH-DENGAN-KUALITAS-TERJAMIN.jpg" alt="product_image"/>
                </div>
                <p className="product-title">Kaos Polos Pastel Color</p>
                <p className="product-price">Rp. 34.000</p>                    
                <Counter/>
            </div>
        );
    }
}

export default CardProduct;