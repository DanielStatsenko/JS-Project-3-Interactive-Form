/*===========================
When the page first loads, the "Name:" text field has focus 
by default to prompt the user to enter their name.
===========================*/

const name_Field = document.getElementById('name').focus();

/*===========================
The "job_Role_Other" function prevents the "text field" with the id of "other-job-role" 
from being displayed when the form first loads. The function then displays the "text field"
once the user selects the "option" with the value of "Other".
===========================*/

function job_Role_Other() {
    const title_Option = document.getElementById('title')
    const title_Option_Other = title_Option.lastElementChild 
    const other_Job_Role_InputField = document.getElementById('other-job-role');

    other_Job_Role_InputField.style.visibility = 'hidden'

   title_Option.addEventListener('click', (e) => {
       if (e.target.value === 'other') {
        other_Job_Role_InputField.style.visibility = 'visible';
       } else {
        other_Job_Role_InputField.style.visibility = 'hidden';
       }
   });
}
job_Role_Other();