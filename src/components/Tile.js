import React from "react";

function Tile({imageSrc, imageAlt, tileTitle, tileText}) {
    if (imageSrc && imageAlt) {
        return <section>
            <img src={imageSrc} alt={imageAlt}/>
        </section>
    } else if (tileTitle && tileText) {
        return <section>
            <h2>{tileTitle}</h2>
            <p>{tileText}</p>
        </section>
    }
}

export default Tile;