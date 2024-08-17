import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongdb";
import User from "../../../../models/user";
import bcrypt from "bcryptjs"

export async function POST(req) {
    try{
            const {username, email,password} = await req.json();
            const hashPassword = await bcrypt.hash(password,10);

            await connectMongoDB();
            await User.create({username, email, password: hashPassword});

            console.log('Username: ',username);
            console.log('Email: ',email);
            console.log('Password: ',password);

            return NextResponse.json({message:"User registered."},{status:201});

    }catch(error){
        return NextResponse.json({message:" An error occured while registrating the user."},{status:500})
    }
    
}