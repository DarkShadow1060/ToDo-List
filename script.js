
// NOTE : Currently Not storing in Array ,I Will Implement it 

var identity="task_id",count=1;
    var div_in_blk1= document.getElementById("in_blk1");
    var div_in_blk2=document.getElementById("in_blk2");
    var btn_element=document.getElementById("submitbtn");
    var inpt=document.getElementById("list_input");
    var array=[];
    var count=1;

    inpt.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
          event.preventDefault();
          document.getElementById("submitbtn").click();
        }
      });

    btn_element.addEventListener("click",addtask);//func

   //------------------------------------------------------------------//
    function addtask(){
        if(inpt.value){    // if input is not empty only then 
            var object = new Object();
            var Div=document.createElement('div');
            Div.id=count.toString();
            div_in_blk1.appendChild(Div);
            object.id=Div.id;
            object.para=inpt.value;
            object.status="Not Completed"
            inpt.value="";
            array.push(object);
            //in Dom//
            var Para=document.createElement('p');
            Para.innerText=object.para;
            Para.className="task"+count.toString();
            Div.appendChild(Para);
            Para.setAttribute.display='inline-block';
            var check=document.createElement('button');
            check.setAttribute.type="button";
            check.className="btn btn-success fas fa-check-circle side1";
            //check.innerText="✅";
            check.setAttribute.display='inline-block';
            var uncheck=document.createElement('button');
            uncheck.setAttribute.type="button";
            uncheck.className="btn btn-danger fas fa-times-circle side2";
            //<i class="fas fa-check"></i>
            //uncheck.innerText="❌";
            uncheck.setAttribute.display='inline-block';
            Div.appendChild(check),Div.appendChild(uncheck);
            console.log(array);
            //--------------------------------------------------------------------//
            check.addEventListener('click',(event)=>{
                div_in_blk1.removeChild(Div);
                div_in_blk2.appendChild(Div);
                object.status="Completed";
                check.remove();
            });
            //--------------------------------------------------------------------// 
            uncheck.addEventListener('click',(event)=>{
                for(var i=0;i<array.length;i++){
                    if(array[i].id==Div.id){
                        array.splice(i, 1);                    }
                }
                Div.remove();
            }) 
            count++;
        }
    //--------------------------------------------------------------------//
    
    }
