import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

class Dishdetail extends Component {

    renderDish(dish) {
        if (dish != null) {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle><b>{dish.name}</b></CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    renderComments(comments) {
        if (comments != null) {
            return (
                comments.map((comment) => {
                    return (
                    <div key={comment.id}>
                        <ul className="list-unstyled">
                            <li className="mt-2">{comment.comment}</li>
                            <li className="mb-4">-- {comment.author}, {comment.date.slice(0, 10)}</li>
                        </ul>
                    </div>
                    );
                })
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    render () {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {this.renderComments(this.props.comments)}
                </div>
            </div>
        );
    }
}

export default Dishdetail;