
const submitButton = document.querySelector('.button');// creating a variable for button to add a listener
submitBtton.onclick =(e)=>{
  e.preventDefault()
const fname = document.getElementById('fname').value;
const sname = document.getElementById('sname').value;
const lname = document.getElementById('lname').value;
const email = document.getElementById('email').value;
const pass = document.getElementById('pass').value;
const cpass = document.getElementById('cpass').value;



//storing values in teh browser , localStorage
localStorage.setItem('FirstName', fname);
localStorage.setItem('LastName', lname);
localStorage.setItem('Email', email);
localStorage.setItem('Password', pass);
localStorage.setItem('CPassword',cpass);
}