import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client=new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectId)

        this.account = new Account(this.client)

    }

    async  createAccount({email,password,name}){
        try{
            const userAccount = await this.account.create(ID.unique(),email,password,name)
            
            if(userAccount){
                //call another function : login()
                return this.login({email,password});
            }
            else{
               return userAccount; 
            }
        }
        catch(error){
            throw error;
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password);  
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get();
        }
        catch(error){
            console.log("Appwrite Serice :: getCurrentUser :: Error",error.message);
        }

        return null;
    }

    //delete session => logout
    async logout(){
        try{
            await this.account.deleteSessions();
        }
        catch(error){
            console.log("Appwrite Service :: logout :: Error",error.message);
        }
    }

}

const authService=new AuthService();

export default authService;