import React, {memo, useEffect} from "react";


function ItemsName(props) {
    const {data} = props
    useEffect(() => {
        console.log(`Item at index ${data.index}`)
    })
    return <h4>{data.text}</h4>
}

export default memo(ItemsName)