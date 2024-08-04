'use server'

export default async function createAccount (formData: FormData){  

    const name = formData.get("name");
    
    const file = formData.get("file");

    console.log({ name, file });
};