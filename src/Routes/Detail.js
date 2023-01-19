import '../App.css';

import TabContent from '../Components/TabConent';

import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap'
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


function Detail(props) {
    const navigate = useNavigate();
    const { id } = useParams();
    let [tab, setTab] = useState(0);

    useEffect( () => { toast.info('2초 이내 구매시 할인', { position: 'top-center', draggable: true }) }, [] );

    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes"+id+".jpg"} width="80%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{props.shoes[String(Number(id)-1)].title}</h4>
                    <p>{props.shoes[String(Number(id)-1)].content}</p>
                    <p>{props.shoes[String(Number(id)-1)].price}</p>
                    <button className="btn btn-danger btn-lg">주문하기</button>
                    <p></p>
                    <button onClick={ () => { navigate('/') } } className="btn btn-secondary btn-lg">취소</button>
                </div>
            </div>
            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={ () => { setTab(0) } } eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={ () => { setTab(1) } } eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={ () => { setTab(2) } } eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>

            <TabContent tab={tab} />
        </div>
        </>
    )
}

export default Detail;