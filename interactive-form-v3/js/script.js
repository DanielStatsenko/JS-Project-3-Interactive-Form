/*===========================
When the page first loads, the "name_Field" variable allows the "Name:" text field 
to have focus so that the user is prompted to enter their name.
===========================*/

const name_Field = document.getElementById('name').focus();

/*===========================
The "job_Role_Other" function prevents the "text field" with the id of "other-job-role" 
from being displayed when the form first loads. The function then displays the "text field"
once the user selects the "option" with the value of "Other".
===========================*/

function job_Role_Other() {
    const title_Option = document.getElementById('title')
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

/*===========================

===========================*/

const shirt_Design_Options = document.getElementById('design');
const shirt_Color_Options = document.getElementById('color');

    shirt_Color_Options.disabled = 'true';
