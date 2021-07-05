import React, { useEffect } from 'react';
import axios from 'axios'
import {
    Button, Form, FormGroup, Label, Input, FormText, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,
} from 'reactstrap';
import * as BEERAPP from './../utils/index';
import fakeimg from '../assets/img/fake.jpg';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    // Redirect,
    // useHistory,
    // useLocation
} from "react-router-dom";

Products.propTypes = {

};


// ACKNOWLEDGED("acknowledged"),

//   REJECTED("rejected"),

//   PENDING("pending"),

//   HELD("held"),

//   INPROGRESS("inProgress"),

//   ARCHIVED("archived"),

//   CANCELLED("cancelled"),

//   COMPLETED("completed"),

//   DELAYED("delayed"),

//   DELETED("deleted"),

// INPROCESS("inProcess"),

// REVOKED("revoked"),

// SCHEDULED("scheduled)"
function Products(props) {
    const fakeApi = [{ "id": "seceit-621070011", "href": "abv", "cancellationDate": null, "cancellationReason": null, "category": null, "completionDate": null, "description": null, "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "333333333333333", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "621070018", "href": null, "cancellationDate": null, "cancellationReason": null, "category": "beer demo", "completionDate": null, "description": "vi du ve loai bia demo", "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "333333333333333", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "621070010", "href": null, "cancellationDate": null, "cancellationReason": null, "category": null, "completionDate": null, "description": null, "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "333333333333333", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "621070011", "href": null, "cancellationDate": null, "cancellationReason": null, "category": null, "completionDate": null, "description": null, "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "333333333333333", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "621070016", "href": null, "cancellationDate": null, "cancellationReason": null, "category": null, "completionDate": null, "description": null, "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "333333333333333", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "621070020", "href": null, "cancellationDate": null, "cancellationReason": "thích thì hủy thôi haha", "category": "beer demo", "completionDate": null, "description": "vi du ve loai bia demo", "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "333333333333333", "author": "dao hung minh", "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "621070021", "href": null, "cancellationDate": null, "cancellationReason": null, "category": null, "completionDate": null, "description": "99", "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "01", "author": null, "date": null, "text": "https://24h.com.vn", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test99", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "60b991fcd2805755a568ece8", "href": "test2", "cancellationDate": null, "cancellationReason": null, "category": null, "completionDate": null, "description": null, "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "333333333333333", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "123", "href": "test2", "cancellationDate": null, "cancellationReason": null, "category": null, "completionDate": null, "description": null, "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "333333333333333", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "621070098", "href": null, "cancellationDate": null, "cancellationReason": null, "category": null, "completionDate": null, "description": null, "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "9999999999999999999999", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "fggg", "href": "w", "cancellationDate": "1970-01-01T01:32:35Z", "cancellationReason": null, "category": "hh", "completionDate": null, "description": null, "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "333333333333333", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "621070099", "href": null, "cancellationDate": null, "cancellationReason": null, "category": null, "completionDate": null, "description": null, "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "9999999999999999999999", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "Van001", "href": null, "cancellationDate": null, "cancellationReason": null, "category": null, "completionDate": null, "description": null, "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "333333333333333", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "60c18e33f2362579069e5783", "href": null, "cancellationDate": null, "cancellationReason": null, "category": null, "completionDate": null, "description": null, "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "9999999999999999999999", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "60c18e37f2362579069e5784", "href": null, "cancellationDate": null, "cancellationReason": null, "category": null, "completionDate": null, "description": null, "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "9999999999999999999999", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": " 55555555555667789923", "href": null, "cancellationDate": null, "cancellationReason": null, "category": null, "completionDate": null, "description": "dddđ", "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "9999999999999999999999", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "621070", "href": null, "cancellationDate": null, "cancellationReason": null, "category": null, "completionDate": null, "description": null, "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "333333333333333", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "621070019", "href": null, "cancellationDate": null, "cancellationReason": null, "category": "bia co", "completionDate": null, "description": null, "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "333333333333333", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "621070017", "href": null, "cancellationDate": null, "cancellationReason": null, "category": "beer", "completionDate": null, "description": null, "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "333333333333333", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "2100001", "href": null, "cancellationDate": null, "cancellationReason": null, "category": null, "completionDate": null, "description": null, "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "333333333333333", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "11111111111111111", "href": null, "cancellationDate": null, "cancellationReason": null, "category": null, "completionDate": null, "description": "đây là một loại bia", "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "333333333333333", "author": null, "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "66666666666", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }, { "id": "621070030", "href": null, "cancellationDate": null, "cancellationReason": "thích thì hủy thôi haha thích thì hủy thôi haha  thích thì hủy thôi haha ", "category": "beer demo", "completionDate": null, "description": "vi du ve loai bia demo vi du ve loai bia demovi du ve loai bia demo", "expectedCompletionDate": null, "externalId": null, "notificationContact": null, "orderDate": null, "priority": null, "requestedCompletionDate": null, "requestedStartDate": null, "agreement": null, "billingAccount": null, "channel": null, "note": [{ "id": "333333333333333", "author": "dao hung minh dao hung minh dao hung minh dao hung minh", "date": null, "text": "http://www.tesst.com", "@baseType": null, "@schemaLocation": null, "@type": "Note" }], "orderTotalPrice": null, "payment": null, "productOfferingQualification": null, "productOrderItem": [], "quote": [{ "id": "00000007", "href": null, "name": "Test", "@baseType": null, "@schemaLocation": null, "@type": "QuoteRef", "@referredType": null }], "relatedParty": null, "state": "inProgress", "@baseType": null, "@schemaLocation": null, "@type": "BeerOrder" }];
    const addProduct = () => {

    }
    const { match } = props;
    console.log(props)
    async function getBeerById() {

        try {
            const response = await axios.get(`${BEERAPP.BASE_URL}`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "disableBodyPruning": true
                }
            });
            console.log(response);
        } catch (error) {
            console.error(error);
        }

    }
    useEffect(() => {
        // console.log(fakeApi)
        // getBeerById()
    }, [])
    const handleOrderBeer = (indexBeer) => {
    }
    const renderData = fakeApi.map((itemBeer, index) => {
        return (
            <Card key={index} >
                <NavLink to={`/products/${itemBeer.id}`}>
                    <CardImg top width="318px" height="180px" src={fakeimg} alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">{itemBeer.category}</CardTitle>
                        {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                        <CardText>{itemBeer.description}</CardText>
                        <Button onClick={() => { handleOrderBeer(itemBeer.id) }}>Buy</Button>
                    </CardBody>
                </NavLink>

            </Card>
        )
    })
    return (
        <div>
            {/* Viết danh sách sản phẩm ở đây nhé, giống cách viết trang register */}
            <h1 className="text-center">thêm sản phẩm</h1>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Tên sản phẩm</Label>
                    <Input type="text" name="titleSp" placeholder="Nhập tên sp..." />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Miêu tả sản phẩm</Label>
                    <Input type="text" name="titleSp" placeholder="Nhập miêu tả sp" />

                </FormGroup>
                <Button onClick={addProduct}>Add</Button>
            </Form>

            <div className="d-flex flex-wrap">
                {renderData}
            </div>

        </div>
    );
}

export default Products;