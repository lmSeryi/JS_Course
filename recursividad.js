function divisionEntera(dividendo, divisor){
    if(dividendo < divisor)
        return 0
    else
        return 1 + divisionEntera(dividendo-divisor, divisor) 
}