import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from "react-router-dom";
import { Jumbotron, Button } from 'reactstrap';
import fakeimg from '../assets/img/fake.jpg';

ProductDetails.propTypes = {

};

function ProductDetails(props) {
    const [stateData, setStateData] = useState([])
    const fakeApi = [{ "id": "seceit-621070011", "href": "abv", "cancellationDate": null, "cancellationReason": null, "category": null, "completionDate": null, "description": null, "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "333333333333333", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "621070018", "href": null, "cancellationDate": null, "cancellationReason": null, "category": "beer demo", "completionDate": null, "description": "vi du ve loai bia demo", "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "333333333333333", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "621070010", "href": null, "cancellationDate": null, "cancellationReason": null, "category": null, "completionDate": null, "description": null, "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "333333333333333", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "621070011", "href": null, "cancellationDate": null, "cancellationReason": null, "category": null, "completionDate": null, "description": null, "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "333333333333333", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "621070016", "href": null, "cancellationDate": null, "cancellationReason": null, "category": null, "completionDate": null, "description": null, "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "333333333333333", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "621070020", "href": null, "cancellationDate": null, "cancellationReason": "thích thì hủy thôi haha", "category": "beer demo", "completionDate": null, "description": "vi du ve loai bia demo", "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "333333333333333", "author": "dao hung minh", "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "621070021", "href": null, "cancellationDate": null, "cancellationReason": null, "category": null, "completionDate": null, "description": "99", "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "01", "author": null, "date": null, "text": "https://24h.com.vn", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test99", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "60b991fcd2805755a568ece8", "href": "test2", "cancellationDate": null, "cancellationReason": null, "category": null, "completionDate": null, "description": null, "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "333333333333333", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "123", "href": "test2", "cancellationDate": null, "cancellationReason": null, "category": null, "completionDate": null, "description": null, "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "333333333333333", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "621070098", "href": null, "cancellationDate": null, "cancellationReason": null, "category": null, "completionDate": null, "description": null, "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "9999999999999999999999", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "fggg", "href": "w", "cancellationDate": "1970-01-01T01:32:35Z", "cancellationReason": null, "category": "hh", "completionDate": null, "description": null, "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "333333333333333", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "621070099", "href": null, "cancellationDate": null, "cancellationReason": null, "category": null, "completionDate": null, "description": null, "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "9999999999999999999999", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "Van001", "href": null, "cancellationDate": null, "cancellationReason": null, "category": null, "completionDate": null, "description": null, "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "333333333333333", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "60c18e33f2362579069e5783", "href": null, "cancellationDate": null, "cancellationReason": null, "category": null, "completionDate": null, "description": null, "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "9999999999999999999999", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "60c18e37f2362579069e5784", "href": null, "cancellationDate": null, "cancellationReason": null, "category": null, "completionDate": null, "description": null, "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "9999999999999999999999", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": " 55555555555667789923", "href": null, "cancellationDate": null, "cancellationReason": null, "category": null, "completionDate": null, "description": "dddđ", "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "9999999999999999999999", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "621070", "href": null, "cancellationDate": null, "cancellationReason": null, "category": null, "completionDate": null, "description": null, "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "333333333333333", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "621070019", "href": null, "cancellationDate": null, "cancellationReason": null, "category": "bia co", "completionDate": null, "description": null, "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "333333333333333", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "621070017", "href": null, "cancellationDate": null, "cancellationReason": null, "category": "beer", "completionDate": null, "description": null, "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "333333333333333", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "2100001", "href": null, "cancellationDate": null, "cancellationReason": null, "category": null, "completionDate": null, "description": null, "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "333333333333333", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "11111111111111111", "href": null, "cancellationDate": null, "cancellationReason": null, "category": null, "completionDate": null, "description": "đây là một loại bia", "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "333333333333333", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "66666666666", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "621070030", "href": null, "cancellationDate": null, "cancellationReason": "thích thì hủy thôi haha thích thì hủy thôi haha  thích thì hủy thôi haha ", "category": "beer demo", "completionDate": null, "description": "vi du ve loai bia demo vi du ve loai bia demovi du ve loai bia demo", "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "333333333333333", "author": "dao hung minh dao hung minh dao hung minh dao hung minh", "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }]
    // console.log(props.match.params.slug)
    const [countBeer, setCountBeer] = useState(1)
    const [priceTamp, setPriceTamp] = useState(25000)
    let match = useRouteMatch("/products/:slug");
    useEffect(() => {
        const slug = match.params.slug
        const resultDetails = fakeApi.filter((itemFind, index) => {
            return itemFind.id == slug
        })
        setStateData(resultDetails)
    }, [])
    const handleCount = (mark) => {
        if (mark == '-') {
            setCountBeer(countBeer - 1)

            if (countBeer == 1) {
                setCountBeer(1)

            }
            // setPriceTamp(countBeer * priceTamp)

        }
        else if (mark == '+') {
            setCountBeer(countBeer + 1)
            // setPriceTamp(countBeer * priceTamp)
        }
    }
    // console.log(match)
    return (
        <div className="wrap-product-details-app">

            {stateData.map((itemOrder, index) => {
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
                            <span className="border-right mr-1">50 + đã bán</span>
                            <span>4 thích</span>
                        </div>
                        <div className="price d-flex justify-content-between">
                            <span className="price">{priceTamp}d <br />
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
                                {priceTamp}d <br />
                                SIZE M
                            </div>
                            <div className="payment-left">
                                GIAO HANG
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
                    <span className="border-right mr-1">50 + đã bán</span>
                    <span>4 thích</span>
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
    );
}

export default ProductDetails;