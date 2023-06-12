
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
let a = localStorage.getItem(fname)
console.log('....'+a)

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
        'Registration Successful!',
        'success'
      );
      setTimeout(()=>{
        let opts = {
          lines: 13,
          length: 28,
          width: 14,
          radius: 42,
          scale: 1,
          corners: 1,
          color: '#FFF',
          opacity: 0.25,
          rotate: 0,
          direction: 1,
          speed: 1,
          trail: 60,
          fps: 20,
          zIndex: 2e9,
          className: 'spinner',
          top: '50%',
          left: '50%',
          shadow: false,
          hwaccel: false,
          position: 'absolute',
         },
          target = document.getElementById('spinner'),
          spinner = new Spinner(opts).spin(target);
      },1000)

    }
    setTimeout(()=>{
      location.href ='login.html'
    },3000)

  
  }else{
    Swal.fire(
      'Oops!',
      'Input a minimum of six digits password!',
      'error'
    )
  }
}
}

const loginButton = document.querySelector('.loginbutton');// creating a variable for button to add a listener
loginButton.onclick =(e)=>{
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

let a = localStorage.getItem(fname)
console.log('....'+a)

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
        'Registration Successful!',
        'success'
      );
      setTimeout(()=>{
        location.href ='login.html'
        let opts = {
          lines: 13,
          length: 28,
          width: 14,
          radius: 42,
          scale: 1,
          corners: 1,
          color: '#FFF',
          opacity: 0.25,
          rotate: 0,
          direction: 1,
          speed: 1,
          trail: 60,
          fps: 20,
          zIndex: 2e9,
          className: 'spinner',
          top: '50%',
          left: '50%',
          shadow: false,
          hwaccel: false,
          position: 'absolute',
         },
          target = document.getElementById('spinner'),
          spinner = new Spinner(opts).spin(target);
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