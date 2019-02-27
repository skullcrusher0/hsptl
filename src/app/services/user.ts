

export interface User {
    uid: string;
    name: string;
    email: string;
    contact: number;
    location: string;
    gender: string;
    dateOfBirth:string;
    language:string,
    photoURL?: string;
    emailVerified: boolean;

}

export interface Doctor {
    did: string;
    name: string;
    email: string;
    location: string;
    contact: number;
    gender:string;
    dateOfBirth:string;
    language:string,
    experience:number,
    docType:string;
    photoURL?: string;
    emailVerified: boolean;
}

export interface Post {
    title: string;
    photoURL?: string;
    content: string;
   // tags:any;
    author_id: string;
}

export interface Event {
    title: string;
    photoURL?: string;
    content: string;
   // author_id: string;
}

