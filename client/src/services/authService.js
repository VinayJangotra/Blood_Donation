export const handleLogin =(e,email,password,role)=>{
    e.preventDefault();
    try{
      console.log("login",e,email, password, role);

    }
    catch(error){
        console.log(error);
    }
};

export const handleRegister = (
  e,
  name,
  email,
  role,
  password,
  organisationName,
  hospitalName,
  website,
  address,
  phone
) => {
    e.preventDefault();
    try {
        console.log(
        "register",
        e,
        name,
        email,
        role,
        password,
        organisationName,
        hospitalName,
        website,
        address,
        phone
        );
    } catch (error) {
        console.log(error);
    }
};