let login_Users = [
    {
    username: "user1", pass: "pass123", age: 25, gender: "male", phone: "123-456-7890"
    },
    {
    username: "user2", pass: "abc456", age: 30, gender: "female", phone: "987-654-3210"
    }
   ];


   function log_in()
   {
        var namL =document.getElementById("Lname").value;
        var PassL =document.getElementById("LPass").value;

        for(var i=0; i<login_Users.length;i++)
        {
            if(namL==""||PassL=="")
            {
                alert("Error");
                return false;
            }
            else if(login_Users[i].username==namL&&login_Users[i].pass==PassL)
            {
                alert("Sucsed");
                window.location='Reviewpage.html';
                
            }
        }
   }

   function sign_up()
   {
        var Upname =document.getElementById("upname").value;
        var upass  =document.getElementById("Upass").value;
        var age = document.getElementById("Age").value;
        var Gender = document.getElementById("G1").value;
        var phone_num =document.getElementById("Phone").value;
        var regex = /^(?=.*[-\#\$\.\%\&\@\!\+\=\\*])(?=.*[a-zA-Z])(?=.*\d).{5,12}$/;
        
        

        if(Upname ==""||upass=="")
        {
            alert("error name");
            return false;
        }
        else if(Upname.length<5||Upname.length>15)
        {
            alert("error name length");
            return false;
        }else if(!upass.match(regex))
        {
            alert("error password");
            return false;
        }
        
         else if(phone_num.length!=11)
        {
            alert("plz enter number phone true");
        }
        // else if(!age>=18||age<60)
        // {
        //     alert("error plz enter true age");
        //     return false;
        // }
        else{
            for(var x =0;login_Users[i].length;i++)
            {
                if(login_Users[i].username==Upname)
                {
                    alert("Plz chek the user name");
                }
            }
            return false;
        }
        login_Users.push(
            {
                username: Upname, pass: upass, age: age, gender: Gender , phone:phone_num
            }
        )
        alert("Saved");
   }


   function forget()
{
    var theUserName=document.getElementById("fname").value;
    var theNewPass=document.getElementById("fpass").value;

    for(var i=0;i<login_Users.length;i++)
    {
        if(login_Users[i].username==theUserName)
        {
             login_Users[i].Pass=theNewPass;
             alert("changed")
        }
    }
}









var q=["Q1.are you satisfied with our service?","Q2.Do you find our website user-frendly?","q3.would you recommend us to others?"];
var at=["yes","yes","yes"];
var af=["no","no","no"];

var q1 = document.getElementById("Q1").innerHTML = (q[0]);
var q2 = document.getElementById("Q2").innerHTML = (q[1]);
var q3 = document.getElementById("Q3").innerHTML = (q[2]);



var at1 = document.getElementById("Aq11").innerHTML = (at[0]);
var at2 = document.getElementById("Aq21").innerHTML = (at[1]);
var at3 = document.getElementById("Aq31").innerHTML = (at[2]);


var af1 = document.getElementById("Aq12").innerHTML = (af[0]);
var af2 = document.getElementById("Aq22").innerHTML = (af[1]);
var af3 = document.getElementById("Aq32").innerHTML = (af[2]);


function Send()
{
    var at11 = document.getElementById("Aqi11").checked;
    var at21 = document.getElementById("Aqi21").checked;
    var at31 = document.getElementById("Aqi31").checked; 

    var af12 = document.getElementById("Aqi12").checked;
    var af22 = document.getElementById("Aqi22").checked;
    var af32 = document.getElementById("Aqi32").checked;

    
    t=0;
    f=0;
    if(at11 )
    {
        t+=1;
    }else if(af12)
    {
        f+=1;
    }

    if(at21 )
    {
        t+=1;
    }else if(af22)
    {
        f +=1;
    }

    if(at31)
    {
        t+=1;
    }
    else if(af32)
    {
        f+=1;
    }
    alert("yes="+t+" "+"no="+f);
}