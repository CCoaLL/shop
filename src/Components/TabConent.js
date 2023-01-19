import { useState, useEffect } from 'react';

function TabContent(props) {
    let [fade, setFade] = useState('')
    useEffect( () => {
        let a = setTimeout( () => { setFade('opa-end') }, 10 )

        return () => {
            clearTimeout(a)
            setFade('')
        }
    }, [props.tab] )

    return <div className={`opa-start ${fade}`}>
        { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.tab] }
    </div> 
}

export default TabContent;