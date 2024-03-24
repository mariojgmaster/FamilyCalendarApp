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
type TextTruncateProps = {
    numberOfLinesTitle: number;
    numberOfLinesText: number;
    ellipsizeMode: "tail" | "head" | "middle" | "clip" | undefined
}

export default TextTruncateProps;