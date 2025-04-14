let generatedpassword = document.getElementById('generated_password_inputfield')
let copy = document.getElementById('copy')
let copied = document.getElementById('copied')
let lengthIndicator = document.getElementById('pwlength')
let slider = document.getElementById('slider')
let checkboxAll = document.querySelectorAll('input[type=checkbox]')
let uppercase = document.getElementById('uppercase')
let lowercase = document.getElementById('lowercase')
let numbers = document.getElementById('numbers')
let symbols = document.getElementById('symbols')
let button = document.getElementById('button')
let indicator = document.getElementById("strength-Indicator")
let symbolsString = '~@#!$%^&*()_+=-`/?><.,][{}\|;:"' 

let countt = document.getElementById('counttt')
let test = 1343


let password = ''
let passwordLength  = 10;
lengthIndicator.innerText =   passwordLength;
let currentLength ;
let checkboxCount =1;
let current_class_name = 'bg-gray-400'




// Random number generator
function givingRandom(min , max){
    return  Math.floor((Math.random()*(max-min+1))+min)
}

// Generates random uppercase char
function randomUppercase(){
    return String.fromCharCode(givingRandom(65,90))  
}

// Generates random lowercase char
function randomLowercase(){
    return String.fromCharCode(givingRandom(97,122))
}

// Generates random number
function randomNumbers(){
    return (givingRandom(0,9))
}

// Generates random symbols
function randomSymbols(){
    return symbolsString.charAt(givingRandom(0,symbolsString.length))
}

// Handling checkboxes 
function checkboxChangeHandle(){
   let tempcheckboxCount = 0
    checkboxAll.forEach((checkbox)=>{
        if(checkbox.checked){
            tempcheckboxCount ++;
        }
      
    })
    checkboxCount =tempcheckboxCount
}


// Event listner on all checkbox
checkboxAll.forEach((checkbox)=>{
    checkbox.addEventListener('change', checkboxChangeHandle)
})

// Attaching slider input with pw length display
slider.addEventListener('input', function(){
    if(slider.value<currentLength){
        slider.value= currentLength
    }
    passwordLength = slider.value
    lengthIndicator.innerText =  passwordLength;
})




                                                                // GENERATE BUTTON 
button.addEventListener('click', ()=>{
    if(checkboxCount==0 )
    return

    password = '' 
    generatedpassword.value = password  

    if(slider.value<=4 && checkboxCount> slider.value){
        slider.value = checkboxCount
        lengthIndicator.innerText = checkboxCount
    }

    let GenPass = []
// Minimum calling
if(uppercase.checked){
    currentLength++;
    GenPass.push(randomUppercase)
}
if(lowercase.checked){
    currentLength++;
   GenPass.push( randomLowercase)
}
if(numbers.checked){
    currentLength++;
    
    GenPass.push(randomNumbers)
}
if(symbols.checked){
    currentLength++
    GenPass.push(randomSymbols)
}


// Compulsory calling 
for(let i = 0 ; i<GenPass.length;i++){
    let tempp = GenPass[i]
    password = password+ tempp()
}

// Rest of char of password
for(let j = 0; j<(passwordLength - GenPass.length); j++){
    let funChoose = givingRandom(0 , GenPass.length-1)
    password = password + GenPass[funChoose]()
}

// Shuffling Password
  
password = Shufflingpassword(Array.from(password));
console.log(password)
    generatedpassword.value = password
            
    

// things happen when clicked on copy icon 
copy.addEventListener('click', function(){
    
    return copy_text()

})


// copying text and showing pop up 
async function copy_text() {
try{
await   navigator.clipboard.writeText(generatedpassword.value)
copied.textContent = "Copied"
}
catch(e){
    copied.textContent = "Failed"
    
}
copied.classList.remove('invisible')
setTimeout(() => {
copied.classList.add('invisible')
}, 2000);
}

strengthindicator()

        })

function Shufflingpassword(array){
    for(let i= 0; i<array.length; i++){
        const j = Math.floor(Math.random() * (i + 1));
        console.log(j)
        let temp = array[j]
        array[j]= array[i]
        array[i] = temp
    }
    let str = ''
    array.forEach((word) =>{
        str = word+ str
    })
    return str
}

// Password strength meter
function strengthindicator(){
    if(checkboxCount==1){
        indicator.classList.remove(current_class_name)
        indicator.classList.add("bg-red-700")
        current_class_name = 'bg-red-700'
    }
    if(checkboxCount==2){
        indicator.classList.remove(current_class_name)
        indicator.classList.add("bg-orange-500") 
        current_class_name = "bg-orange-500"
    }
    if(checkboxCount==3){
        indicator.classList.remove(current_class_name)
        indicator.classList.add("bg-yellow-700") 
        current_class_name = "bg-yellow-700"
    }
    if(checkboxCount==4){
        indicator.classList.remove(current_class_name)
        indicator.classList.add("bg-green-700") 
        current_class_name = "bg-green-700"
    }
}



































