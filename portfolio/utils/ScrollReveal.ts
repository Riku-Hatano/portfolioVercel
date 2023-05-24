import ScrollReveal from "scrollreveal";

const SR = () => {
    console.log("sr")
    ScrollReveal().reveal(".box", {
        duration: 800,
        viewFactor: 0.1,
        reset: true
    });
    ScrollReveal().reveal(".eventCell", {
        duration: 800,
        viewFactor: 0.01,
        reset: true
    });
}

export default SR;