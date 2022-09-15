let lista =[];

export function hozzaad(a)
{

if (a>=0){
    lista.push(a)
}
else{
    console.log("Hiba")
}

}
export function atlag()
{
    let osszeg =0;
  for (const item of lista) 
  {
    osszeg+= item;
    

  }
  return osszeg/lista.length;

}


