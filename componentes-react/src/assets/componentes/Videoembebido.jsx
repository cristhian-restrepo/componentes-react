import React from "react";
import "./Video.css"

const Videoembebido = () => {
    return (
        <div className="videoc1">
            <h2>Video de prueba</h2>
            <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/JtqpDCWz4t0?si=sW5_mUztoWq4LBdp" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen></iframe>
        </div>
    );
};

export default Videoembebido