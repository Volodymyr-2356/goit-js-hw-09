
const formData = {
    email: "",
    message: ""
}

const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
console.log(formEl);

// дістаЄМО дані з localstorage у форму
document.addEventListener('DOMContentLoaded', () => {
    const data = loadFromLS(STORAGE_KEY);
    console.log(data);
    if (!data) return;
    formData.email = data.email || "";
    formData.message = data.message || "";

    formEl.elements.email.value = formData.email;
    formEl.elements.message.value = formData.message;
    
})

// Зберігаємо дані в localstorage
formEl.addEventListener('input', (e) => {
    
    formData.email = formEl.elements.email.value;
    formData.message = formEl.elements.message.value;
    
    

    saveToLS(STORAGE_KEY,formData)
        
})



// При  відправкі форми збираємо дані з форми 
formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (formData.email.trim() === "" || formData.message.trim() === "") {
        alert('Fill please all fields');
        return;
    }
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);

    formData.email = "";
    formData.message = "";
    formEl.reset();
    console.log(formData)
    
})


function saveToLS(key, value) {
    const json = JSON.stringify(value);
    localStorage.setItem(key,json);
}

function loadFromLS(key) {
    const jsonData = localStorage.getItem(key);
    if (jsonData) {

        const result = JSON.parse(jsonData);
        return result;
    }
   
}
