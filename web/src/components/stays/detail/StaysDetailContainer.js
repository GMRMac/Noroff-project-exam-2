import React, {Component} from "react";
import PropTypes from "prop-types";
import StaysDetail from "./StaysDetail";
import jsonData from "../../../json/establishments.json"

export default class StaysDetailContainer extends Component{
    static propTypes = {
        match: PropTypes.object.isRequired,
    }

    state = {
        details: null
    };
    
    async componentDidMount(){
        //get the id from the URL
        const {id} = this.props.match.params
        this.setState({
            details: jsonData[id-1]
        })
    }
    render(){
        const {details} = this.state;
        return <StaysDetail details={details} />
    }
}