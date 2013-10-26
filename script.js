function SeparateThousand(n) {
	var sRegExp = new RegExp('(-?[0-9]+)([0-9]{3})'),
	sValue=n+'',
	arrNum = [];

	sep=',';
	desep='.';

	// split the decimal, process the integer part
	arrNum = sValue.split(desep);
	sValue = arrNum[0];

	while(sRegExp.test(sValue)) {
		sValue = sValue.replace(sRegExp, '$1'+sep+'$2');
	}

	// put back the decimal
	if (arrNum.length > 1) {
		sValue = sValue + desep + arrNum[1];
	}
	return sValue;
}

function updateOutput() {
//get form
var form = document.getElementById("convert");
//get output
var out = form.elements["result"];
//get the number
var angka = form.elements["value"].value;
//get satuan input
var input = form.elements["from"].value;
//get satuan output
var output = form.elements["to"].value;
//get decimal limit
var declimit = parseInt(form.elements["decimals"].value);

//Set angka di belakang koma berdasar pilihan
switch(declimit)
	{
	case 0: out.value = (angka*input/output).toFixed(0);
	break;
	case 2: out.value = (angka*input/output).toFixed(2);
	break;
	case 4: out.value = (angka*input/output).toFixed(4);
	break;
	default: out.value = angka*input/output;
	break;
	}

if (document.getElementById('separator').checked) {
	out.value = SeparateThousand(out.value);
	}
	else {
	out.value = out.value;
	}
}
