/* 
//   anterior;
//   const btnExcluir = document.querySelectorAll(".btn-excluir");

//   btnExcluir.forEach((item) => {
//     item.addEventListener("click", () => {
//       // const linha = item.closest(".tr-excluir");
//       // linha.remove();
//       const linhaTabela = document.querySelector(".tr-excluir");
//       linhaTabela.remove();

//       var html = `
//       <div id="container-modal" class="container pt-3 pb-1 px-5" >
//         <h3 class="mb-3">Você está prestes a excluir um Local</h3>
//         <p>Gostaria de excluir o local selecionado?</p>
//       </div>`;

//       bootbox.dialog({
//         message: html,
//         buttons: {
//           cancelar: {
//             label: "Cancelar",
//             className: "btn-grey",
//             callback: () => {},
//           },
//           excluir: {
//             label: "Excluir",
//             className: "btn-danger",
//             callback: () => {},
//           },
//         },
//       });
//     });
//   });

//   document.getElementById("btn-novo-local").addEventListener("click", () => {
//     document.getElementById("novo-local").style.display = "block";
//     document.getElementById("busca-local").style.display = "none";
//   });

//   fetch("../api/apiTabelaNovo.php")
//   .then((r) => r.json())
//   .then((r) => {
//     const tabelaLocal = document.getElementById("tabela-novo-local"); // Vai buscar a tabela lá no loca.php pelo id

//     // le tabeltaHTML vai guardar o código HTML em sí
//     let tabelaHTML = `
// <table>
//   <thead class="text-dark-m3 bgc-primary">
//     <tr class="text-white">
//     <th></th>
//     <th class="align-middle">Código</th>
//     <th class="align-middle">Nome Fantasia</th>
//     <th class="align-middle">CNPJ</th>
//     <th class="align-middle">CNES</th>
//     </tr>
//   </thead>`;
//     tabelaHTML += `<tbody>`;
//     r.forEach((item) => {
//       tabelaNovo
//         .api()
//         .row.add([
//           " <td><input type='radio' name='linha'></td>",
//           "<td class='campoTd'> " + item.SBNH_CODIGO + "</td>",
//           " <td class='campoTd'>" + item.SBNH_FANTASIA + "</td>",
//           "  <td class='campoTd'>" + item.SBNH_CNPJ + "</td>",
//           " <td class='campoTd'>" + item.SBNH_CNES + "</td>",
//         ])
//         .draw();
//     });
//     tabelaHTML += `
//   </tbody>
// </table>`;
//     tabelaLocal.innerHTML = tabelaHTML;
//   });
// var tabelaNovo = $("#tabela-novo-local").DataTable();

//perfume
// SELECIONA A LINHA O INPUT RADIO  E COLOCA A COR
// Seleciona todas as linhas da tabela que possuem a classe 'tabela-selecionavel'
// const linhasTabela = document.querySelectorAll(".tabela-selecionada tr");
// // Itera por cada linha da tabela
// linhasTabela.forEach((linha) => {
//   // Seleciona o input do tipo radio dentro da linha
//   const inputRadio = linha.querySelector('input[type="radio"]');
//   // Adiciona o cursor pointer à linha
//   linha.style.cursor = "pointer";

//   // Adiciona um ouvinte de evento de clique à linha
//   linha.addEventListener("click", () => {
//     // Quando a linha é clicada, marca o input do tipo radio correspondente como selecionado
//     inputRadio.checked = true;

//     // Remove a classe 'selected' de todas as linhas da tabela
//     linhasTabela.forEach((linha) => {
//       linha.classList.remove("selecionada");
//     });

//     // Adiciona a classe 'selected' à linha clicada
//     linha.classList.add("selecionada");
//   });
// });
*/

/* Função `loading` do tabela */
function exibirLoading() {
  document.querySelector("#carregando").style.display = "block";
  document.querySelector(".carregando-titulo").style.display = "block";
}

function ocultarLoading() {
  document.querySelector("#carregando").style.display = "none";
  document.querySelector(".carregando-titulo").style.display = "none";
}

/*
    #####################################################################################
    #                                                                                   #
    #                           API PAGINA BUSCAR                                       #
    #                                                                                   #
    ##################################################################################### 
    */
