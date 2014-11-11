var i = 0;
var regular = '05:15 pm';
var regular2 = '06:10 am';
var regular3 = '12:01 am';
var regular4 = '01:10 am';
var regular5 = '12:15 pm';

var militar = '02:00';
var militar2 = '11:00';
var militar3 = '12:00';
var militar4 = '13:00';
var militar5 = '14:00';
var militar6 = '20:00';
var militar7 = '23:00';

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

  if (hora[hora.length-2] == 'p' && hora[0] == 1 && hora[1] == 2)
  {
    a[0] == 1;
    a[1] == 2;
  } 
  else if (hora[hora.length-2] == 'p')
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

function hack24ToAmPm(hora)
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

  if (a[0] == 1 && a[1] == 2)
  {
    a.push(" pm");
  }
  else if (a[0] == 1 && a[1] > 2) 
  {
    a[0] = a[0] - 1;
    a[1] = a[1] - 2;
    a.push(" pm");
  }
  else if (a[0] >= 2 && a[1] >= 0 && a[1] < 2)
  {
    a[0] = a[0] - 2;
    a[1] = a[1] + 8 ;
    a.push(" pm");
  }
  else if (a[0] >= 2 && a[1] >= 2)
  {
    a[0] = a[0] - 1;
    a[1] = a[1] - 2 ;
    a.push(" pm");
  }   
  else
  {
    a.push(" am")
  }

  for (i=0; i < a.length; i++)
  {
    fin = fin + a[i].toString();
  }

  return fin;
}
console.log(hackAmPmTo24(regular));
console.log(hackAmPmTo24(regular2));
console.log(hackAmPmTo24(regular3));
console.log(hackAmPmTo24(regular4));
console.log(hackAmPmTo24(regular5));
console.log('---');
console.log(hack24ToAmPm(militar));
console.log(hack24ToAmPm(militar2));
console.log(hack24ToAmPm(militar3));
console.log(hack24ToAmPm(militar4));
console.log(hack24ToAmPm(militar5));
console.log(hack24ToAmPm(militar6));
console.log(hack24ToAmPm(militar7));
