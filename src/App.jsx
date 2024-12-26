import './App.css'
 
function App() {
    
    const handleClick = (event) => {
        const buttonElement = event.currentTarget;
        const buttonText = buttonElement.textContent;
        const displayText = document.getElementById('display');
        
        // Handle clear button
        if (buttonText === 'C') {
            displayText.textContent = '0';
        }

        // Handle equal button
        else if (buttonText === '=' && !displayText.textContent.match(/[\+\*\/\-]$/)) {
            let expression = displayText.textContent;
            let answer = Math.round(1e12 *eval(expression)) / 1e12;
            displayText.textContent = answer;
        }
        else if (buttonText === '=' && displayText.textContent.match(/[\+\-\*\/]$/)) {
            displayText.textContent = displayText.textContent.slice(0,-1);
        }

        // Handle zero button
        else if (displayText.textContent === '0') {
            if (buttonText.match(/[\0\+\*\/\=]/)) {
                displayText.textContent = '0';
            }
            else if (buttonText === '.') {
                displayText.textContent = '0.';
            }
            else {
                displayText.textContent = buttonText;
            }
        }
                
        // Handle decimal point
        else if (buttonText === '.' && displayText.textContent.match(/[\+\-\*\/]$/)) {
                displayText.textContent = displayText.textContent + '0.';
        }
        else if (displayText.textContent.match(/(\.\d*)$/)) {
            if (buttonText === '.') {
                displayText.textContent = displayText.textContent;
            }
            else {
                displayText.textContent = displayText.textContent + buttonText;
            }
        }

        // Handle with operators
        else if (displayText.textContent.match(/\d[\+\-\*\/]$/)) {
            if (displayText.textContent.match(/\-$/)) {
                if (buttonText.match(/[\+\*\/]/)) {
                    displayText.textContent = displayText.textContent.slice(0, -1) + buttonText;
                }
                else if (buttonText === '-') {
                    displayText.textContent = displayText.textContent;
                }
                else {
                    displayText.textContent = displayText.textContent + buttonText;
                }
            }
            else {
                if (buttonText === '-') {
                    displayText.textContent = displayText.textContent + buttonText;
                }
                else if (buttonText.match(/[\+\*\/]/)) {
                    displayText.textContent = displayText.textContent.slice(0, -1) + buttonText;
                }
                else {
                    displayText.textContent = displayText.textContent + buttonText;
                }
            }
        }
        else if (displayText.textContent.match(/\d[\+\-\*\/][\+\-\*\/]$/)) {
            if (buttonText.match(/[\+\-\*\/]/)) {
                displayText.textContent = displayText.textContent.replace(/[\+\-\*\/][\+\-\*\/]$/, buttonText);
            }
            else {
                displayText.textContent = displayText.textContent + buttonText;
            }
        }

        else if (displayText.textContent.match(/[^\+\-\*\/]$/)) {
            displayText.textContent = displayText.textContent + buttonText;
        }

        // Limit the number of digits on the display
        const maxDigits = 20;
        if (displayText.textContent.length > maxDigits) {
            displayText.textContent = displayText.textContent.slice(0, maxDigits);
        }
    }   

    return (
        <div id='calculator'>
            <div id='display-container'>
                <div id='display'>
                    0
                </div>
            </div>
            <div id='buttons-container'>
                <button id='clear' onClick={handleClick}>C</button>
                <button id='zero' onClick={handleClick}>0</button>
                <button id='divide' onClick={handleClick}>/</button>
                <button id='two' onClick={handleClick}>2</button>
                <button id='three' onClick={handleClick}>3</button>
                <button id='four' onClick={handleClick}>4</button>
                <button id='multiply' onClick={handleClick}>*</button>
                <button id='subtract' onClick={handleClick}>-</button>
                <button id='six' onClick={handleClick}>6</button>
                <button id='seven' onClick={handleClick}>7</button>
                <button id='eight' onClick={handleClick}>8</button>
                <button id='nine' onClick={handleClick}>9</button>
                <button id='decimal' onClick={handleClick}>.</button>
                <button id='five' onClick={handleClick}>5</button>
                <button id='one' onClick={handleClick}>1</button>
                <button id='add' onClick={handleClick}>+</button>
                <button id='equals' onClick={handleClick}>=</button>
            </div>
        </div>
    )
}
export default App;