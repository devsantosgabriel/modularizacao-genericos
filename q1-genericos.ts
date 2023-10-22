class Classe1 implements Interface1<number>{
    nome: string
    id: number;

    constructor(nome: string, id: number){
        this.nome = nome;
        this.id = id
    }
};

class Classe2 implements Interface2<boolean>{
    texto: string
    stattus: boolean;

    constructor(texto: string, status: boolean){
        this.texto = texto;
        this.stattus = status
    }
};


interface Interface1<Type>{
    id: Type
};

interface Interface2<Type>{
    stattus: Type
};

let objetoClasse_1 = new Classe1('Gabriel', 1);

let objetoClasse_2 = new Classe2('Musica', true);