export class Usuario{
    id:number=-1;
    nombre:string;
    apellido:string;//opcional
    email:string;//opcional
    avatar:string;
    sexo:Sexo;
    constructor(nombre:string,apellido:string='',email:string='',avatar:string='',sexo:Sexo=Sexo.Indefinido){
        this.nombre=nombre;
        this.apellido=apellido;
        this.email=email;
        this.avatar= avatar;
        this.sexo=sexo;

    }
}

enum Sexo {Hombre, Mujer, Indefinido}
