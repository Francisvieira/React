//import React from 'react'
const PRODUTOS = '_PRODUTOS';

export function ErroValidaçao(errors){
this.errors = errors;
};

export default class ProdutoService {
// validação dos campos nome,preço,fornecedor,sku edescrição
    validar =(produto) =>{
        const errors =[]

        if (!produto.nome){
            errors.push(' O Campo Nome é obrigatório')
        }
        if (!produto.fornecedor){
            errors.push(' O Campo Fornecedor é obrigatório')
        }
        if (!produto.sku){
            errors.push(' O Campo SKU é obrigatório')
        }
        if (!produto.descrição){
            errors.push(' O Campo Descrição é obrigatório')
        }
        if (!produto.preço || produto.preço <=0){
            errors.push(' O Campo Preço deve ter um valor maior que 0 (zero)')
        }

        if (errors.length >0){
            throw new ErroValidaçao (errors)
        }
    }

    obterProdutos =()=>{
        const produtos = localStorage.getItem(PRODUTOS)
        return JSON.parse(produtos)
    } 

    salvar = (produto) => {
        this.validar(produto)
        let produtos = localStorage.getItem(PRODUTOS)

        if (!produtos) {  // array vazia
            produtos = []
        } else {
            produtos = JSON.parse(produtos)
        }
        produtos.push(produto)
        localStorage.setItem(PRODUTOS,JSON.stringify(produtos))
    }

}