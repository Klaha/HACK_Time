var i = 0;
var regular = '05:15 pm';
var regular2 = '06:10 am';
var regular3 = '12:01 am';
var regular4 = '01:10 am';

var militar = '17:15';
var militar2 = '00:10';
var militar3 = '09:20';
var militar4 = '22:10';

function hackAmPmTo24(hora)
{

  var a = [];
  var fin = "";

  for(i = 0; i <= 4; i++)
  {
    if (hora[i] != ':')
    {
      a.push(parseInt(hora[i], 10));
    }
    else
    {
      a.push(':');
    }
  }

  if (hora[hora.length-2] == 'p')
  {
    a[0] = a[0] + 1;
    a[1] = a[1] + 2;
  }

  if (hora[hora.length-2] == 'a' && hora[1] == 2)
  {
    a[0] = 0;
    a[1] = 0;
  }

  for (i=0; i < a.length; i++)
  {
    fin = fin + a[i].toString();
  }

  return fin;
}

// console.log(hackAmPmTo24(regular));
// console.log(hackAmPmTo24(regular2));
// console.log(hackAmPmTo24(regular3));
// console.log(hackAmPmTo24(regular4));

function hack24ToAmPm(hora)
{

}

