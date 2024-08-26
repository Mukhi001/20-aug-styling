export const Headd=(prop)=>{
    console.log(prop)
    const {text,children}=prop

    return (
        <>
         <h1>{text}</h1>
         <h1>{children}</h1>
        </>
       
    )
}