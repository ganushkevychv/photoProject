import React from "react"
import { Card, CardTitle, CardBody, CardText, CardImg} from "reactstrap"
import back from "../images/back.png"
const Story = (props) => {
    const card = {
        boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        alignItems:"center",
        marginLeft:"50px",
        marginRight:"50px",
    }
    return(
<div style={{textAlign:"center"}}>
    
            <Card style={card}>
            <CardImg src={back}/>
            <CardBody >
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
