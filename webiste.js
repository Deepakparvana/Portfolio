function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hambur-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function sendMail(){
    var params={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };


  const serviceID= "service_sv8utqi";
  const templateID= "template_jyv1h3a";

  emailjs.send(serviceID,templateID,params).then((res) =>{
        document.getElementById("name").value=""; 
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("your message send successfully")
    })  
    .catch(err=>console.log(err));
}

function sendMail(){
    var params = {
        from_name : document.getElementById("fullname").value ,
        email_id : document.getElementById("email_id"). value ,
        message : document.getElementById("message").value
    }
    emailjs.send("service_wtjvwcm", "template_gx2iy97", params)
    .then(
        message => {
          if(message != "OK"){
              swal("Successful", "You clicked the button!", "success");
          }
          else{
              swal("Error", "You clicked the button!", "Error");
          }
        }
      );//.then(function(res){
        //alert("Success! " + res.status);
    //})
}