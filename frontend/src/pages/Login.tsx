
function Login(){

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[userData, setUserData] = useState([]);
    const toast = useToast()
    const navigate = useNavigate()
    const {userLoggedIn, setUserLoggedIn, isAdmin, setIsAdmin} = useContext(AuthContext);
    // console.log(isAuth);
 
    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then((response)=>
        // console.log(response.data))
        setUserData(response.data))
    },[])

    

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 8;
    };

    const handleLogin=(e)=>{
        e.preventDefault();
        console.log(email, password);
        setEmail("");
        setPassword("");

        if (!validateEmail(email)) {
            toast({
                title: 'Email incorrect',
                description: "Enter email in correct format ",
                status: 'error',
                duration: 2000,
                isClosable: true,
              })
            return;
        }
        if (!validatePassword(password)) {
            // console.log(password);
            toast({
                title: 'Password incorrect',
                description: "Password must be at least 8 characters long",
                status: 'error',
                duration: 2000,
                isClosable: true,
              })

            return;
            
          }

          if(email == "admin@gmail.com"){
            setIsAdmin(true);
            navigate("/")
          }

        userData.map((user)=>{
            if(user.email == email){
                setUserLoggedIn((prev)=>{
                    return {...prev, id:user.id, username: user.username, isAuth: true, email:email}
                })
   
                navigate('/')
            }
        })

    }
    useEffect(()=>{
        console.log(userLoggedIn);
        console.log(isAdmin);
        
        
    },[userLoggedIn, isAdmin])


    return(
        <h2>Welcome to login page</h2>
    )
}

export {Login}