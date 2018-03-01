/* Clase para encapsular los atributos de una receta */
export class Receta{
    nombre : string;
    foto : string;
    descripcion : string; 
    likes : number;
    cocinero : string;
    fotoGluten: string;
    isGlutenFree:boolean;
    ingredientes:string[];
    constructor(pNombre:string, pFoto:string, pDescripcion:string, pLikes:number, pCocinero:string, pIsGlutenFree:boolean, pIngredientes:string[],){
        this.nombre=pNombre;
        this.foto = pFoto;
        this.descripcion = pDescripcion;
        this.likes = pLikes;
        this.cocinero = pCocinero;
        this.isGlutenFree = pIsGlutenFree;
        this.ingredientes = pIngredientes;
        this.toString();
    }
    toString(){
        console.log('Receta:'+this.nombre+this.foto+this.descripcion+this.likes+this.cocinero+this.isGlutenFree+this.ingredientes);
    }
}