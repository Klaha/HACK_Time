var i = 0;

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