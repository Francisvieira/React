import React from 'react'
import ProdutoService from '../../app/produtoService'
const estadoInicial = { //essa const é para limpar os campos
    nome: '',
    sku: '',
    preço: "",
    descrição: '',
    fornecedor: '',
    sucesso: false,
    errors: []
}
class CadastroProduto extends React.Component {

    state = estadoInicial // state para o estado inicial 
    constructor() {
        super()
        this.service = new ProdutoService();
    }
    onChange = (event) => {
        const valor = event.target.value
        const nomeDoCampo = event.target.name
        this.setState({ [nomeDoCampo]: valor })
    }
    onSubmit = (event) => {
        const produto = {
            nome: this.state.nome,
            sku: this.state.sku,
            preço: this.state.preço,
            descrição: this.state.descrição,
            fornecedor: this.state.fornecedor,
        }
        try {
            this.service.salvar(produto)
            this.limpaCampo()
            this.setState({ sucesso: true })
        } catch (erro) {
            const errors = erro.errors
            this.setState({ errors: errors })
        }
    }
    limpaCampo = () => {
        this.setState(estadoInicial) //função limpar os campos da tabela de cadastro de produtos  
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Cadastro de Produtos
                </div>

                <div className="card-body">

                    {this.state.sucesso &&
                        //alerta para notificar que o produto foi cadastrado
                        <div class="alert alert-dismissible alert-success">
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                            <strong>Tudo Ok !</strong> Produto Cadastrado com Sucesso!.
                            </div>
                    }
                    {this.state.errors.length > 0 &&
                        this.state.errors.map(msg => {
                            return (//alerta para notificar que ocorreu um erro
                                <div class="alert alert-dismissible alert-danger">
                                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                                    <strong>Erro!</strong>{msg}
                                </div>

                            )
                        })

                    }

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Nome:*</label>
                                <input
                                    type="text" name="nome"
                                    value={this.state.nome}
                                    onChange={this.onChange}
                                    className="form-control" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>SKU:*</label>
                                <input type="text" name="sku"
                                    value={this.state.sku}
                                    onChange={this.onChange}
                                    className="form-control" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Descrição:</label>
                                    <textarea name="descrição"
                                        value={this.state.descrição}
                                        onChange={this.onChange}
                                        className="form-control"></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Preço:*</label>
                                <input name="preço"
                                    onChange={this.onChange}
                                    type="text" placeholder="R$:" value={this.state.preço}
                                    className="form-control" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Fornecedor:*</label>
                                <input type="text"
                                    name="fornecedor"
                                    onChange={this.onChange}
                                    value={this.state.fornecedor}
                                    className="form-control" />
                            </div>
                        </div>

                        <p></p>
                    </div>

                    <div className="row">
                        <div className="col-md-1">
                            <button onClick={this.onSubmit} className="btn btn-success">Salvar</button>
                        </div>

                        <div className="col-md-1">
                            <button onClick={this.limpaCampo} className="btn btn-primary">Limpar</button>
                        </div>

                    </div>

                </div>

            </div>


        )
    }
}
export default CadastroProduto;

// adcionado as rotas do react atraves da yarn add switch 