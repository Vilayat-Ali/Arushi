// Email mechanism
const form = document.getElementsByClassName('php-email-form');

form.onsubmit=async(e)=>{

e.preventDefault(e);

Email.send({
	Host: "smtp.gmail.com",
	Username : "articart29@gmail.com",
	Password : "9129279113",
	To : 'vilayatcodemysite@gmail.com',
	From : 'www.articart29@gmail.com',
	Subject : `${document.getElementById('subject').value}`,
	Body : `${document.getElementById('message').value}`,
	}).then(
		message => alert("Email has been sent!")
	);
}
