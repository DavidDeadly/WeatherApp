export default function dayOrNigth (code) {
    if(code) {
        return code[code.length-1] === "d" ? "radial-gradient(closest-side at 30% 43%,rgba(255,246,0,0.6) 24%,rgba(11,202,223,0.6) 67%)" 
        : "radial-gradient(closest-side at 26% 43%, rgba(198,207,238,1) 23%, rgba(26,46,88,0.6) 39%)"
    }
};