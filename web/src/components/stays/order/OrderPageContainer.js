import React, {Component} from "react";
import PropTypes from "prop-types";
import OrderPage from "./OrderPage";
import jsonData from "../../../json/establishments.json"

export default class OrderPageContainer extends Component{
    static propTypes = {
        match: PropTypes.object.isRequired,
    }

    state = {
        details: jsonData
    };
    
    async componentDidMount(){
        //get the id from the URL
        const {id} = this.props.match.params
        
        try {
            this.setState({
                details: jsonData[id-1]
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