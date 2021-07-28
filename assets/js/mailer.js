// Email mechanism
const form = document.getElementById('form');

form.onsubmit=async(e)=>{

e.preventDefault(e);

Email.send({
	Host: "smtp.gmail.com",
	Username : "articart29@gmail.com",
	Password : "Art@5229",
	To : "articart29@gmail.com",
	From : `${document.getElementById('email').value}`,
	Subject : `${document.getElementById('subject').value}`,
	Body : `${document.getElementById('message').value}`,
	}).then(
		message => alert("Email has been sent!")
	);
}
