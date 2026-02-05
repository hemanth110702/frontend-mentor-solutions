let open =-1;

function display(num){
  document.querySelectorAll('p').forEach((val,ind)=>{
    if(num==ind){
      if(open==num){
        open=-1;
        boldFont(ind,0);
        val.classList.add('none');
      }else{
        boldFont(ind,1);
        val.classList.remove('none');
        open=num;
      }
    }
    else {
      val.classList.add('none');
    }
  });
}

function boldFont(i,yn){
  const active = document.querySelector('.box');
  if(yn){
    active.classList.add('active');
  }
  else {
    active.classList.remove('active');
  }
  document.querySelectorAll('.que').forEach((v,ind)=>{
    if(ind === i && yn ){
      v.classList.add('b');
      v.querySelector('img').classList.add('invert');
    } else {
      v.classList.remove('b');
      v.querySelector('img').classList.remove('invert');
    }

  });
}