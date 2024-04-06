const input = document.querySelectorAll('button');
const output = document.querySelector('input');
let sum = ''; // Initialize sum as an empty string
let value = ''; // Initialize value as an empty string

input.forEach((button) => {
    button.addEventListener("click", function () {
        let inputValue = '';
        if(button.innerText == 'A+'){
          inputValue = 4;
        }
        else if(button.innerText == 'A'){
          inputValue = 3.75;
        }
        else if(button.innerText == 'A-'){
          inputValue = 3.50;
        }
        else if(button.innerText == 'B+'){
          inputValue = 3.25;
        }
        else if(button.innerText == 'B'){
          inputValue = 3;
        }
        else if(button.innerText == 'B-'){
          inputValue = 2.75;
        }
        else if(button.innerText == 'C+'){
          inputValue = 2.5;
        }
        else if(button.innerText == 'C'){
          inputValue = 2.5;
        }
        else{
          inputValue=button.innerText;
        }
console.log(typeof(inputValue));
        switch (inputValue) {
            case "4":
                sum = "4";
                output.value = sum;
                value = sum;
                console.log(typeof(value));
                break;
            case 'A':
                sum = "3.75";
                output.value = sum;
                value = sum;
                break;
            case 'A-':
                sum = "3.5";
                output.value = sum;
                value = sum;
                break;
            case 'B+':
                sum = "3.25";
                output.value = sum;
                value = sum;
                break;
            case 'B':
                sum = "3";
                output.value = sum;
                value = sum;
                break;
            case 'B-':
                sum = "2.75";
                output.value = sum;
                value = sum;
                break;
            case 'C+':
                sum = "2.5";
                output.value = sum;
                value = sum;
                break;
            case 'C':
                sum = "2.5";
                output.value = sum;
                value = sum;
                break;
            case 'D':
                sum = "2";
                output.value = sum;
                value = sum;
                break;
            // Add cases for other grades similarly
          case 'AC':
            sum = '';
            output.value=sum;

            case 'Remove':
              console.log(sum);
                sum = sum.toString().slice(0, -1); // Remove the last character from sum
              
                output.value = sum;
                break;
            case '=':
              
                sum = eval(sum); // Evaluate the expression stored in value
                output.value = sum;
                break;
            default:
                // Append the clicked button's text to sum
                sum += inputValue;
                output.value = sum;
                break;
        }
    });
});
