import React from 'react'

const estadoInicial={
    nome: '',
    sku: '',
    preço: "",
    descrição: '',
    fornecedor: ''
}

class CadastroProduto extends React.Component {

    state = estadoInicial
      
    
    onChange = (event) => {
        const valor = event.target.value
        const nomeDoCampo = event.target.name
        this.setState({ [nomeDoCampo]: valor })
    }
    onSubmit = (event) => {
        console.log(this.state)
    }
    limpaCampo= () => {
        this.setState(estadoInicial)
    
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Cadastro de Produtos
                </div>
                <div className="card-body">

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
                                    type="text" value={this.state.preço}
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