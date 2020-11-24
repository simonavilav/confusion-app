import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

function RenderDish({dish}) {
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
            <div>
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

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props}/>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments}/>
                </div>
            </div>
        </div>
    );
}

export default Dishdetail;