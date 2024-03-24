/**
    * @description      : 
    * @author           : mario
    * @group            : 
    * @created          : 23/03/2024 - 21:32:54
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 23/03/2024
    * - Author          : mario
    * - Modification    : 
**/
const getDiaDaSemana = (data: Date): string => {
    const diasDaSemana = [
        'Domingo',
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sábado'
    ];

    return diasDaSemana[data.getDay()];
}

export default getDiaDaSemana;