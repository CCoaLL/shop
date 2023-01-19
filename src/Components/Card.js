import { useNavigate } from 'react-router-dom'

function Card(props) {
    const navigate = useNavigate();

    return (
        <div className='col-md-4' onClick={ () => { navigate('/detail/'+String(Number(props.order)+1)) } }>
            <img src={ props.img } width="80%" alt='shoe1'/>
            <h4>{ props.title }</h4>
            <h4>{ props.price }</h4>
        </div>
    )
}

export default Card