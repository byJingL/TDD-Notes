import Lock from "./lock.js";
import SecretDiary from "./secretdiary.js";
import Entry from "./entry.js";

const mySecretDiary = new SecretDiary(new Lock());
console.log(mySecretDiary.getLockStatus());

try {
    console.log(mySecretDiary.getEntries());
} catch(error) { 
    console.log(`Error: ${error.message}`);
}
try {
    console.log(mySecretDiary.addEntry());
} catch (error) {
    console.log(`Error: ${error.message}`);
}
console.log(`Program continus to execute...`)

mySecretDiary.unlock();
console.log(mySecretDiary.getLockStatus());

mySecretDiary.addEntry(new Entry({ 'date': '2022-10-08', 'text': 'xxxxxx' }));
mySecretDiary.addEntry(new Entry({ 'date': '2022-10-07', 'text': 'xxxxxx' }));
console.log(mySecretDiary.getEntries());
for (let i = 0; i < mySecretDiary.getEntries().length; i++) { 
    console.log(mySecretDiary.getEntries()[i].getContent())
}

mySecretDiary.lock();
console.log(mySecretDiary.getLockStatus());