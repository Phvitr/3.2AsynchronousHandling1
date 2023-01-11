let onMyBirthday = (isKayaSick) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isKayaSick) {
                resolve("she was sick hence we cannot fuck");
            }
            else {
                reject(new Error(`Son of the bitch!`))
            }
        },2000)
    })
}

onMyBirthday(false)
.then((dmm) => {
    console.log(`I cannot have sex with her cuz ${dmm}`)
})
.catch((err) => {
    console.log(err)
})
.finally(() => {
    console.log(`lets fuck`)
})