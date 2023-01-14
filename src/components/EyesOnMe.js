// Code EyesOnMe Component Here
function EyesOnMe (){
    function handleFocus(){
        console.log("Good!");
    }
    function handleBlur(){
        console.log("Hey!Eyes On Me!")
    }

    return (
        <button onFocus={handleFocus} onBlur={handleBlur}>Eyes On Me</button>
    );  
        
}
 
export default EyesOnMe;