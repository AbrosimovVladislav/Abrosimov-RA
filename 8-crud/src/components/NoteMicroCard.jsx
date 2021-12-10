import React, {useEffect} from "react";
import {Button, Card} from "react-bootstrap";
import image from "../assets/GM.png";

export default function NoteMicroCard({note}) {

    useEffect(() => {
        console.log(new Date(note.created).toDateString())
    },[])

    const style = {
        border:"solid"
    }

    return (
        <div style={style}>
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src={image}/>
                <Card.Body>
                    <Card.Title>{note.content}</Card.Title>
                    <Card.Text>{new Date(note.created).toDateString()}</Card.Text>
                    <a href={"/posts/" + note.id}><Button variant="danger">К ДЕТАЛЯМ</Button></a>
                </Card.Body>
            </Card>
            <p/>
        </div>
    )
}
