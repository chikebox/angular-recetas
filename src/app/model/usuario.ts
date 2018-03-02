export class Usuario{
    id:number;
    nombre:string;
    apellido:string;//opcional
    email:string;//opcional
    avatar:string;
    sexo:Sexo;

    constructor(nombre:string,apellido:string='',email:string='',avatar:string='',sexo:Sexo=Sexo.Indefinido){
        this.id=-1;
        this.nombre=nombre;
        this.apellido=apellido;
        this.email=email;
        this.avatar= avatar;
        this.sexo=sexo;

    }
}

export enum Sexo {Hombre="Hombre", Mujer="Mujer", Indefinido="Indefinido"}
