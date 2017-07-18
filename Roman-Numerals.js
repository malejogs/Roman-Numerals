const data={
    1:{
        1:'I',
        5:'V',
    },
    2:{
        1:'X',
        5:'L',
    },
    3:{
        1:'C',
        5:'D',
    },
    4:{
        1:'M'
    }
}

function romanNumerals(number) {
    let res='',cont=0
    const n=number.toString()
    if(n>=4000){return 'Error, Ingrese un numero menor a 3900'}
    for (let i=n.length;i>0;i--){        
        //n=1,2,3
        if(n[cont]<4){
            for(var j=0;j<n[cont];j++){
                res+=data[i][1]
            }            
        }
        //n=4
        else if(n[cont]==4){
            res+=data[i][1]+data[i][5]
            
        }
        //n=5
        else if(n[cont]==5){
            res+=data[i][5]
            
        }
        //n=6,7,8
        else if(n[cont]>5 && n[cont]<9){
            res+=data[i][5]
            for(j=0;j<n[cont]-5;j++){
                res+=data[i][1]
            }            
        }
        //n=9
        else if(n[cont]==9){
            res+=data[i][1]+data[i+1][1]
        }
        cont++
    }
    return res;
}