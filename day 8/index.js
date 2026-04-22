// //try catch

// try{

// }catch(err){

// }

// //callbacks

// function myFun(){
//     console.log("hii");   
// }

// setTimeout(myFun,2000);//It is used to call the myFun for single time
// //setInterval(myFun,1000);It is used to call the myFun for multiple time
//.then


const fetchAPI = async () => {
    let imageURL = null;
    try {
        let res = await fetch("https://dog.ceo/api/breeds/image/random")
        let data = await res.json()//java script object notation
        imageURL = data.message
       
        
    }catch (err) {
        console.log(err);  
    }

    let image = document.getElementById("image")
    image.src = imageURL
}

fetchAPI()

