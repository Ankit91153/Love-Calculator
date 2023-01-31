

    function loveParcentage(){
        var p1=document.getElementById('p1').value;
        var p2=document.getElementById('p2').value;
        if(p1==""){
            alert("Enter first person name");
        }
        else if(p1.length<3){
            alert("Enter first person greter than 3 character");

        }
        else if(!isNaN(p1)){
            alert("Not allowed number in First Name");
        }
        else if(p2==""){
            alert("Enter second person name");
        }
        else if(p2.length<3){
            alert("Enter second person greter than 3 character");

        }
        else if(!isNaN(p2)){
            alert("Not allowed number second Name");
        }
        else{
        var ran=Math.floor(Math.random()*100)+"%";
        document.getElementById('percentage').value=ran;
        }
    }