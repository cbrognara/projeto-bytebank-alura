import { Cliente } from './cliente.js'
import { ContaPoupanca } from './conta-poupanca.js'
import { ContaCorrente } from './conta-corrente.js'
import { Conta } from './conta.js'
import { Funcionario } from './funcionario.js'

const cliente1 = new Cliente('Ricardo', 11122233309)

const contaCorrenteRicardo = new ContaCorrente(0, cliente1, 1001)
contaCorrenteRicardo.depositar(500)
contaCorrenteRicardo.sacar(100)

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)
contaPoupanca.sacar(10)

// console.log(contaCorrenteRicardo)
// console.log(contaPoupanca)
// console.log(cliente1)

const conta = new Conta(0, cliente1, 1001)
console.log(conta)
