import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Col, Row } from 'react-bootstrap';

export default function Questions() {

    const [Qdata, setQdata] = useState([]);
    const [answer, setAnswer] = useState(0);
    const [currentQ, setCurrentQ] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    useEffect(() => {
        axios.get("https://opentdb.com/api.php?amount=10&type=multiple")
            .then((res) => {
                console.log(res.data.results, "hello")
                setQdata(res.data.results);
            })
            .catch(error=>{
                console.log(error);
            })

    },[])
    console.log(Qdata,"check")




    const handleScore = () => {
        console.log(answer);
        const nextQuestions = currentQ + 1;
        setScore(score + 1);
        if (nextQuestions < Qdata.length) {
            setCurrentQ(nextQuestions);
        }
        else {
            setShowScore(true);
        }
    }
    const handleAnswer = ()=>{
        setAnswer(2);
    }


    if(Qdata.length>0)
    return (
        <div>
            {showScore ? <h1>
                Your score is {score}/{Qdata.length}
            </h1> : <div>


                <Row>
                    <Col lg={12}>
                        <h1>Question {currentQ + 1}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <h3>Question Category:{Qdata[currentQ].category} </h3>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        {Qdata[currentQ].question}
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <Button onClick={handleScore}>
                            {Qdata[currentQ].correct_answer}

                        </Button>

                        {Qdata[currentQ].incorrect_answers.map((answer) => <Button key={answer} onClick={handleAnswer}>{answer}</Button>)}


                    </Col>
                </Row>
            </div>}





        </div>

    )
    return(<p>Loading</p>)
}
