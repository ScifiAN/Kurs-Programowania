function isEmpty(value) {
    return !value || value.trim() === '';
}

function userCredentialsAreValid(email, password) {
    return (
        email
        && email.includes('@')
        && password
        && password.trim().length >= 6
    )
}

function userDetailsAreValid(email, password, username, address, postal, city){
    return (
        userCredentialsAreValid(email, password)
        && !isEmpty(username)
        && !isEmpty(address)
        && !isEmpty(postal)
        && !isEmpty(city)
    );           
}

function confirmEmail(email, confirmEmail){
    return email === confirmEmail;
}

module.exports = {
    confirmEmail: confirmEmail,
    userDetailsAreValid: userDetailsAreValid
}