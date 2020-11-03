import React from "react";
import Resume from "../assets/pdf/Resume.pdf";

const About = () => {
    return (
        <>
            <embed className="w-full" src={Resume} />
        </>
    );
};

export default About;
