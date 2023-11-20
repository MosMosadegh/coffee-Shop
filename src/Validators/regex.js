const testEmail = (value) => {
    // const emailPattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/g
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g
    return emailPattern.test(value)
}

const testCodeMelli = (value) => {
    //test
}

const testPhoneNumber = (value) => {
    //test
}

export default {
    testEmail,
    testCodeMelli,
    testPhoneNumber,
}