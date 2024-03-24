/**
	* @description      : 
	* @author           : mario
	* @group            : 
	* @created          : 07/03/2024 - 12:57:45
	* 
	* MODIFICATION LOG
	* - Version         : 1.0.0
	* - Date            : 07/03/2024
	* - Author          : mario
	* - Modification    : 
**/
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

interface IFormatDateProps {
	dateParam: Date;
	formatParam: string;
}

function useFormatDate({ dateParam, formatParam }: IFormatDateProps) {
	const [dataFormatada, setDataFormatada] = useState('');

	useEffect(() => {
		setDataFormatada(format(dateParam, formatParam));
	}, [dateParam, formatParam]);

	return [dataFormatada, setDataFormatada];
}

export default useFormatDate;