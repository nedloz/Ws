
const auth = (email) => {
  var myHeaders = new Headers();
  myHeaders.append("email", email);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("https://medic.madskill.ru/api/sendCode", requestOptions)
    .then(response => response.text())
    .catch(error => console.log('error', error));
}

const emailCode = (email, code) => {
  var myHeaders = new Headers();
  myHeaders.append("email", email);
  myHeaders.append("code", code);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow'
  };

  return fetch("https://medic.madskill.ru/api/signin", requestOptions)
    .then(res => res.json())
    .catch(error => console.log('error', error));
}

// "user3@madskill.ru"

export { auth, emailCode }
