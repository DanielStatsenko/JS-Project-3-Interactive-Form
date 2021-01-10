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
    const title_Option = document.getElementById('title');
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

/*===========================
The "activities_Cost_Time" function calculates the total cost of selected activities 
and correctly updates the form when users select or deselect activities.
===========================*/

function activities_Cost_Time() {

/*===========================
The code below has been adapted 
from:https://stackoverflow.com/questions/14544104/checkbox-check-event-listener
===========================*/

    const activities_Checkboxes = document.querySelectorAll("input[type=checkbox]");
    let enabled_Checkboxes = []

// Use Array.forEach to add an event listener to each checkbox.
activities_Checkboxes.forEach(function checkbox(checkbox) {
  checkbox.addEventListener('change', function() {
    enabled_Checkboxes = 
      Array.from(activities_Checkboxes) // Convert activities_Checkboxes to an array to use filter and map.
      .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
      .map(i => i.dataset.cost) // Use Array.map to extract only the checkbox data-cost values from the array of objects.
    
    function total_Cost_Of_Activities() {
        const numberArray = enabled_Checkboxes.map(Number) /* Code adapted from: 
      https://stackoverflow.com/questions/10541770/convert-string-array-to-integer-array */

        const total_Cost = numberArray.reduce(function(a, b) { return a + b; }, 0); /* Code adapted from: 
      https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers */
      
      document.getElementById('activities-cost').textContent = `Total: $${total_Cost}`
    }

    total_Cost_Of_Activities();
      
  })
});
}
activities_Cost_Time();

/*===========================
The "payment_Info" function listens for user changes. 
When a change is detected, it hides all payment sections in the form’s UI except the selected one.
===========================*/

function payment_Info() {
  const payment_Option = document.getElementById('payment');
  const class_Credit = document.getElementsByClassName('credit-card');
  const class_Paypal = document.getElementsByClassName('paypal');
  const class_Bitcoin = document.getElementsByClassName('bitcoin');

/*===========================
The "credit_By_Default" function selects the "Credit Card" payment option when the page first loads
===========================*/

function credit_By_Default() {
    document.getElementById('payment').value = 'credit-card';
        class_Paypal[0].style.display = 'none';
        class_Bitcoin[0].style.display = 'none';
  }

  credit_By_Default()  
    payment_Option.addEventListener('change', (e) => {
          if (e.target.value === 'credit-card') {
            class_Credit[0].style.display = 'block';
            class_Paypal[0].style.display = 'none';
            class_Bitcoin[0].style.display = 'none';
          } else if (e.target.value === 'paypal') {
              class_Credit[0].style.display = 'none';
              class_Paypal[0].style.display = 'block';
              class_Bitcoin[0].style.display = 'none';
          } else if (e.target.value === 'bitcoin') {
              class_Credit[0].style.display = 'none';
              class_Paypal[0].style.display = 'none';
              class_Bitcoin[0].style.display = 'block';
          }
      })
}
payment_Info();

/*===========================

===========================*/

function form_Validation() {
    const form_Element = document.getElementsByTagName('form');
    const name_Field_Value = document.getElementById('name').value;
    const email_Field_Value = document.getElementById('email').value;
    const exp_Month_Field = document.getElementById('exp-month');
    //const exp_Month_Field_Opt = exp_Month_Field.options[exp_Month_Field.selectedIndex];
    const exp_Year_Field = document.getElementById('exp-year');
    //const exp_Year_Field_Opt = exp_Year_Field.options[exp_Year_Field.selectedIndex];
    const credit_Field_Value = document.getElementById('cc-num').value;
    const zip_Field_Value = document.getElementById('zip').value;
    const cvv_Field_Value = document.getElementById('cvv').value;
        
        function valid_Name(name) {
            return /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/.test(name); /* Code adapted from: 
            https://stackoverflow.com/questions/47718784/regular-expression-for-first-name */
        }

        function valid_Activity() {
            const activities_Checkboxes = document.querySelectorAll("input[type=checkbox]");
            const activities_Box = document.getElementById('activities-box');
            const activities_Hint = document.getElementById('activities-hint');
            //let enabled_Checkboxes = []

            activities_Checkboxes.forEach(function checkbox(checkbox) {
                checkbox.addEventListener('change', (e) => {
                    if (e.target) {
                        activities_Box.classList.remove('error-border')
                        activities_Hint.style.display = 'none';
                    } else {
                        activities_Box.classList.add('error-border')
                        activities_Hint.style.display = 'block';
                    }
                })
                });
        }

        function valid_Email(email) {
            return /^[@]+@[^@.]+\.[a-z]+$/i.test(email); 
        }

        function exp_Month() {
            exp_Month_Field.addEventListener('change', (e) => {
                if (e.target) {
                    document.getElementById('exp-month').classList.remove('error-border')
                } else {
                    document.getElementById('exp-month').classList.add('error-border')
                }
            })
        }

        function exp_Year() {
            exp_Year_Field.addEventListener('change', (e) => {
                if (e.target) {
                    document.getElementById('exp-year').classList.remove('error-border')
                } else {
                    document.getElementById('exp-year').classList.add('error-border')
                }
            })
        }

        function valid_Credit(credit) {
            return /[\d]{13,16}/.test(credit); 
        }

        function valid_Zip_Code(zip) {
            return /[\d]{5}/.test(zip); 
        }

        function valid_Cvv(cvv) {
            return /[\d]{3}/.test(cvv); 
        }

        function is_Form_Valid() {
            valid_Name(name_Field_Value);
            valid_Email(email_Field_Value);
            valid_Credit(credit_Field_Value);
            valid_Zip_Code(zip_Field_Value);
            valid_Cvv(cvv_Field_Value);
        }

        function display_Error_Border() {
            if (valid_Name(name_Field_Value) === false) {
                document.getElementById('name').classList.add('error-border');
            } else if (valid_Name(name_Field_Value) === true) {
                document.getElementById('name').classList.remove('error-border');
            } else if (valid_Email(email_Field_Value) === false) {
                document.getElementById('email').classList.add('error-border');
                document.getElementById('email-hint').style.display = 'block';
            } else if (valid_Email(email_Field_Value) === true) {
                document.getElementById('email').classList.remove('error-border');
                document.getElementById('email-hint').style.display = 'none';
            } else if (() && valid_Credit(credit_Field_Value)) {
                
            }
        }
        
        is_Form_Valid();
        valid_Activity();
        exp_Month();
        exp_Year();

        form_Element[0].addEventListener('submit', (e) => {
            if (is_Form_Valid() === false) {
                e.preventDefault();
            } else if (exp_Month_Field.className === 'error-border') {
                e.preventDefault();
            } else if (exp_Year_Field.className === 'error-border') {
                e.preventDefault();
            }
        })
}
form_Validation();

// valid_Activity();
// exp_Month();
// exp_Year();