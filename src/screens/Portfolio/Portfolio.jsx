import React,{useState} from 'react'
import './portfolio.css'
import Portfoliodata from './Portfoliodata'
import  Container  from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


function Portfolio() {
    const[modalShow,setModalShow]=useState(false);
    const[tempData,setTempData]=useState({});

    function createModal(data){
        return (<div><Modal 
        show={modalShow}
        onHide={()=>setModalShow(false)}
        size="lg"
        arial-labelledby="contained-modal-title-vcenter" centered>

      
        <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
                {data.desc}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <p> {data.summary}</p>
           <Image src={data.image} style={{width:"200px"}}/>
        </Modal.Body>
        <a id="portfolio-modal-link" href={data.link} target="_blank"  rel="noreferrer">
        Goto Site</a>
        <Modal.Footer>
        <div>Technologies Used:</div>
            <p style={{fontSize:".7rem",marginRight:"auto"}}>{data.tech}</p>
        <Button  onClick={()=>setModalShow(false)}>
     
            Close
          </Button>
          </Modal.Footer>
        </Modal>
        </div>)
    }

    // //code for closing Modal Box
    // const handleClose = () => setModalShow(false);

    const mapped=Portfoliodata.map((e,idx)=>{
        return(
        <Card key={idx} id="portfolio_card_container">
        <Image className="portfolio_image" onClick={()=>{
            setTempData({
                image:e.image,
                link:e.link,
                desc:e.desc,
                summary:e.summary,
                tech:e.tech

            })
            setModalShow(true);
        }}
        src={e.image}>

        </Image>
        <div className="portfolio_click_info">	&#x1F50E;&#xFE0E;</div>
             
        {createModal(tempData)}

        </Card>
    )});
    return (
        <div className="portfolio_main_container" id="portfolio">
           <h1> PORTFOLIO</h1>
           <p>This is my GitHUb Page
           <a href="https://github.com/Nisha-web21" target="_blank" rel="noreferrer">https://github.com/Nisha-web21</a></p>
           <Container fluid="lg" style={{padding:"2rem 0"}}>
               <Row>
{mapped}
               </Row>
           </Container>
        </div>
    )
}

export default Portfolio
