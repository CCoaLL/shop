import { Table } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { changeCount } from '../store';

function Cart() {
    let products = useSelector( (state) => { return state.products; } )
    let dispatch = useDispatch();

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map( (d, i) => {
                            return (
                                <tr key={ i }>
                                    <td>{ i+1 }</td>
                                    <td>{ d.name }</td>
                                    <td>{ d.count }</td>
                                    <td><button onClick={ () => { dispatch(changeCount(d.id)) } }>+</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Cart;