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
The "t_Shirt_Info" function creates user interactivity in the "T-Shirt" Section
of the form.
===========================*/

function t_Shirt_Info() {
    const shirt_Design_Options = document.getElementById('design');
    const shirt_Color_Options = document.getElementById('color');

/*===========================
The code below disables the "Color" field when the page loads.
===========================*/

        shirt_Color_Options.disabled = true; /* Code adapted from: 
        https://www.w3schools.com/jsref/prop_select_disabled.asp */

/*===========================
The function "theme_JS_Puns_Visible" displays the "Cornflower Blue," "Dark Slate Grey," and "Gold."
shirt colors
===========================*/

    function theme_JS_Puns_Visible() {
        const heart_JS = document.querySelectorAll('option[data-theme="heart js"]');
            for (let i = 0; i < heart_JS.length; i++) {
                const option_Heart_JS = heart_JS[i];
                option_Heart_JS.style.display = 'none';     
            }
        const puns_JS = document.querySelectorAll('option[data-theme="js puns"]');
            for (let i = 0; i < puns_JS.length; i++) {
                const option_Puns_JS = puns_JS[i];
                option_Puns_JS.style.display = 'block';   
            }
}

/*===========================
The function "heme_Heart_JS_Visible" displays the "Tomato," "Steel Blue," and "Dim Grey."
shirt colors
===========================*/

    function theme_Heart_JS_Visible() {
        const puns_JS = document.querySelectorAll('option[data-theme="js puns"]');
            for (let i = 0; i < puns_JS.length; i++) {
                const option_Puns_JS = puns_JS[i];
                option_Puns_JS.style.display = 'none';   
            }
        const heart_JS = document.querySelectorAll('option[data-theme="heart js"]');
            for (let i = 0; i < heart_JS.length; i++) {
                const option_Heart_JS = heart_JS[i];
                option_Heart_JS.style.display = 'block';   
            }
    }

/*===========================
The code below allows the "Design" <select> element to listen for user changes. When a change is detected 
the "Color" <select> element is enabled. Then the code allows the "Color" dropdown menu to display only 
the color options associated with the selected design
===========================*/

    shirt_Design_Options.addEventListener('change', (e) => {
        if (e.target.value === 'js puns') {
            shirt_Color_Options.disabled = false;
              theme_JS_Puns_Visible()
        } else if (e.target.value === 'heart js') {
            shirt_Color_Options.disabled = false;
              theme_Heart_JS_Visible()
        }
    })
}
t_Shirt_Info();


