import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { ButtonToggle } from "reactstrap";
import axios from 'axios'
import * as BEERAPP from './../utils/index';

function ProcessProduct(props) {

    const [fakeApi, setFakeApi] = useState([])
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

    const hendleReject = (idOrder) => {
        alert('reject' + idOrder)
    }


    const handleComPlete = (idOrder) => {
        alert('Complete' + idOrder)
    }


    const renderOrder = fakeApi.length > 0 ? fakeApi.map((item, index) => {
        console.log()
        if (item.state == 'inProgress') {
            return (
                <tbody>
                    <tr>
                        <th scope="row">{item.id}</th>
                        <td>{item.category}</td>
                        <td>{item.productOrderItem[0] != undefined ? item.productOrderItem[0].quantity : ""}</td>
                        <td></td>

                        <td>{item.orderDate}</td>

                        <td>{item.state}</td>

                        <td style={{ textAlign: 'center' }}>        <ButtonToggle onClick={() => handleComPlete(item.id)} color="success">Duyet</ButtonToggle>{' '}</td>

                        <td style={{ textAlign: 'center' }}>        <ButtonToggle onClick={() => hendleReject(item.id)} color="danger">Tu choi</ButtonToggle>{' '}</td>
                    </tr>
                </tbody>
            )
        } else {
            return false
        }

    }) : []

    return (
        <Table dark>
            <thead>
                <tr>
                    <th colSpan={3}>danh sach order</th>

                </tr>
            </thead>
            <thead>
                <tr>
                    <th>ID ORDER</th>
                    <th>ten sp</th>
                    <th>so luong</th>
                    <th>gia</th>

                    <th>ngay order</th>
                    <th>trang thai</th>
                    <th colSpan={2} style={{ textAlign: 'center' }}>duyet</th>
                </tr>
            </thead>
            {renderOrder}

        </Table>
    );
}

export default ProcessProduct;