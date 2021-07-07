import React, { useEffect, useState } from 'react';
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
    const [fakeApi, setFakeApi] = useState([])
    //export const BASE_URL = "http://codetrau.com:8082/order/beerOrders"

    const addProduct = () => {

    }
    const { match } = props;
    async function getBeerById() {
        try {
            const response = await axios.get(`${BEERAPP.BASE_URL}`, {
                headers: {
                    Accept: "*/*",
                }
            });
            setFakeApi(response.data)
        } catch (error) {
            console.error(error);
        }

    }
    useEffect(() => {
        getBeerById()
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
            <h1>Danh sach loai bia</h1>
            <div className="d-flex flex-wrap">
                {renderData}
            </div>

        </div>
    );
}

export default Products;
//vsii.interview@vsi-international.com
//"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"