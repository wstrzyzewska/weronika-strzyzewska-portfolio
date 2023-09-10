import React from "react";
import {useMotionTemplate, useMotionValue, motion} from "framer-motion";

function Hero() {

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ clientX, clientY, currentTarget }) {
        let {left, top} = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);

    }

    return (
            <section onMouseMove={handleMouseMove} className="hero">
                     <motion.div
                         className="hero__background"
                         style={{
                            background: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, #cc2ccc 0%, purple 40%, transparent 80%)`,
                         }}/>
                    <span className="hero__title">Weronika Strzyżewska</span>
                    <span className="hero__description">Front-End Developer</span>
            </section>
    )
}

export default Hero