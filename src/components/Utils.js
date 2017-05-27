/* Utils class - having all Util functions needed across app */

const JAN = "JAN";
const FEB = "FEB";
const MAR = "MAR";
const APR = "APR";
const MAY = "MAY";
const JUN = "JUN";
const JUL = "JUL";
const AUG = "AUG";
const SEP = "SEP";
const OCT = "OCT";
const NOV = "NOV";
const DEC = "DEC";

export const returnMonthName = monthValue=>{
		let month = '';
		switch (monthValue){
		  case 0:
		    month = JAN
		    break;
		  case 1:
		    month = FEB
			break;
		  case 2:
		    month = MAR
			break;
		  case 3:
		    month = APR
			break;
		  case 4:
		    month = MAY
			break;
		  case 5:
		    month = JUN
			break;
		  case 6:
		    month = JUL
			break;
		  case 7:
		    month = AUG
			break;
		 case 8:
		    month = SEP
			break;
		 case 9:
		    month = OCT
			break;
		 case 10:
		    month = NOV
			break;
		 case 11:
		    month = DEC
			break;
		 default:
			break;
		}
		return month;
};
