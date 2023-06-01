
const submitButton = document.querySelector('.button');// creating a variable for button to add a listener
submitButton.onclick =(e)=>{
  e.preventDefault();
const fname = document.getElementById('fname').value;
 const sname = document.getElementById('sname').value;
const lname = document.getElementById('lname').value;
const email = document.getElementById('email').value;
const pass = document.getElementById('pass').value;
const cpass = document.getElementById('cpass').value;



//storing values in the browser , localStorage
localStorage.setItem('FirstName', fname);
localStorage.setItem('LastName', lname);
localStorage.setItem('Email', email);
localStorage.setItem('Password', pass);
localStorage.setItem('CPassword',cpass);

if (fname == "" && lname == "" && email == "" && pass == "" && cpass == ""){
  Swal.fire(
    'Oops!',
    'Input all values!',
    'error'
  );
}
else{
  if(pass.length>=6 && pass.length<=20){
    if (pass !== cpass){
      Swal.fire(
        'Oops!',
        'Password not matching!',
        'error'
      );
    }else{
      Swal.fire(
        'Good Job!',
        'Registration Successfu!',
        'success'
      );
      setTimeout(()=>{
        location.href ='login.html'
      },5000)

    }
  }else{
    Swal.fire(
      'Oops!',
      'Input a minimum of six digits password!',
      'error'
    )
  }
}



}