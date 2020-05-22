import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom';
import { getOrder } from '../Actions/actions'
export class Cart extends Component {
    state = {
        name: '',
        cardNumber: 0,
        month: 0,
        year: 0,
        cvv: 0
    }
    render() {
        return (
            <div className="container mt-3">
                {
                    this.props.getHome
                        ? <Redirect to="/" />
                        : ""
                }
                <span className="font-weight-lighter mx-3 h3">Your Cart</span>
                <div className="float-lg-right">
                    <strong className="px-3">Items: {this.props.cartItems}</strong>
                    <strong className="px-3">Total: <i className="fa fa-inr" aria-hidden="true"></i> {this.props.cartTotal}</strong>
                    <button className="btn btn-warning" data-toggle="modal" data-target="#checkoutModal"
                        disabled={this.props.cart.length === 0}
                    >Checkout</button>
                </div>
                <hr />
                <div className="row justify-content-center">
                    {this.props.cart.length === 0
                        ? <h3 className="font-weight-lighter">Nothing in the cart.</h3>
                        : ""
                    }
                    {this.props.cart.map((e, i) => {
                        // return <div className="card mb-3 col-lg-8 col-xs-12" key={i}>
                        //     <div className="row no-gutters">
                        //         <div className="col-lg-4 col-xs-12 px-md-5 pt-5 pb-3">
                        //             <img src={e.productImage} className="card-img" alt="..." />
                        //         </div>
                        //         <div className="col-lg-8 col-xs-12">
                        //             <div className="card-body">
                        //                 <h5 className="card-title">{e.productName}</h5>
                        //             </div>
                        //             <span className="text-muted px-3"><strong>{e.productBrand}</strong></span>
                        //             <span className="badge bg-success rounded text-light">{e.productRating} <small><i className="fa fa-star" aria-hidden="true"></i></small></span>
                        //             <span>
                        //                 <span className="text-muted px-3">Color: {e.productColor}</span>
                        //             </span>
                        //             <div className="float-lg-right">
                        //                 <span className="pr-2 "><strong><i className="fa fa-inr" aria-hidden="true"></i> {e.productDiscountPrice}</strong></span>
                        //                 <span className="text-muted pr-2"><strike><i className="fa fa-inr" aria-hidden="true"></i> {e.productOriginalPrice}</strike></span>
                        //                 <span className="text-success ">{((e.productOriginalPrice - e.productDiscountPrice) / e.productOriginalPrice).toFixed(2) * 100}% off</span>
                        //             </div>
                        //         </div>
                        //     </div>
                        // </div>
                        return <div class="card mb-3 m-3 px-3 pt-3" style={{ "max-width": "640px" }}>
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src={e.productImage} class="card-img" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{e.productName}</h5>
                                        <span className="badge bg-success rounded text-light">{e.productRating} <small><i className="fa fa-star" aria-hidden="true"></i></small></span>
                                        <div className="mt-2">
                                            <span className="pr-2"><strong><i className="fa fa-inr" aria-hidden="true"></i> {e.productDiscountPrice}</strong></span>
                                            <span className="text-muted pr-2"><strike><i className="fa fa-inr" aria-hidden="true"></i> {e.productOriginalPrice}</strike></span>
                                            <span className="text-success">{((e.productOriginalPrice - e.productDiscountPrice) / e.productOriginalPrice).toFixed(2) * 100}% off</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                <div className="modal fade" id="checkoutModal" tabIndex="-1" role="dialog" aria-labelledby="checkoutModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header border-0">
                                <h5 className="modal-title" id="checkoutModalLabel">Checkout</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form action="">
                                <div className="modal-body p-5">
                                    <p><strong>Total: <i className="fa fa-inr" aria-hidden="true"></i> {this.props.cartTotal}</strong></p>
                                    <div className="row">
                                        <div className="col-4">
                                            Cardholder:
                                    </div>
                                        <div className="col-8">
                                            <input type="text" className="border-0 w-75" placeholder="John Doe" maxLength={50} onChange={(e) => this.setState({ name: e.target.value })} required />
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-4">
                                            Card Number:
                                    </div>
                                        <div className="col-8">
                                            <input type="number" className="border-0 w-75" placeholder="1234 5678 1234 5678" minLength={16} maxLength={16} onChange={(e) => this.setState({ cardNumber: Number(e.target.value) })} required />
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-4">
                                            Expiry Date:
                                    </div>
                                        <div className="col-8">
                                            <input type="number" className="border-0 w-25" placeholder="MM" maxLength={2} minLength={2} onChange={(e) => this.setState({ month: Number(e.target.value) })} required />
                                            <input type="number" className="border-0 w-25" placeholder="WW" maxLength={2} minLength={2} onChange={(e) => this.setState({ year: Number(e.target.value) })} required />
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-4">
                                            CVV:
                                    </div>
                                        <div className="col-8">
                                            <input type="number" className="border-0 w-50" placeholder="111" maxLength={3} minLength={3} onChange={(e) => this.setState({ cvv: Number(e.target.value) })} required />
                                        </div>
                                    </div>

                                </div>
                                <div className="modal-footer border-0">
                                    <button type="submit" className="btn btn-warning w-100" data-dismiss="modal" aria-label="Close" onClick={() => this.props.getOrder(this.props.cart)}>Pay</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { cart, cartItems, cartTotal, getHome } = state
    return {
        cart,
        cartItems,
        cartTotal,
        getHome
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getOrder }, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
