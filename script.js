const display=(num)=>{
    result.value+=num
  }
  const clearAll=()=>{
    result.value=""
  }
  const evaluate12=()=>{
    exp=result.value
    result.value=eval(exp)
  }
  const back=()=>{
    cur=result.value.slice(0,-1)
    result.value=cur
  }