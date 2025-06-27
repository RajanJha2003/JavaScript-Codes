// Show an example of a finally block that executes when updating customer profile
// information, regardless of whether the operation wassuccessful or resulted in an
// error.

function updateProfile(profile){
    try {
        if(!profile.name || !profile.email){
        throw new Error("Fill all details")
    }
    } catch (error) {
        console.log("Erorr updating profile",error)
        
    }finally{
        console.log("closing db connection")
    }

}

updateProfile({name:"Rajan",email:"rajan@gmail.com"})
updateProfile({})