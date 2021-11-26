
const stringSize = (text) => {

    const n = text.length;
    return n;

}
    const replaceCharacterE = (text) => {
    const result = text.replace('e', ' ');
    return result;

}
const concatString = (text1, text2) => {
 
    let result = text1.concat(text2);
    return result;

}
const showChar5 = (text) => {
    const result = text.slice(4, 5);
    return result;

}
const showChar9 = (text) => {
    const result = text.slice(0, 9);
    return result;

}
const toCapitals = (text) => {
    const capital = text.toUpperCase();
    return capital;
    

}
const toLowerCase = (text) => {
    const lower = text.toLowerCase();
    return lower;

}
const removeSpaces = (text) => {
    let result = text.trim();
    return result;

}
const IsString = (text) => {
    return typeof text === 'string' || text instanceof String;

}

const getExtension = (text) => {
    const fileExtension = text.split('.').pop(); 
    return fileExtension;

}
const countSpaces = (text) => {
    const spaceCount = (text.split(" ").length - 1);
    return spaceCount;

}
const InverseString = (text) => {
    const reverseWord = text.split("").reverse().join("");
    return reverseWord;

}

const power = (x, y) => {
    const p =Math.pow(x, y);
    return p;

}
const absoluteValue = (num) => {
    const absolute = Math.abs(num);
    return absolute;

}
const absoluteValueArray = (array) => {
    const value = array.map(Math.abs);
    return value;

}
const circleSurface = (radius) => {
    const c = Math.round(Math.pow(radius, 2) * Math.PI);
    return c;

}
const hypothenuse = (ab, ac) => {
    const hypo = Math.hypot(ab, ac);
    return hypo;

}
const BMI = (weight, height) => {
    const wh= Number((weight / (height * height)).toFixed(2));
    return wh;

}

const createLanguagesArray = () => {
   const array = ["Html","CSS","Java","PHP"];
   return array;


}

const createNumbersArray = () => {
    const arrayNb = [0,1,2,3,4,5];
    return arrayNb;

}

const replaceElement = (languages) => {
   languages.splice(2,1,'Javascript');
   return languages;
  

}

const addElement = (languages) => {
    languages.splice(4, 0, 'Ruby', 'Python');
    return languages;

}

const addNumberElement = (numbers) => {
    numbers.unshift(-2,-1);
    return numbers;

}

const removeFirst = (languages) => {
    languages.shift();  
    return languages;      

}

const removeLast = (languages) => {
    languages.pop();
    return languages;

}

const convertStrToArr = (social_arr) => {
    return split_string = social_arr.split(",");

}

const convertArrToStr = (languages) => {
    return languages.toString();

}

const sortArr = (social_arr) => {
    return social_arr.sort();

}

const invertArr = (social_arr) => {
    return social_arr.reverse();

}