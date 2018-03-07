/* Clase para encapsular los atributos de una receta */
export class Receta{
    id:number;
    nombre : string;
    foto : string;
    descripcion : string; 
    likes : number;
    cocinero : string;
    fotoGluten: string;
    isGlutenFree:boolean;
    ingredientes:string[];
    constructor(pNombre:string="Receta por defecto", pFoto:string='', pDescripcion:string='', pLikes:number=0, pCocinero:string='Anonimo', pIsGlutenFree:boolean=false, pIngredientes:string[]=[],){
        this.id=0;
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