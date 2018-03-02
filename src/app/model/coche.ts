export class Coche{
    id : number;
    marca : string;
    modelo : string;
    version : string;
    //características
    puertas : number;
    caballos : number;
    consumo : number;

    constructor( marca:string, modelo:string, puertas:number, caballos:number, consumo:number,version?:string ){
            this.id=-1;
            this.marca=marca;
            this.modelo= modelo;
            this.version=version;
            this.puertas=puertas;
            this.caballos=caballos;
            this.consumo=consumo;
    }
}