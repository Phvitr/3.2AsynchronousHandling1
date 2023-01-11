function download(url,callback) {
    setTimeout(() => {
        console.log(`downloading ${url}`);
        callback(url);
    },0);
}
function process(pic) {
    console.log(`processing ${pic}`);
}
let url = `https://www.google.com.vn`;
download(url,process);