const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "111222233",
    email: "andre@dominio.com",
};

console.log(`O nome do cliente é ${cliente["nome"]} e essa pesosa tem ${cliente["idade"]} em anos.`);

console.log(`Os 3 primeiros digitos do CPF são ${cliente["cpf"].substring(0, 3)}`);

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => console.log(`A chave ${chave} tem valor ${cliente[chave]}`));