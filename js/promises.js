export function testPromises(arg) {
    console.log('Это выполняется всегда');
    let promise = new Promise((resolve,reject)=>{
        (arg == 1) ? resolve() : reject();
    });
    return promise;
}
