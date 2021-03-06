import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useRouteMatch } from "react-router-dom";
import { Jumbotron, Button } from 'reactstrap';
import fakeimg from '../assets/img/fake.jpg';
import * as BEERAPP from './../utils/index';
import axios from 'axios'

ProductDetails.propTypes = {

};

function ProductDetails(props) {
    const [fakeApi, setFakeApi] = useState([])
    const [stateData, setStateData] = useState([])
    async function getBeerById() {
        try {
            const response = await axios.get(`${BEERAPP.BASE_URL}`, {
                headers: {
                    Accept: "*/*",
                }
            });
            const slug = match.params.slug
            const resultDetails = response.data.filter((itemFind, index) => {
                return itemFind.id == slug
            })
            setStateData(resultDetails)
            // setFakeApi(response.data)
        } catch (error) {
            console.error(error);
        }

    }
    const [countBeer, setCountBeer] = useState(1)
    const [priceTamp, setPriceTamp] = useState(25000)
    let match = useRouteMatch("/products/:slug");
    useEffect(() => {
        getBeerById()
        // const slug = match.params.slug
        // const resultDetails = fakeApi.filter((itemFind, index) => {
        //     return itemFind.id == slug
        // })
        // setStateData(resultDetails)
    }, [])
    const handleCount = (mark) => {
        if (mark == '-') {
            setCountBeer(countBeer - 1)
            if (countBeer == 1) {
                setCountBeer(1)
            }
        }
        else if (mark == '+') {
            setCountBeer(countBeer + 1)
        }
    }
    const totalPrice = countBeer * priceTamp;
    let history = useHistory();
    const orderBeer = (indexOrderB, quantity) => {
        const orderNow = Date.now();
        var dateobj = new Date(orderNow);
        var convertDateISO = dateobj.toISOString();

        const sendData = {
            "id": indexOrderB,
            "href": null,
            "nameProduct": "Bia H?? N???i tu client",
            "price": 100000000000,
            "cancellationDate": null,
            "cancellationReason": null,
            "category": null,
            "completionDate": null,
            "description": null,
            "expectedCompletionDate": null,
            "externalId": null,
            "notificationContact": null,
            "orderDate": convertDateISO, //ISO 8601 2021-07-07T02:40:09.541Z
            "priority": null,
            "requestedCompletionDate": null,
            "requestedStartDate": null,
            "agreement": null,
            "billingAccount": null,
            "channel": null,
            "note": [
                {
                    "id": "333333333333333",
                    "author": null,
                    "date": null,
                    "text": "http://www.tesst.com",
                    "@baseType": null,
                    "@schemaLocation": null,
                    "@type": "Note"
                }
            ],
            // "orderTotalPrice": null,
            "orderTotalPrice": [

                {
                    "@baseType": "string",
                    "@schemaLocation": null,
                    "@type": "string",
                    "billingAccount": {
                        "@baseType": "string",
                        "@referredType": "string",
                        "@schemaLocation": null,
                        "@type": "string",
                        "href": "string",
                        "id": "string",
                        "name": "string"
                    },
                    "description": "string",
                    "name": "string",
                    "price": {
                        "@baseType": "string",
                        "@schemaLocation": null,
                        "@type": "string",
                        "dutyFreeAmount": {
                            "unit": "string",
                            "value": 0
                        },
                        "percentage": 0,
                        "taxIncludedAmount": {
                            "unit": "string",
                            "value": 0
                        },
                        "taxRate": 0
                    },
                    "priceAlteration": null,
                    "priceType": "string",
                    "productOfferingPrice": {
                        "@baseType": "string",
                        "@referredType": "string",
                        "@schemaLocation": null,
                        "@type": "string",
                        "href": "string",
                        "id": "string",
                        "name": "string"
                    },
                    "recurringChargePeriod": "string",
                    "unitOfMeasure": "string"
                }
            ],
            "productOrderItem": [

                {
                    "id": "Tiger-123",
                    "quantity": quantity - countBeer,
                    "action": "noChange",
                    "payment": null,
                    "productOffering": null,
                    "product": {
                        "id": "Tiger-123",
                        "name": "vvv 214",
                        "place": null,
                        "relatedParty": null
                    },
                    "itemPrice": [
                        {
                            "name": null,
                            "priceType": "one time",
                            "description": "beer",
                            "priceAlteration": [],
                            "price": {
                                "taxRate": 19,
                                "percentage": 0,
                                "dutyFreeAmount": {
                                    "value": 2500000,
                                    "unit": "VND"
                                },
                                "taxIncludedAmount": {
                                    "value": priceTamp * countBeer,
                                    "unit": "VBD"
                                }
                            }
                        }
                    ]
                }
            ],

            "payment": null,
            "productOfferingQualification": null,
            "quote": [
                {
                    "validFor": null,
                    "state": null,
                    "note": null,
                    "lastStateChangedDate": null,
                    "id": "00000007",
                    "href": null,
                    "name": "BIA ORDER-DEMO",
                    "@baseType": null,
                    "@schemaLocation": null,
                    "@type": "QuoteRef",
                    "@referredType": null
                }
            ],
            "state": "inProgress",//inProgress
            "@baseType": null,
            "@schemaLocation": null,
            "@type": "BeerOrder"
        }


        axios.post(`${BEERAPP.BASE_URL}`, sendData)
            .then(function (response) {
                // console.log(response);
                console.log(response)
                if (response.status == 200) {
                    history.push('/CartProduct')
                    alert('ORDER THANH CONG')
                } else {
                    alert('ORDER THAT BAI')
                }
            })
            .catch(function (error) {
                console.log(error);
            });


    }
    const authFakeLocal = localStorage.getItem('user');

    // console.log(fakeApi)
    return (
        <>

            <h1>TH??NG TIN ????N H??NG {authFakeLocal}</h1>
            <div className="wrap-product-details-app">
                {stateData.map((itemOrder, index) => {
                    // console.log(itemOrder)
                    var quantity = itemOrder.productOrderItem[0].quantity
                    // console.log(itemOrder)
                    return (
                        <div className="wrap-product-details">
                            <div className="img-product">
                                <img src={fakeimg} />
                            </div>
                            <div className="img-product">
                            </div>
                            <h2 className="title-beer">
                                Bia {itemOrder.category}
                            </h2>
                            <div className="sell-outr">
                                <span className="border-right mr-1">50 + ???? b??n</span>
                                <span>4 th??ch</span>
                            </div>
                            <div className="price d-flex justify-content-between">
                                <span className="price"> {priceTamp * countBeer}d <br />
                                    SIZE M
                                </span>

                                <div className="count-product d-flex">
                                    <button onClick={() => { handleCount('-') }} className="decrement-count">-</button>
                                    <h3 className="number-count pr-2 pl-2">{countBeer}</h3>
                                    <button onClick={() => { handleCount('+') }} className="increment-count" >+</button>

                                </div>

                            </div>
                            <div className="payment border-top d-flex justify-content-between">
                                <div className="payment-left">
                                    {priceTamp * countBeer}d <br />
                                    SIZE M
                                </div>
                                <div onClick={() => { orderBeer(itemOrder.id, quantity) }} className="payment-left">
                                    ?????t h??ng
                                </div>
                            </div>
                        </div>
                    )
                })}
                {/* <div className="wrap-product-details">
                <div className="img-product">
                    <img src={fakeimg} />
                </div>
                <div className="img-product">
                </div>
                <h2 className="title-beer">
                    Bia Heniken
                </h2>
                <div className="sell-outr">
                    <span className="border-right mr-1">50 + ???? b??n</span>
                    <span>4 th??ch</span>
                </div>
                <div className="price d-flex justify-content-between">
                    <span className="price">25.000  <br />
                        SIZE M
                    </span>

                    <div className="count-product d-flex">
                        <button className="decrement-count">-</button>
                        <h3 className="number-count">1</h3>
                        <button className="increment-count" >+</button>

                    </div>
                </div>
                <div className="payment border-top d-flex justify-content-between">
                    <div className="payment-left">
                        25.000d <br />
                        SIZE M
                    </div>
                    <div className="payment-left">
                        GIAO HANG
                    </div>
                </div>
            </div> */}
            </div>

        </>

    );
}

export default ProductDetails;