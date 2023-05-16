// import buscarLocal from "./buscarLocal";

//feath buscar
inicializarPaginaBuscar();
function inicializarPaginaBuscar() {
  //import aqui
  inicializarBotaoTabelaNovo();
  inicializarBotaoNovoLocal();
  inicializarBotaoTabelaEditar();
  validacoes();
  fetch("../api/apiLocalBuscar.php")
    .then((r) => r.json())
    .then((r) => {
      exibirLoading();
      montaTabelaBuscar(r);
      ocultarLoading();
      //dataTables tabelaLocal
      $(document).ready(function () {
        $("#tabela-local").DataTable({
          language: {
            decimal: "",
            emptyTable: "No data available in table",
            info: "Exibindo página _PAGE_ de _PAGES_",
            infoEmpty: "Mostrando  0 de 0",
            infoFiltered: "(Filtradas de _MAX_ registros no total)",
            infoPostFix: "",
            thousands: ",",
            lengthMenu: "Exibindo _MENU_ registros por página",
            loadingRecords: "Loading...",
            processing: "",
            search: "Buscar:",
            zeroRecords: "Nenhum registro correspondente encontrado",
            paginate: {
              first: "First",
              last: "Last",
              next: "Próxima",
              previous: "Anterior",
            },
            aria: {
              sortAscending: ": activate to sort column ascending",
              sortDescending: ": activate to sort column descending",
            },
          },
          order: [[1, "asc"]], // ordena pela coluna "Local" em ordem crescente
        });
      });
    });
}

//tabela buscar
function montaTabelaBuscar(r) {
  1;
  //export
  const tabelaLocal = document.getElementById("tabela-local"); // Vai buscar a tabela lá no loca.php pelo id
  // le tabeltaHTML vai guardar o código HTML em sí
  let tabelaHTML = `
<table>
  <thead class="text-dark-m3 bgc-primary">
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
  </thead>`;
  tabelaHTML += `<tbody>`;
  r.forEach((item) => {
    // item aqui se refere a cada dado da API JSON
    // tabeltaHTML vai ser concatenada com o cabecalho
    tabelaHTML += `
        <tr class="tr-excluir">
          <td class="campoTd">${item.SAHQ_CODIGO}</td>
          <td class="campoTd">${item.SAHQ_HOSPITAL || "-"}</td>
          <td class="campoTd">${item.SAHQ_END || "-"}</td>
          <td class="campoTd">${item.SAHQ_TELEFONE || "-"}</td>
          <td class="campoTd">${item.SAHQ_PTENCONTRO || "-"}</td>
          <td class="campoTd">${item.SAHQ_INFO || "-"}</td>
          <td class="campoTd">${
            item.SAHQ_VALOR
              ? isNaN(item.SAHQ_VALOR)
                ? ""
                : item.SAHQ_VALOR
              : "-"
          }</td>
          <td>
          <div class='d-none d-lg-flex text-muted'>
            <a href="#" class="btn-editar btn radius-1 btn-sm btn-brc-tp btn-outline-default btn-h-outline-primary btn-a-outline-primary btn-text-primary text-110 mr-2"><i
            class="fa fa-pencil-alt"></i>
            </a>
            <a href="#"
            class="btn-excluir btn radius-1 btn-sm btn-brc-tp btn-outline-default btn-h-outline-danger btn-a-outline-danger btn-text-danger text-110"><i
            class="fa fa-trash-alt"></i></a>
          </div>
          </td>
        </tr>`;
  });
  tabelaHTML += `
</tbody>
</table>`;
  tabelaLocal.innerHTML = tabelaHTML; // tabelaLocal é a tag <table></table> do arquivo local.php o innerHTML é exatamento oque tem dentro da tag <table></table>
  inicializarBotaoExcluirTabelaBuscar();
  inicializarBotaoEditarLocal();
}

/* Função `loading` do tabela */
function exibirLoading() {
  document.querySelector("#carregando").style.display = "block";
  document.querySelector(".carregando-titulo").style.display = "block";
}

function ocultarLoading() {
  document.querySelector("#carregando").style.display = "none";
  document.querySelector(".carregando-titulo").style.display = "none";
}

// botao editar do buscar
function inicializarBotaoEditarLocal() {
  const buscaLocal = document.getElementById("busca-local"); // página busca local
  var editarLocal = document.getElementById("editar-local"); //id da pagina editar
  var btnEditar = document.querySelectorAll(".btn-editar"); // class do botao editar
  btnEditar.forEach((cadaBotao) => {
    cadaBotao.addEventListener("click", () => {
      buscaLocal.style.display = "none"; // da o none na pagina buscar
      editarLocal.style.display = "block"; // e aparece a de alteraçao
      const url = window.location;
      url.hash = "editar-local"; // coloca editar local no final da URL
      history.pushState(null, null, url);
      document.getElementById("input-nome-editar").focus();
    });
  });
}