fetch("../api/apiLocalBuscar.php")
  .then((r) => r.json())
  .then((r) => {
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
      exibirLoading();
      tabelaHTML += `
              <tr class="tr-excluir">
                <td class="campoTd">${item.SAHQ_CODIGO}</td>
                <td class="campoTd">${item.SAHQ_HOSPITAL}</td>
                <td class="campoTd">${item.SAHQ_END}</td>
                <td class="campoTd">${item.SAHQ_TELEFONE}</td>
                <td class="campoTd">${item.SAHQ_PTENCONTRO}</td>
                <td class="campoTd">${item.SAHQ_INFO}</td>
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
    ocultarLoading();
    /*
    #####################################################################################
    #                                                                                   #
    #                           API PAGINA NOVO LOCAL                                   #
    #                                                                                   #
    ##################################################################################### 
    */

    // const btnBuscar = document.getElementById("btn-buscar-tabela");

    // btnBuscar.addEventListener("click", () => {
    //   const busca = document.getElementById("input-busca").value;

    //   fetch(`../api/apiTabelas.php?busca=${busca}`)
    //     .then((r) => r.json())
    //     .then((r) => {
    //       const tabelaLocal = document.getElementById("tabela-novo-local");
    //       let tabelaHTML = `
    //         <table>
    //           <thead class="text-dark-m3 bgc-primary">
    //             <tr class="text-white">
    //               <th></th>
    //               <th class="align-middle">Código</th>
    //               <th class="align-middle">Nome Fantasia</th>
    //               <th class="align-middle">CNPJ</th>
    //               <th class="align-middle">CNES</th>
    //             </tr>
    //           </thead>`;
    //       tabelaHTML += `<tbody>`;
    //       r.forEach((item) => {
    //         tabelaHTML += `
    //           <tr>
    //             <td>
    //               <input type="radio" name="option">
    //             </td>
    //             <td class="campoTd">${item.SBNH_CODIGO}</td>
    //             <td class="campoTd">${item.SBNH_FANTASIA}</td>
    //             <td class="campoTd">${item.SBNH_CNPJ}</td>
    //             <td class="campoTd">${item.SBNH_CNES}</td>
    //           </tr>`;
    //       });
    //       tabelaHTML += `
    //         </tbody>
    //       </table>`;
    //       tabelaLocal.innerHTML = tabelaHTML;

    // });
    // });

    /*
    #####################################################################################
    #                                                                                   #
    #                           API PAGINA EDITAR                                       #
    #                                                                                   #
    ##################################################################################### 
    */

    fetch("../api/apiTabelas.php")
      .then((r) => r.json())
      .then((r) => {
        const tabelaLocal = document.getElementById("tabela-novo-local-editar"); // Vai buscar a tabela lá no loca.php pelo id

        // le tabeltaHTML vai guardar o código HTML em sí
        let tabelaHTML = `
        <table>
          <thead class="text-dark-m3 bgc-primary">
            <tr class="text-white">
            <th></th>
            <th class="align-middle">Código</th>
            <th class="align-middle">Nome Fantasia</th>
            <th class="align-middle">CNPJ</th>
            <th class="align-middle">CNES</th>
            </tr>
          </thead>`;
        tabelaHTML += `<tbody>`;
        r.forEach((item) => {
          tabelaHTML += `
            <tr>
            <td>
              <input type="radio" name="option">
            </td>
            <td class="campoTd">${item.SBNH_CODIGO}</td>
            <td class="campoTd">${item.SBNH_FANTASIA}</td>
            <td class="campoTd">${item.SBNH_CNPJ}</td>
            <td class="campoTd">${item.SBNH_CNES}</td>
            </tr>`;
        });
        tabelaHTML += `
          </tbody>
        </table>`;
        tabelaLocal.innerHTML = tabelaHTML;

        let linhaSelecionada;
        // Adicionar evento de clique em cada linha da tabela
        tabelaLocal.querySelectorAll("tr").forEach((tr) => {
          tr.addEventListener("click", () => {
            tr.style.cursor = "pointer";
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
      });
    /*
    #####################################################################################
    #                                                                                   #
    #                              CHAMANDO TABELA DO EDITAR LOCAL                      #
    #                                                                                   #
    ##################################################################################### 
    */

    const btnBuscarTabelaNovo = document.getElementById("btn-buscar-tabela");
    const inputBuscaNovo = document.getElementById("input-busca-novo");
    const headerNovo = document.querySelector("#tabela-novo-local thead");

    btnBuscarTabelaNovo.addEventListener("click", async (event) => {
      event.preventDefault();
      const busca = inputBuscaNovo.value;
      try {
        const request = await fetch(`../api/apiTabelas.php?busca=${busca}`); // requisiçao
        const respons = await request.json();
        atualizarTabela(respons);
      } catch (error) {
        console.error(error);
      }
    });

    function atualizarTabela(data) {
      headerNovo.nextSibling.remove();

      let linhas = " <tbody>";
      data.forEach((item) => {
        linhas += `<tr>
      <td>
      <input type="radio" name="option">
      </td>
      <td>${item.SBNH_CODIGO}
      </td><td>${item.SBNH_FANTASIA}
      </td><td>${item.SBNH_CNPJ || "-"}
      </td><td>${item.SBNH_CNES}
      </td>
      </tr>`;
      });
      linhas += `
      </tbody>`;

      headerNovo.insertAdjacentHTML("afterend", linhas);
      headerNovo.parentElement.style.display = "block";
      // alert(JSON.stringify(tabelaNovoLocal.innerHTML));

      //perfume
      const tabelaNovoLocal = document.getElementById("tabela-novo-local");
      let linhaSelecionada;
      // Adicionar evento de clique em cada linha da tabela
      tabelaNovoLocal.querySelectorAll("tr").forEach((tr) => {
        tr.addEventListener("click", () => {
          tr.style.cursor = "pointer";
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

    // const tabelaEditarLocal = document.getElementById(
    //   "tabela-novo-local-editar"
    // );
    // const btnBuscarTabelaEditar = document.getElementById(
    //   "btn-buscar-tabela-editar"
    // );
    // btnBuscarTabelaEditar.addEventListener("click", () => {
    //   tabelaEditarLocal.style.display = "block"; // e da um block nela ou seja aparece a tabela
    // });

    /*
    #####################################################################################
    #                                                                                   #
    #                           FUNÇAO TIRA OS undefined DOS CAMPOS                     #
    #                                                                                   #
    ##################################################################################### 
    */
    const campoTabela = document.querySelectorAll(".campoTd");
    campoTabela.forEach((campo) => {
      //campo  é cada item do meu campo tabela
      if (campo.innerHTML == "undefined") {
        campo.innerHTML = "-";
      }
    });

    // ESSE TA OK
    // const campoTabela = document.querySelectorAll(".tr-excluir td");
    // console.log(campoTabela);
    // //campo  é cada item do meu campo tabela
    // campoTabela.forEach((campo) => {
    //   if (campo.innerHTML == "undefined") {
    //     campo.innerHTML = "-";
    //   }
    // });

    //dataTables
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

    /*
    #####################################################################################
    #                                                                                   #
    #                              FUNÇAO PAGINA BUSCA E NOVO TELAS                     #
    #                              DISPLAY BLOCK E NONE                                 #
    ##################################################################################### 
    */
    const buscaLocal = document.getElementById("busca-local"); // página busca local
    const novoLocal = document.getElementById("novo-local"); // página para inserir novo local
    const btnNovoLocal = document.getElementById("btn-novo-local"); // botão da página novo local
    btnNovoLocal.addEventListener("click", () => {
      buscaLocal.style.display = "none";
      novoLocal.style.display = "block";
      const url = window.location;
      url.hash = "novo-local";
      history.pushState(null, null, url);

      document.getElementById("nomeLocalNovo").focus();
    });

    /*
    #####################################################################################
    #                                                                                   #
    #                              FUNÇAO EXCLUIR , BOTAO EXCLUIR                       #
    #                                                                                   #
    ##################################################################################### 
    */
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

    /*
    #####################################################################################
    #                                                                                   #
    #                         FUNÇAO  BOTAO ALTERAÇAO                                   #
    #                                                                                   #
    ##################################################################################### 
    */
    var editarLocal = document.getElementById("editar-local"); //id da pagina editar
    var btnEditar = document.querySelectorAll(".btn-editar"); // class do botao editar
    btnEditar.forEach((cadaBotao) => {
      cadaBotao.addEventListener("click", () => {
        buscaLocal.style.display = "none"; // da o none na pagina buscar
        editarLocal.style.display = "block"; // e aparece a de alteraçao
        const url = window.location;
        url.hash = "editar-local"; // coloca editar local no final da URL
        history.pushState(null, null, url);
        document.getElementById("nomeLocalEditar").focus();
      });
    });

    //mascara de telefone
    /*
    #####################################################################################
    #                                                                                   #
    #                              VALIDAÇOES                                           #
    #                                                                                   #
    ##################################################################################### 
    */

    $(".tel").inputmask("(99) 99999-9999");
  });
// fecha

// remover a linha anterior clicada
//valiudaçoes campo
//fazer a mesma logica oara o editar

const btnBuscarTabelaEditar = document.getElementById(idBotao);
const inputBuscaEditar = document.getElementById("input-busca-editar");
const headerEditar = document.querySelector("#tabela-local-editar thead");

btnBuscarTabelaEditar.addEventListener("click", async (event) => {
  event.preventDefault();
  const busca = inputBuscaEditar.value;
  try {
    const request = await fetch(`../api/apiTabelas.php?busca=${busca}`); // requisiçao
    const respons = await request.json();
    atualizarTabela(respons);
  } catch (error) {
    console.error(error);
  }
});

function atualizarTabela(data) {
  headerEditar.nextSibling.remove();

  let linhas = " <tbody>";
  data.forEach((item) => {
    linhas += `<tr>
        <td>
        <input type="radio" name="option">
        </td>
        <td>${item.SBNH_CODIGO}
        </td><td>${item.SBNH_FANTASIA}
        </td><td>${item.SBNH_CNPJ || "-"}
        </td><td>${item.SBNH_CNES}
        </td>
        </tr>`;
  });
  linhas += `
    </tbody>`;

  headerEditar.insertAdjacentHTML("afterend", linhas);
  headerEditar.parentElement.style.display = "block";
  // alert(JSON.stringify(tabelaNovoLocal.innerHTML));

  //perfume
  const tabelaNovoLocal = document.getElementById("tabela-novo-local");
  let linhaSelecionada;
  // Adicionar evento de clique em cada linha da tabela
  tabelaNovoLocal.querySelectorAll("tr").forEach((tr) => {
    tr.addEventListener("click", () => {
      tr.style.cursor = "pointer";
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
