import { Cliente } from "./cliente.js";
import { mostraNomeSaldo } from "./controller.js";

const cliente1 = new Cliente("Gabriel", "gabriel@gmail.com", "333333333");
cliente1.setSaldo(33);

mostraNomeSaldo(cliente1);
