import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

function RenderDish({dish}) {
    if (dish != null) {
        return(
            <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle><b>{dish.name}</b></CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </div>
        );
    } else {
        return(
            <div></div>
        );
    }
}

function RenderComments({comments}) {
    if (comments != null) {
        const coms = comments.map((comment) => {
            return (
            <ul key={comment.id} className="list-unstyled">
                <li className="mt-2">{comment.comment}</li>
                <li className="mb-4">-- {comment.author}, {new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
            </ul>
            );
        })
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {coms}
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

const Dishdetail = (props) =>  {
    if(props.dish !== null) {
        return (
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.dish}/>
                    <RenderComments comments={props.dish.comments}/>
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        )
    }
}

export default Dishdetail;