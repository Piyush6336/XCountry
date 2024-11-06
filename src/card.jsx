
function Card({name,flag}){

    return(
        <div style={{
            height:"200px",
            width:"200px",
            border:"1px solid grey",
            borderRadius:"10px",
            alignContent:"center",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"space-around",
            textAlign:"center",
            padding:"10px"
          }}>
            <img style={{width:"100px", height:"100px"}} src={flag} alt={name}/>
            <h2>{name}</h2>
            
          </div>
    );
}
export default Card;
