<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1">

  <title>SAEU - Sistema de Aloca??o de Est?tio Uninove</title>
  <!-- include common vendor stylesheets -->
  <link rel="stylesheet" type="text/css" href="../../node_modules/bootstrap/dist/css/bootstrap.css">
  <link rel="stylesheet" type="text/css" href="../../node_modules/@fortawesome/fontawesome-free/css/fontawesome.css">
  <link rel="stylesheet" type="text/css" href="../../node_modules/@fortawesome/fontawesome-free/css/regular.css">
  <link rel="stylesheet" type="text/css" href="../../node_modules/@fortawesome/fontawesome-free/css/brands.css">
  <link rel="stylesheet" type="text/css" href="../../node_modules/@fortawesome/fontawesome-free/css/solid.css">
  <link rel="stylesheet" type="text/css" href="../../node_modules/@fortawesome/fontawesome-free/css/solid.css">
  <!-- include vendor stylesheets used in "Dashboard 2" page. see "application/views/default/pages/partials/dashboard-2/@vendor-stylesheets.hbs" -->
  <link rel="stylesheet" type="text/css" href="../../dist/css/ace-font.css">
  <link rel="stylesheet" type="text/css" href="../../dist/css/ace.css">
  <link rel="icon" type="image/png" href="assets/favicon.png" />
  <!-- "Dashboard 2" page styles specific to this page for demo purposes -->
  <link rel="stylesheet" type="text/css" href="../../dist/css/ace-themes.css">
  <link rel="stylesheet" href="https://cdn.datatables.net/1.13.4/css/jquery.dataTables.css" />
  <link rel="stylesheet" type="text/css" href="./local.css">

</head>

