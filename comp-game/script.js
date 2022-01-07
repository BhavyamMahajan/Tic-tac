// load names from session storage
var p1,fst;
var p_name = document.getElementById('p-name');
window.addEventListener("load", function(){
    p1 = sessionStorage.getItem('player_1');
    fst = sessionStorage.getItem('result');

    p_name.innerText=p1+`'s turn`;

    if(fst == 1)
    p_name.style.display="block";
    else
   { bot_name.style.display="block"
    comp_turn();}
})

//------------------------------//

var pyro=document.getElementById("eff");
var cup = document.getElementById('winner-name');
var won = document.getElementById('won');
var bot_name = document.getElementById('p2-name');
bot_name.innerText=`Robot's turn`;
var arr=[];
var pos=[];  // using this array to avoid click on box with some existing value 
var count=0;


function play_game(id){
    id=Number(id);
    let box = document.getElementById(id);
    
    if(pos.includes(id))
    return false;
     
    if(fst==1)
    {
        box.innerText = 'X';
        box.style.color="firebrick";
        arr[id]=1;
        pos.push(id);
        count++;

        if(count>3)
       { var res = result();
         showWin_name(res);
        }
        fst=0;
    }

    if(count<9 && fst==0)
        comp_turn();
}

// computer's turn
function comp_turn(){
    p_name.style.display="none";
    bot_name.style.display="block";
    setTimeout(function(){
        var flag=1;
        var id_O;
        while(flag)
        {
            id_O = parseInt(Math.floor(Math.random()*8));   
            if(pos.includes(id_O))
            flag=1;
            else
            break;
        }

        let boxO = document.getElementById(id_O);
    
        boxO.innerText = 'O';
        arr[id_O]=0;
        pos.push(id_O);
            count++;
            bot_name.style.display="none";
            p_name.style.display="block";

            //  to check if robot wins
            if(count>3)
               {  var res2 = result();
                 showWin_name(res2);
                }
    },600)
    fst=1;
}

// display winner's name
function showWin_name(res){
    if(res){
        p_name.style.display="none";
         bot_name.style.display="none";
         check=1;
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
            },200)
        }
        if(res==p1)
        sessionStorage.setItem("result",1);
        else
        sessionStorage.setItem("result",0);

        document.body.addEventListener("click",function(){ window.location.reload();},true);
    } 
}


// to check win
function result(){
    if(arr[0] == 1 && arr[1] == 1 && arr[2] == 1 || arr[0] == 0 && arr[1] == 0 && arr[2] == 0)
    {
        if(arr[0]==1)
        return p1;
        else
        return 'Robot';
    }
    else if(arr[3] == 1 && arr[4] == 1 && arr[5] == 1 || arr[3] == 0 && arr[4] == 0 && arr[5] == 0)
    {
        if(arr[3]==1)
        return p1;
        else
        return 'Robot';
    }
    else if(arr[6] == 1 && arr[7] == 1 && arr[8] == 1 || arr[6] == 0 && arr[7] == 0 && arr[8] == 0)
    {
        if(arr[6]==1)
        return p1;
        else
        return 'Robot';
    }
    else if(arr[0] == 1 && arr[3] == 1 && arr[6] == 1 || arr[0] == 0 && arr[3] == 0 && arr[6] == 0)
    {
        if(arr[0]==1)
        return p1;
        else
        return 'Robot';
    }
    else if(arr[1] == 1 && arr[4] == 1 && arr[7] == 1 || arr[1] == 0 && arr[4] == 0 && arr[7] == 0)
    {
        if(arr[1]==1)
        return p1;
        else
        return 'Robot';
    }
    else if(arr[2] == 1 && arr[5] == 1 && arr[8] == 1 || arr[2] == 0 && arr[5] == 0 && arr[8] == 0)
    {
        if(arr[2]==1)
        return p1;
        else
        return 'Robot';
    }
    else if(arr[0] == 1 && arr[4] == 1 && arr[8] == 1 || arr[0] == 0 && arr[4] == 0 && arr[8] == 0)
    {
        if(arr[0]==1)
        return p1;
        else
        return 'Robot';
    }
    else if(arr[2] == 1 && arr[4] == 1 && arr[6] == 1 || arr[2] == 0 && arr[4] == 0 && arr[6] == 0)
    {
        if(arr[2]==1)
        return p1;
        else
        return 'Robot';
    }
    else if(count == 9)
    return 1;
}