import { Card } from "react-bootstrap";
import Privatelayout from "../Layout/Privatelayout";
import { getUserdata } from "../Services/Auth";
import { useEffect, useState } from "react";

const Home = () => {
    const [userlen, setUserlen] = useState(0);

    useEffect(()=>{
        getUserdata().then((res)=>{
        setUserlen(res.length);
     })
    })

    return (


        <Privatelayout>


            <Card className="card bg-primary text-dark">
                <Card.Body >
                   
                      <Card.Text> {userlen} </Card.Text>   
                    <Card.Text> Total User </Card.Text>
                </Card.Body>
            </Card>
        </Privatelayout>
    );
}

export default Home;