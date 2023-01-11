function checkAmountOfMoney() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const costOfCar = 20000;
            let amountOfMoney = 30000;

            if (amountOfMoney >= costOfCar) {
                resolve("Bạn có thể mua xe này!");
            } else {
                reject("Bạn không có đủ tiền để mua xe này.");
            }
        }, 1000);
    });
}

checkAmountOfMoney()
    .then(result => console.log(result))
    .catch(error => console.log(error));
