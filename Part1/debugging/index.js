console.log(`Use me to run a debugger`);

const randomArray = [12, 23, 245, 1324, , 1231, null, `Ed`, true];
// Define the function
const itsNotANumber = item => {
    console.log(typeof (item) === `string` ? `string was: ${item}` : `something other than a number or string`);
}

for (let item of randomArray) {
    try {
        if (!item) {
            // Force create an error then catch it
            // This error Object
            throw new Error(`No value`);
        }
    } catch (error) {
        console.log(error.message);
    }
    if (isNaN(item)) {
        itsNotANumber(item);
    }
    console.log(`Current value: ${item}`);
}