<body>



  <div class="body-container teste">
    <!-- BUSCA LOCAL -->
    <div class="page-content container" id="busca-local">
      <div class="row mt-3">
        <div class="mb-1 col-lg-12 col-md-12 col-sm-12">
          <!-- CABECALHO -->
          <div class="row mt-3">
            <div class="d-flex justify-content-between col-lg-12 col-md-12 col-sm-12 border-bottom pb-3">
              <h3 class="mb-0">Local</h3>
              <button class="btn btn-primary" type="button" id="btn-novo-local">Novo Local</button>
            </div>
            <p class="pt-2">Intruções da página</p>
          </div>
          <!-- OPÇÃO DE BUSCA -->
          <!-- <div class="row mt-3">
            <div class="col-lg-5 col-md-7 col-sm-12 pb-3 px-0">
              <div class="d-flex flex-column mb-1">
                <label>Escolha uma opção de busca</label>
                <div class="py-2 d-flex ">
                  <label class="mr-4">
                    <input type="radio" name="option" checked>
                    Codigo do Local
                  </label>
                  <label>
                    <input type="radio" name="option">
                    Descrição do Local
                  </label>
                </div>
                <div>
                   d-flex alinha os elementos por padrao
                  <input id="input" class="form-control bgc-grey-l4"
                    placeholder="Por exemplo: '1234' ou 'Hospital Maternidade'" />
                </div>
              </div>
            </div>
          </div> -->
          <div class="row mt-3">
            <!-- TABELA LOCAL -->
            <div class="col-12">
              <p class="font-weight-bold">Lista de Locais</p>
              <!-- carregando -->
              <div class="d-flex justify-content-center">
                <span class="carregando-titulo prg pr-3">Carregando...</span>
                <div id="carregando" class="spinner-border" role="status"></div>
              </div>
              <table id="tabela-local" class="table table-bordered table-bordered-x table-hover text-dark-m2 rTable">
                <!-- <thead class="text-dark-m3 bgc-primary">
                  <tr class="text-white">
                    <th class="align-middle">Código</th>
                    <th class="align-middle">Local</th>
                    <th class="align-middle">Endereço</th>
                    <th class="align-middle">Telefone</th>
                    <th class="align-middle">Ponto de Encontro</th>
                    <th class="align-middle">Ponto de referência</th>
                    <th class="align-middle">Valor hora</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>

                </tbody> -->

              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- NOVO LOCAL -->
    <div class="page-content container px-5" id="novo-local">
      <div class="row mt-3">
        <a href=""
          class="text-blue b-underline-0 b-centered b-hovered no-underline pb-0 px-1 bgc-h-default-l3 radius-1">
          <i class="fa fa-arrow-left mr-1"></i>
          <span>Voltar</span>
        </a>
      </div>
      <div class="row mt-3">
        <p>Instruções da Página</p>
      </div>
      <div class="form row mt-3">
        <div class="col-lg-9 col-md-9 col-sm-12">
          <label>Nome do local:</label>
          <div class="d-flex align-items-center">
            <input id="input-nome-buscar" type="text" class="form-control input-novo"
              placeholder="Digite o nome do Hospital ou Clínica">
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-12">
          <div class="align-items-baseline">
            <label>Telefone:</label>
            <input class="tel form-control" type="number" maxlength="11" placeholder="(99) 99999-9999">
          </div>
        </div>
      </div>
      <div class="form row mt-3">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <div class="align-items-baseline">
            <label>Endereço Completo:</label>
            <input id="input-endereco" type="text" class="form-control input-novo"
              placeholder="Logradouro, Número - Bairro">
          </div>
        </div>
      </div>
      <div class="form row mt-3">
        <div class="col-lg-4 col-md-4 col-sm-12">
          <div class=" align-items-baseline">
            <label>Ponto de Encontro:</label>
            <input id="input-encontro" type="text" class="form-control input-novo"
              placeholder="Ex.: Entrada de Funcionário no térreo">
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12">
          <div class="align-items-baseline">
            <label>Informações <i>(Ponto de referência):</i>
            </label>
            <input id="input-info" type="text" class="form-control input-novo"
              placeholder="Ex.: Metrô, Praça, Igreja etc">
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12">
          <div class="align-items-baseline">
            <label>Valor Hora:</label>
            <div id="valorHora" class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">R$</span>
              </div>
              <input type="text" class="form-control" placeholder="0,00">
            </div>
          </div>
        </div>
      </div>

      <div class="bgc-grey-l3 mt-3 p-3">
        <div class="row mt-3">
          <div class="col-lg-5 col-md-5 col-sm-5">
            <!-- <label>Escolha uma opção de busca</label> -->
            <!-- <div class="py-2 d-flex ">
                <label class="mr-4"> <input type="radio" name="option" checked="">CNPJ</label>
                <label class="mr-4">
                  <input type="radio" name="option" checked="">CNES
                </label>
                <label>
                  <input type="radio" name="option">Nome fantasia
                </label>
              </div> -->
            <p>Digite: Nome fantasia, CNPJ ou CNES para buscar</p>
            <div class="d-flex">
              <input id="input-busca-novo" class="form-control" placeholder="Digite aqui">
              <button id="btn-buscar-tabela" class="btn btn-primary ml-1" disabled> <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
        <!-- TABELA NOVO-->
        <div class="p-3 row">
          <div class="g-col-lg-12">
            <p class="font-weight-bold">Resultados da pesquisa</p>
            <table id="tabela-novo-local"
              class="tabela-selecionada table table-bordered table-bordered-x table-hover rTable bgc-white">
              <thead class="text-light bgc-primary">
                <tr>
                  <th></th>
                  <th>Código</th>
                  <th>Nome</th>
                  <th>CNPJ</th>
                  <th>CNES</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div>
    </div>

    <!-- ALTERAR LOCAL -->
    <div class="page-content container px-5" id="editar-local">

      <div class="row mt-3">
        <a href=""
          class="text-blue b-underline-0 b-centered b-hovered no-underline pb-0 px-1 bgc-h-default-l3 radius-1">
          <i class="fa fa-arrow-left mr-1"></i>
          <span>Voltar</span>
        </a>
      </div>
      <div class="row mt-3">
        <p>ALTERAÇÃO DE DADOS</p>
      </div>
      <div class="form row mt-3">
        <div class="col-lg-9 col-md-9 col-sm-12">
          <div class="align-items-baseline">
            <label>Nome do local:</label>
            <input id="input-nome-editar" type="text" class="form-control"
              placeholder="Digite o nome do Hospital ou Clínica">
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-12">
          <div class="align-items-baseline">
            <label>Telefone:</label>
            <input class="tel form-control" type="text" placeholder="(99) 99999-9999">
          </div>
        </div>
      </div>
      <div class="form row mt-3">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <div class=" align-items-baseline">
            <label>Endereço Completo:</label>
            <input type="text" class="form-control" placeholder="Logradouro, Número - Bairro">
          </div>
        </div>
      </div>
      <div class="form row mt-3">
        <div class="col-lg-4 col-md-4 col-sm-12">
          <div class=" align-items-baseline">
            <label>Ponto de Encontro:</label>
            <input type="text" class="form-control" placeholder="Ex.: Entrada de Funcionário no térreo">
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12">
          <div class="align-items-baseline">
            <label>Informações <i>(Ponto de referência):</i>
            </label>
            <input type="text" class="form-control" placeholder="Ex.: Metrô, Praça, Igreja etc">
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12">
          <div class="align-items-baseline">
            <label>Valor Hora:</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">R$</span>
              </div>
              <input type="text" class="form-control" placeholder="0,00">
            </div>
          </div>
        </div>
      </div>
      <div class="p-3">
        <div class="row">
          <p class="m-0">Para trocar os dados abaixo, é necessário procurar e selecionar outra empresa no campo
            de
            busca.<i> Essa
              etapa é opcional</i></p>
        </div>
      </div>
      <form id="form-tabela-editar" class="bgc-grey-l3 p-3">
        <div class="form row mt-3">
          <div class="col-lg-2 col-md-2 col-sm-12">
            <div class=" align-items-baseline">
              <label>Código:</label>
              <input type="text" readonly maxlenght="4" class="form-control" placeholder="0000">
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class=" align-items-baseline">
              <label>Nome fantasia:</label>
              <input type="text" readonly maxlenght="4" class="form-control" placeholder="0000">
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-12">
            <div class=" align-items-baseline">
              <label class="mx-2">CNPJ:</label>
              <input type="text" readonly class="form-control">
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-12">
            <div class=" align-items-baseline">
              <label class="mx-2">CNES:</label>
              <input type="text" readonly class="form-control">
            </div>
          </div>
        </div>
        <div class="form row mt-3">
          <div class="col-lg-6 col-md-6 col-sm-12">
            <div class="d-flex flex-column mb-1">
              <!-- <label>Escolha uma opção de busca</label> -->
              <!-- <div class="py-2 d-flex ">
                <label class="mr-4"> <input type="radio" name="option" checked="">CNPJ</label>
                <label class="mr-4">
                  <input type="radio" name="option" checked="">CNES
                </label>
                <label>
                  <input type="radio" name="option">Nome fantasia
                </label>
              </div> -->
              <p>Digite: Nome fantasia, CNPJ ou CNES para buscar</p>
              <div class="d-flex">
                <input id="input-busca-editar" class="form-control" placeholder="Digite aqui">
                <button id="btn-tabela-editar" class="btn btn-primary ml-1" disabled> <i class="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- TABELA EDITAR-->
        <div class="row mt-3">
          <div class="col-12">
            <p class="font-weight-bold">Resultados da pesquisa</p>
            <table id="tabela-local-editar"
              class="tabela-selecionada table table-bordered table-bordered-x table-hover text-dark-m2 rTable bgc-white">
              <!-- <thead class="text-light bgc-primary">
                <tr>
                  <th></th>
                  <th>Código</th>
                  <th>Nome</th>
                  <th>CNPJ</th>
                  <th>CNES</th>
                </tr>
              </thead> -->
            </table>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </form>
      <div class="form-row mt-3">
        <div class="d-flex justify-content-start col-lg-12 col-md-12 col-sm-12">
          <button class="btn btn-success align-middle" style="width: 120px" type="button">
            <i class="fa fa-check mr-1"></i>
            <span>Incluir</span>
          </button>
        </div>
      </div>
    </div>



    <!--  o excluir esta no JAVASCRIPT pois ele é um modal  -->




    <!-- include common vendor scripts used in demo pages -->
    <script type="text/javascript" src="../../node_modules/jquery/dist/jquery.js"></script>
    <script type="text/javascript" src="../../node_modules/popper.js/dist/umd/popper.js"></script>
    <script type="text/javascript" src="../../node_modules/bootstrap/dist/js/bootstrap.js"></script>
    <script type="text/javascript" src="../../node_modules/bootbox/bootbox.all.js"></script>
    <!-- include vendor scripts used in "Dashboard 2" page. see "application/views/default/pages/partials/dashboard-2/@vendor-scripts.hbs" -->
    <script type="text/javascript" src="../../node_modules/chart.js/dist/Chart.js"></script>
    <!-- include Ace script -->
    <script type="text/javascript" src="../../dist/js/ace.js"></script>
    <script type="text/javascript" src="../../assets/js/demo.js"></script>
    <!-- this is only for Ace's demo and you don't need it -->
    <!-- "Dashboard 2" page script to enable its demo functionality -->
    <!-- <script type="text/javascript" src="../../application/views/default/pages/partials/dashboard-2/@page-script.js"></script> -->
    <script type="text/javascript" src="../../node_modules/inputmask/dist/jquery.inputmask.js"></script>
    <script src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.js"></script>
    <script type="text/javascript" src="./local.js"></script>
  </div>
</body>

</html>