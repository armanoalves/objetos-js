const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["115555550", "1155554330"],
};

cliente.enderecos = [
    {
    rua: "Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
    },
];

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
};

console.log(encomenda);