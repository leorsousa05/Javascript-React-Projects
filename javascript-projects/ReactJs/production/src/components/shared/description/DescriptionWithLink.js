import React, { Fragment } from "react";

const DescriptionWithLink = (props) => {
    return(
        <>
            <p>{props.text}</p>
            <a href={props.desc_url}>{props.desc_url}</a>
        </>
    )
}

export default DescriptionWithLink;