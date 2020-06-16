import React , {useState, useEffect} from 'react'
import Axios from 'axios';
import { Segment, Header, Button} from 'semantic-ui-react';

export default function ProductView(props) {
    const [Product, setProduct] = useState({});

    useEffect( () => {
        Axios.get (`/api/products/${props.match.params.id}`).
        then(res =>{
            console.log(res)
            setProduct(res.data);

        }).catch((e) => {
            console.log(e)
        })

    },[])

    return (
        <div>
            <Segment>
                <Header as='h1'>{Product.name}</Header>
                <Header as ='h3'>{Product.department}</Header>
                <Header as ='h6'>{Product.price}</Header>

                <br />
                <br />
                <Button color ="blue"
                onClick = {props.history.goBack}> Back</Button>
            </Segment>
        </div>
    )
}