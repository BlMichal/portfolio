import createAccount from "./filecreate"


const page = () => {


    return (
        <form action={createAccount}>
            <input type="text" name="name" />            
            <input multiple type="file" name="file" />
            <button type="submit">Create Account</button>
        </form>
    )
}

export default page