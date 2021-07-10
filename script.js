function invalidEmail(elem,e){
    e.preventDefault();
    elem.style.borderColor = (elem.id==='header-input-text')?'var(--light-gray)':'var(--grayish-blue)';
    document.getElementById(elem.id).nextElementSibling.classList.add('invalid-email-active');
}