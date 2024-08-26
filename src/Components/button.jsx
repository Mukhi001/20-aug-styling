export const Buttton=(prop)=>{
    const {text,bgColor}=prop
    return (
        <>
        <button style={{backgroundColor:bgColor}}>{text}</button>
        </>
    )
}