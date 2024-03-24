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

type Note = {
    id?: Key | null | undefined;
    title: string;
    description: string;
    category: string;
    createdAt?: string;
}

export default Note;