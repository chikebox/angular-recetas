export class Coche{
    id : number;
    marca : string;
    modelo : string;
    version : string;
    foto:string;
    //características
    puertas : number;
    caballos : number;
    consumo : number;
    

    constructor( marca:string, modelo:string,version:string,foto:string, puertas:number, caballos:number, consumo:number, ){
            this.id=-1;
            this.marca=marca;
            this.modelo= modelo;
            this.version=version;
            this.foto=foto;
            this.puertas=puertas;
            this.caballos=caballos;
            this.consumo=consumo;
    }
}