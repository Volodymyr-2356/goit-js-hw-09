const formData = {
    email: "",
    message: ""
}

const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
console.log(formEl);

// Зберігаємо дані в localstorage
formEl.addEventListener('input', (e) => {
    const obj = {
        name: formEl.elements.email.value,
        message: formEl.elements.message.value
    }
    console.log(obj);
    // const json = JSON.stringify(obj);
    // localStorage.setItem(STORAGE_KEY, json);
    saveToLS(STORAGE_KEY,obj)
        
})

// дістаЄМО дані з localstorage у форму
document.addEventListener('DOMContentLoaded', () => {
    const data = loadFromLS(STORAGE_KEY);
    console.log(data);
    formEl.elements.email.value = data.name;
    formEl.elements.message.value = data.message;
    
})

// При  відправкі форми збираємо дані з форми 
formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(formEl);
    const obj = {
        email: formData.get('email'),
        message: formData.get('message')

    }
    if (obj.email.trim() === "" || obj.message.trim() === "") {
        alert('Fill please all fields');
        return;
    }
    console.log(obj);
    localStorage.removeItem(STORAGE_KEY);
    formEl.reset();
    
})




function saveToLS(key, value) {
    const json = JSON.stringify(value);
    localStorage.setItem(key,json);
}

function loadFromLS(key) {
    const jsonData = localStorage.getItem(key);
    const result = JSON.parse(jsonData);
    return result;
   
}