// botao e tabela  editar
function inicializarBotaoTabelaEditar() {
  const btnTabelaEditar = document.getElementById("btn-tabela-editar");
  const formEditar = document.getElementById("form-tabela-editar");
  const inputEditar = document.getElementById("input-busca-editar");

  inputEditar.addEventListener("input", () => {
    inputEditar.value.length > 3
      ? btnTabelaEditar.removeAttribute("disabled")
      : btnTabelaEditar.setAttribute("disabled", true);
  });

  btnTabelaEditar.addEventListener("click", (e) => {
    e.preventDefault();
    const formData = new FormData(formEditar);
    const busca = inputEditar.value;
    fetch(`../api/apiTabelas.php?busca=${busca}`, {
      method: "POST",
      body: formData,
    })
      .then((r) => r.json())
      .then((r) => {
        const tabela = document.getElementById("tabela-local-editar");
        if (r.length === 0) {
          bootbox.alert({
            message: "<b><p class='p-3'>Nenhum resultado encontrado.</p></b>",
          });
          tabela.style.display = "none";
        } else {
          criaTabelaEditar(r);
          tabela.style.display = "block";
        }
      });
  });
}

function criaTabelaEditar(a) {
  const tabelaEditarLocal = document.getElementById("tabela-local-editar");

  tabelaEditarLocal.style.display = "block";

  let tabelaEditarHTML = `
        <thead class="text-light bgc-primary">
          <tr>
            <th></th>
            <th>Código</th>
            <th>Nome</th>
            <th>CNPJ</th>
            <th>CNES</th>
          </tr>
        </thead>
  `;

  tabelaEditarHTML += "<tbody>";
  a.forEach((item) => {
    tabelaEditarHTML += `
    <tr class="tr-pointer">
        <td>
          <input type="radio" name="option">
        </td>
        <td>${item.SBNH_CODIGO}</td>
        <td style="width: 900px;">${item.SBNH_FANTASIA || "-"}</td>
        <td style="width: 190px;">${item.SBNH_CNPJ || "-"}</td>
        <td>${item.SBNH_CNES || "-"}</td>
    </tr>
    `;
  });
  tabelaEditarHTML += `
  </tbody>
  </table>
  `;
  tabelaEditarLocal.innerHTML = tabelaEditarHTML;
  inicializarSelecaoLinhaTabelaEditarLocal();
}
//botao novo do buscar
function inicializarBotaoNovoLocal() {
  const buscaLocal = document.getElementById("busca-local"); // página busca local
  const novoLocal = document.getElementById("novo-local"); // página para inserir novo local
  const btnNovoLocal = document.getElementById("btn-novo-local"); // botão da página novo local
  btnNovoLocal.addEventListener("click", () => {
    buscaLocal.style.display = "none";
    novoLocal.style.display = "block";
    const url = window.location;
    url.hash = "novo-local";
    history.pushState(null, null, url);

    document.getElementById("input-nome-buscar").focus();
  });
}
//fetch e botao tabela novo
function inicializarBotaoTabelaNovo() {
  const btnBuscarTabelaNovo = document.getElementById("btn-buscar-tabela");
  const inputBuscaNovo = document.getElementById("input-busca-novo");

  btnBuscarTabelaNovo.addEventListener("click", async (event) => {
    event.preventDefault();
    const busca = inputBuscaNovo.value;
    try {
      const request = await fetch(`../api/apiTabelas.php?busca=${busca}`); // requisiçao
      const respons = await request.json();
      if (respons.length === 0) {
        bootbox.alert({
          message: "<b><p class='p-3'>Nenhum resultado enontrado</p></b>",
        });
        headerNovo.style.display = "none";
      } else {
        criaTabelaNovo(respons); // argumento da resposta
      }
    } catch (error) {
      console.error(error);
    }
  });
  inputBuscaNovo.addEventListener("input", () => {
    if (inputBuscaNovo.value.length >= 5) {
      btnBuscarTabelaNovo.removeAttribute("disabled");
    } else {
      btnBuscarTabelaNovo.setAttribute("disabled", true);
    }
  });
}
//botao novo
function criaTabelaNovo(data) {
  // Criando a função `criaTabela`, espera receber um argumento para o parâmetro `data`.
  const tabelaNovo = document.querySelector("#tabela-novo-local tbody");
  // console.log(tabelaNovo);
  tabelaNovo.innerHTML = ""; // Limpa o conteúdo da tabela
  data.forEach((item) => {
    const linha = `
      <tr class="tr-pointer">
        <td>
          <input type="radio" name="option">
        </td>
        <td>${item.SBNH_CODIGO}</td>
        <td style="width: 900px;">${item.SBNH_FANTASIA || "-"}</td>
        <td style="width: 190px;">${item.SBNH_CNPJ || "-"}</td>
        <td>${item.SBNH_CNES || "-"}</td>
      </tr>`;
    tabelaNovo.insertAdjacentHTML("beforeend", linha);
  });

  const headerNovo = document.querySelector("#tabela-novo-local thead");
  headerNovo.parentElement.style.display = "block";
  inicializarSelecaoLinhaTabelaNovoLocal();
}
function inicializarSelecaoLinhaTabelaNovoLocal() {
  const tabelaNovoLocal = document.getElementById("tabela-novo-local");
  let linhaSelecionada;
  // Adicionar evento de clique em cada linha da tabela
  tabelaNovoLocal.querySelectorAll("tr").forEach((tr) => {
    tr.addEventListener("click", () => {
      // tr.style.cursor = "pointer";
      // Encontrar o input radio correspondente e definir o atributo checked como true
      const inputRadio = tr.querySelector('input[type="radio"]');
      if (inputRadio) {
        inputRadio.checked = true;
        if (linhaSelecionada) {
          linhaSelecionada.classList.remove("selecionado");
        }
        // Adicionar classe "selecionado" à linha clicada
        tr.classList.add("selecionado");
        // Armazenar referência da linha selecionada atualmente
        linhaSelecionada = tr;
      }
    });
  });
}

