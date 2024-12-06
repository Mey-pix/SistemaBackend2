//Associar os métodos da camada de controle de produto 
//à requisições GET, POST, PUT, PATCH e DELETE HTTP

import { Router } from "express"; //micro-aplicação HTTP
import PrivilegioCtrl from "../Controle/privilegioCtrl.js";

const priCtrl = new PrivilegioCtrl();
const rotaPrivilegio = Router();

rotaPrivilegio.post("/", priCtrl.gravar);
rotaPrivilegio.put("/:codigo", priCtrl.editar);
rotaPrivilegio.patch("/:codigo", priCtrl.editar);
rotaPrivilegio.delete("/:codigo", priCtrl.excluir);
rotaPrivilegio.get("/:codigo", priCtrl.consultar);
rotaPrivilegio.get("/",priCtrl.consultar);

export default rotaPrivilegio;

