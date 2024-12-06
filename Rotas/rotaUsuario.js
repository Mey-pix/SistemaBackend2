//Associar os métodos da camada de controle de produto 
//à requisições GET, POST, PUT, PATCH e DELETE HTTP

import { Router } from "express"; //micro-aplicação HTTP
import UsuarioCtrl from "../Controle/usuarioCtrl.js";
import ProdutoCtrl from "../Controle/produtoCtrl.js";

const usuaCtrl = new ProdutoCtrl();
const rotaUsuario = Router();

rotaUsuario.post("/", usuaCtrl.gravar);
rotaUsuario.put("/:codigo", usuaCtrl.editar);
rotaUsuario.patch("/:codigo", usuaCtrl.editar);
rotaUsuario.delete("/:codigo", usuaCtrl.excluir);
rotaUsuario.get("/:codigo", usuaCtrl.consultar);
rotaUsuario.get("/",usuaCtrl.consultar);

export default rotaUsuario;