function inicializarSelecaoLinhaTabelaEditarLocal() {
  const tabelaNovoLocal = document.getElementById("tabela-local-editar");
  let linhaSelecionada;
  // Adicionar evento de clique em cada linha da tabela
  tabelaNovoLocal.querySelectorAll("tr").forEach((tr) => {
    tr.addEventListener("click", () => {
      // tr.style.cursor = "pointer";
      // Encontrar o input radio correspondente e definir o atributo checked como true
      const inputRadio = tr.querySelector('input[type="radio"]');
      if (inputRadio) {
        inputRadio.checked = true;
        if (linhaSelecionada) {
          linhaSelecionada.classList.remove("selecionado");
        }
        // Adicionar classe "selecionado" à linha clicada
        tr.classList.add("selecionado");
        // Armazenar referência da linha selecionada atualmente
        linhaSelecionada = tr;
      }
    });
  });
}
function inicializarBotaoExcluirTabelaBuscar() {
  var btnExcluir = document.querySelectorAll(".btn-excluir");
  btnExcluir.forEach((item) => {
    item.addEventListener("click", () => {
      const linhaTabela = item.closest(".tr-excluir"); // pega a linha da tabela a ser excluída
      const nomeItem = linhaTabela.children[1].textContent; // seleciona a segunda célula da linha
      // console.log(linhaTabela.children);
      var html = `
    <div id="container-modal" class="container pt-3 pb-1 px-5" >
      <h4 class="mb-3">Você vai excluir o Local:</h4>
      <p><strong>&#10060 ${nomeItem}</strong></p>
      <p>Gostaria de excluir o local selecionado?</p>
    </div>`;
      bootbox.dialog({
        message: html,
        buttons: {
          cancelar: {
            label: "Cancelar",
            className: "btn-grey",
            callback: () => {
              // aqui, a exclusão é cancelada e a linha da tabela não é removida
            },
          },
          excluir: {
            label: "Excluir",
            className: "btn-danger",
            callback: () => {
              // aqui, a exclusão é confirmada e a linha da tabela é removida
              linhaTabela.remove();
            },
          },
        },
      });
    });
  });
}
function validacoes() {
  // $(".tel").inputmask("(99) 99999-9999");

  // VALIDAÇÕES

  // INPUT NOME DO LOCAL
  const inputsNovo = document.querySelectorAll(".input-novo");

  function setValid(element) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
  }

  function setInvalid(element) {
    element.classList.add("is-invalid");
  }

  inputsNovo.forEach((input) => {
    input.addEventListener("blur", () => {
      if (input.value.trim().length < 2) {
        setInvalid(input);
      } else {
        setValid(input);
      }
    });
  });

  // INPUT TELEFONE
  const tel = document.querySelector(".tel");
  tel.addEventListener("input", () => {
    // Mascara da input `tel` para digitar apenas 11 digitos
    const maxLength = tel.getAttribute("maxLength");
    const tamanhoInput = tel.value.length;

    if (tamanhoInput > maxLength) {
      // O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é incluído) de um array original
      tel.value = tel.value.slice(0, tel.maxLength);
    }
  });

  //telefone
  tel.addEventListener("blur", () => {
    if (tel.value.trim().length <= 10) {
      setInvalid(tel);
    } else {
      setValid(tel);
    }
  });

  //campo undefined
  const campoTabela = document.querySelectorAll(".campoTd");
  campoTabela.forEach((campo) => {
    //campo  Ã© cada item do meu campo tabela
    if (campo.innerHTML == "undefined") {
      campo.innerHTML = "-";
    }
  });

  //botao tabela
}
