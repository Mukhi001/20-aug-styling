export const Im=(props)=>{
    
    const {source,alternateText,width,height}=props
    return (
        <>
        <img src={source} alt={alternateText} width={width} height={height} />
        </>
    )
}