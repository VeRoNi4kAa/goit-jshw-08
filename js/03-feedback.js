import throttle from 'lodash.throttle';



const formRef = document.querySelector('form');
const email = formRef.elements.email;
const message = formRef.elements.message;

const FORM_FIELDS_KEY = 'feedback-form-state';

const onInput = e => {
    const formData = {
        mail: email.value,
        message: message.value,
    };
    localStorage.setItem(FORM_FIELDS_KEY, JSON.stringify(formData));
};

const getFormLS = () => {
    const parsedData = JSON.parse(localStorage.getItem(FORM_FIELDS_KEY));

    if (!parsedData) return;

    email.value = parsedData.mail,
        message.value = parsedData.message;
};
getFormLS();

const onSubmit = e => {
    e.preventDefault();

    if (!email.value || !message.value) {
        return alert('всі поля повинні бути заповнені!');
    }

    console.log({ email: email.value, message: message.value });

    formRef.reset();
    localStorage.removeItem(FORM_FIELDS_KEY);
};

formRef.addEventListener('input', throttle(onInput, 500));

formRef.addEventListener('submit', onSubmit);
