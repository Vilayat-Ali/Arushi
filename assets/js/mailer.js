// Email mechanism
const form = document.getElementsById('form');

form.onsubmit=async(e)=>{

e.preventDefault(e);

Email.send({
	Host: "smtp.gmail.com",
	Username : "articart29@gmail.com",
	Password : "Art@5229",
	To : `${document.getElementById('email').value}`,
	From : 'www.articart29@gmail.com',
	Subject : `${document.getElementById('subject').value}`,
	Body : `${document.getElementById('message').value}`,
	}).then(
		message => alert("Email has been sent!")
	);
}
