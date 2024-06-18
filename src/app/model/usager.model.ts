import { Role } from './roles.model'; 

  export class Usager {
    id: number;
    nom: string;
    prenom: string;
    age: number;
    username: string;
    hashed_pwd: string;
    is_active: boolean;
    roles: Role[];

    constructor(id: number, 
                nom: string, 
                prenom: string, 
                age: number, 
                username: string, 
                hashed_password: string,
                is_active: boolean,
                roles: Role[]) {
      this.id = id;
      this.nom = nom;
      this.prenom = prenom;
      this.age = age;
      this.username = username;
      this.hashed_pwd = hashed_password;
      this.is_active = is_active;
      this.roles = roles;
    }

    
  }