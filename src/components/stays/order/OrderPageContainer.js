import React, {Component} from "react";
import PropTypes from "prop-types";
import Spinner from "react-bootstrap/Spinner";
import { ESTABLISHMENTS_DATA } from "../../../constants/API";
import OrderPage from "./OrderPage";

export default class OrderPageContainer extends Component{
    static propTypes = {
        match: PropTypes.object.isRequired,
    }

    state = {
        details: null
    };
    
    async componentDidMount(){
        //get the id from the URL
        const {id} = this.props.match.params
        console.log(id)
        //create the URL string
        const url = ESTABLISHMENTS_DATA;
        console.log(url)
        
        try {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json[id-1])
            this.setState({
                details: json[id-1]
            })
        }
        catch (error){
            console.log(error)
        }
    }

    render(){
        const {details} = this.state;

        return <OrderPage details={details} />
    }
}