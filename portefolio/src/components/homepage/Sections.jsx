import Name from "./name";

 const style = {
     bg: " bg-[#0D0628]",
     m0: "m-0",
}

const Sections = () => {
    return (
        <div className= {`${style.bg} ${style.m0}`}>
            <Name />
        </div>
    )
}
export default Sections;