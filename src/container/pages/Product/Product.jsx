import React, { Component, Fragment } from 'react'
import CardProduct from './CardProduct/CardProduct'
import './Product.css'
import {connect} from 'react-redux'

class Product extends Component{
    
    render(){
        return(
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="https://i.pinimg.com/originals/98/58/9e/98589efd855f1aba68d9a45413c289ba.png" alt="product_logo"/>
                    </div>
                    <div className = "trolley">
                        <img src       = "https://w7.pngwing.com/pngs/946/629/png-transparent-shopping-cart-online-shopping-computer-icons-supermarket-trolley-black-trade-shopping.png" alt = "trolley"/>
                        <div className = "count">{this.props.order}</div>
                    </div>
                </div>
                <CardProduct/>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return  {
        order: state.totalOrder
    }
}



export default connect(mapStateToProps)(Product);