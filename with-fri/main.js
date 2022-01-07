// load names from session storage
var p1,p2,fst;
var p_name = document.getElementById('p-name');
var p2_name = document.getElementById('p2-name');

window.addEventListener("load", function(){
    p1 = sessionStorage.getItem('player_1');
    p2 = sessionStorage.getItem('player_2');
    fst = sessionStorage.getItem('result');

    p_name.innerText=p1+`'s turn`;
    p2_name.innerText=p2+`'s turn`;
    
    if(fst == 1)
    p_name.style.display="block";
    else if(fst==0)
    p2_name.style.display="block"
})

//------------------------------//




var pyro=document.getElementById("eff");
var cup = document.getElementById('winner-name');
var won = document.getElementById('won');
var arr=[];
var pos=[];  // using this array to avoid click on box with some existing value 
var count=0;




function play_game(id){
    id = Number(id);
    let box = document.getElementById(id);
    
    if(pos.includes(id))
    return false;
    
    if(fst!=0)
    {
        box.style.color="firebrick";
        box.innerText='X';
        arr[id]=1;
        fst=0;
        p_name.style.display="none";
        p2_name.style.display="block";
    }
    else
    {
        box.innerText='O';
        arr[id]=0;
        fst=1;
        p2_name.style.display="none";
        p_name.style.display="block";
    }
    pos.push(id);
    count++;
    var res = result();
    if(res){
        if(count>3)
        {   var res = result();
            if(res){
                p2_name.style.display="none";
                p_name.style.display="none";

                if(res == 1)
                {
                    var pic = document.getElementById('pic');
                    pic.style.display="none";

                    cup.style.display="block";

                    cup.style.animation="zoom-in 3s 3 ease-in-out";
                    won.innerText="Match Draw";
                }
                else
                { won.innerText=res;
                
                  setTimeout(function(){
                    cup.style.display="block";
                    cup.style.animation="zoom-in 3s 3 ease-in-out";
                    pyro.style.display="block";
                    },400)

                 if(res==p1)
                     sessionStorage.setItem("result",1);
                     else
                     sessionStorage.setItem("result",0);
                }

                document.body.addEventListener("click",function(){ window.location.reload();},true);
            } 
        }
    }
}


function result(){
    if(arr[0] == 1 && arr[1] == 1 && arr[2] == 1 || arr[0] == 0 && arr[1] == 0 && arr[2] == 0)
    {
        if(arr[0]==1)
        return p1;
        else
        return p2;
    }
    else if(arr[3] == 1 && arr[4] == 1 && arr[5] == 1 || arr[3] == 0 && arr[4] == 0 && arr[5] == 0)
    {
        if(arr[3]==1)
        return p1;
        else
        return p2;
    }
    else if(arr[6] == 1 && arr[7] == 1 && arr[8] == 1 || arr[6] == 0 && arr[7] == 0 && arr[8] == 0)
    {
        if(arr[6]==1)
        return p1;
        else
        return p2;
    }
    else if(arr[0] == 1 && arr[3] == 1 && arr[6] == 1 || arr[0] == 0 && arr[3] == 0 && arr[6] == 0)
    {
        if(arr[0]==1)
        return p1;
        else
        return p2;
    }
    else if(arr[1] == 1 && arr[4] == 1 && arr[7] == 1 || arr[1] == 0 && arr[4] == 0 && arr[7] == 0)
    {
        if(arr[1]==1)
        return p1;
        else
        return p2;
    }
    else if(arr[2] == 1 && arr[5] == 1 && arr[8] == 1 || arr[2] == 0 && arr[5] == 0 && arr[8] == 0)
    {
        if(arr[2]==1)
        return p1;
        else
        return p2;
    }
    else if(arr[0] == 1 && arr[4] == 1 && arr[8] == 1 || arr[0] == 0 && arr[4] == 0 && arr[8] == 0)
    {
        if(arr[0]==1)
        return p1;
        else
        return p2;
    }
    else if(arr[2] == 1 && arr[4] == 1 && arr[6] == 1 || arr[2] == 0 && arr[4] == 0 && arr[6] == 0)
    {
        if(arr[2]==1)
        return p1;
        else
        return p2;
    }
    else if(count == 9)
    return 1;
}