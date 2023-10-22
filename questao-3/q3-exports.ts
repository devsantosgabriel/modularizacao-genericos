import { InterfaceA,InterfaceB, InterfaceC } from "../questao-4/q4-exports";


export class ClasseA implements InterfaceA{
    letra: string
    dia: string;
    constructor(letra: string, dia: string){
        this.letra = letra;
        this.dia = dia
    }
};
export class ClasseB implements InterfaceB{
    numero: number
    noite: string;
    constructor(numero: number, noite: string){
        this.numero = numero;
        this.noite = noite
    }
};
export class ClasseC implements InterfaceC{
    array: string[]
    tarde: string;
    constructor(array: string[], tarde: string){
        this.array = array;
        this.tarde = tarde
    }
};