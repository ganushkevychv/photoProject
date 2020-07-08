import React from "react"
import { Card, CardTitle, CardBody, CardText, CardImg} from "reactstrap"
import back from "../images/back.png"
const Story = () => {
    const card = {
        boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        alignItems:"center",
        marginLeft:"50px",
        marginRight:"50px",
        marginBottom:"30px",
    }
    return(

<div style={{textAlign:"center"}}>
            <Card style={card}>
            <CardImg src={back}/>
            <CardBody >
                <CardTitle className="text-center text-uppercase">Саша и Таня</CardTitle>
              <CardText className="text-center text-uppercase">
              <p>
                gksjdjSDJVJ OJOW JWOJ WJ EPWJ EPJRWPE POW JPE JPOWEJ POWJEPJ WPOJE POJWPJ JWPJ POJWPO JWPO
              </p>
              </CardText>
            </CardBody>
            </Card>
            <Card style={card}>
            <CardImg src={back}/>
            <CardBody >
                <CardTitle className="text-center text-uppercase">Саша и Таня</CardTitle>
              <CardText className="text-center text-uppercase">
              <p>
                gksjdjSDJVJ OJOW JWOJ WJ EPWJ EPJRWPE POW JPE JPOWEJ POWJEPJ WPOJE POJWPJ JWPJ POJWPO JWPO
              </p>
              </CardText>
            </CardBody>
            </Card>
</div>

    )
}
export default Story;
