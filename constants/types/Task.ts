/**
    * @description      : 
    * @author           : mario
    * @group            : 
    * @created          : 06/03/2024 - 19:48:23
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 06/03/2024
    * - Author          : mario
    * - Modification    : 
**/
import { Key } from "react";

type Task = {
    id?: Key | null | undefined;
    title: string;
    description: string;
    type: string;
    status: 'A Fazer' | 'Em Andamento' | 'Bloqueada' | 'Revisão' | 'Concluída' | 'Em Espera';
    createdAt?: string;
    weekDay: string;
}

export default Task;