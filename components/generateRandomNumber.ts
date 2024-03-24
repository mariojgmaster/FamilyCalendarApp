/**
    * @description      : 
    * @author           : mario
    * @group            : 
    * @created          : 22/03/2024 - 21:28:09
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 22/03/2024
    * - Author          : mario
    * - Modification    : 
**/
const generateRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

export default generateRandomNumber;
