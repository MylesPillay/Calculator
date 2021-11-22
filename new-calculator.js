class Calculator {
    constructor(previousEntryTextElement, currentEntryTextElement) {
    this.previousEntryTextElement = previousEntryTextElement
    this.currentEntryTextElement = currentEntryTextElement
    this.clear()
}

    clear() {
        this.currentEntry = ''
        this.previousEntry = ''
        this.operation = undefined
    
    }


    storeNumber(number) {
        if (number ==='.' && this.currentEntry.includes('.')) return
        this.currentEntry = this.currentEntry.toString() + number.toString()
    
    }

    chooseSymbol(operation) {
        if (this.currentEntry === '' ) return
        if (this.previousOperand !== '' ) {
            this.compute()
        
    }
            this.operation = operation
            this.previousOperand = this.currentOperand
            this.currentOperand = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousEntry)
        const current = parseFloat(this.currentEntry)
                if(isNaN(prev) || isNaN(current)) return
                switch (this.operation) {

                    case '+' :
                        computation = previous + current
                        break
                    case '*' : 
                        computation = previous * current
                        break
                    case '-' :
                        computation = previous - current
                        break
                    case '÷' :
                        computation = previous / current
                        break
                    default: 
                    return
                }
                this.currentEntry= computation
                this.operation = undefined
                this.previousEntry = ''

            }
    

    updateDisplay() {
        this.currentEntryTextElement.innerText = this.currentEntry
        this.previousEntryTextElement.innerText = this.previousEntry
    }
}
const numberButtons = document.querySelectorAll('[data-number]')
const symbolButtons = document.querySelectorAll('[data-symbol]')
const equalsButton = document.querySelector('[data-equals]')
const clearElement = document.querySelector('[data-all-clear]')
const deleteElement = document.querySelector('[data-delete]')
const previousEntryTextElement= document.querySelector('[data-previous-entry]')
const currentEntryTextElement = document.querySelector('[data-current-entry]')


const calculator = new Calculator(previousEntryTextElement, currentEntryTextElement)

numberButtons.forEach(button => {
button.addEventListener('click', () => {
    calculator.storeNumber(button.innerText)
    calculator.updateDisplay()
    })
})


symbolButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})



/*
class Computer {
    constructor(display1TextElement, display2TextElement) {
        this.display1TextElement = display1TextElement
        this.display2TextElement = display2TextElement
        this.clearElement ()    
    }

        clearElement() {
            this.display1TextElement = ''
            this.display2TextElement = ''
            this.sumAction = undefined
        }

        deleteElement() {
            this.display1TextElement = this.display1TextElement.toString().slice(0, -1)
        }

        storeNumber(number) {
            if (number ==='.' && this.display1TextElement.includes('.')) return  //should only allow 1 decimal place
            this.display1TextElement = this.display1TextElement.toString() + number.toString()
        }

 
        symbolSelected (sumAction) {
            if (this.display1TextElement === '') return
            if (this.display2TextElement !== '') { // says anything other than an empty string execute
                this.execute()
            }
            this.sumAction = sumAction
            this.display2TextElement = this.display1TextElement
            this.display1TextElement = ''
            } 

            execute() {
                let executeSum
                const previous = parseFloat(this.display2TextElement)
                const current = parseFloat(this.display1TextElement)
                if(isNaN(previous) || isNaN(current)) return) 
                switch (this.sumAction) {

                    case '+' :
                        executeSum = previous + current
                        break
                    case '*' : 
                        executeSum = previous * current
                        break
                    case '-' :
                        executeSum = previous - current
                        break
                    case '÷' :
                        executeSum = previous / current
                        break
                    default: 
                    return
                }
                this.display1TextElement = executeSum
                this.sumAction = undefined
                this.display2TextElement = ''

            }
        

        displayRefresh () {
            this.display1TextElement.innerText = this.display1TextElement
            this.display2TextElement.innerText = this.display2TextElement

        }              
    }

    const numbersElement = document.querySelectorAll('.button-number');
    const symbolsElement = document.querySelectorAll('.button-symbol');
    const equalsElement = document.querySelector('.button-equals');
    const clearElement = document.querySelector('.button-allClear');
    const display1TextElement = document.querySelector('.display1');
    const display2TextElement= document.querySelector('.display2');
    const deleteElement = document.querySelector('.button-delete');

    const computer = new Computer (display1TextElement, display2TextElement) 

    let display1Number = '';
    let display2Number = '';
    let result = null;
    let decimalPoint = false;

numbersElement.forEach(number => {
    number.addEventListener('click', (event) => {
        if (EventTarget.innerText === '.' && !decimalPoint){
            decimalPoint = true;
        }else if (EventTarget.innerText === '.' && decimalPoint){
            return;
        }
        display2Number += EventTarget.innerText;
        display2TextElement.innerText = display2Number
    })


/*
        computer.storeNumber(button.innerText)
        computer.displayRefresh()
    })


symbolsElement.forEach(button => {
    button.addEvenetListener('click', () => {
        computer.selectSymbol(button.innerText)
        computer.displayRefresh()
    })
})

equalsElement.addEventListener('click', button => {
    computer.execute()
    computer.displayRefresh()
    })

clearElement.addEventListener('click', button => {
    computer.clear()
    computer.displayRefresh()
    })
deleteElement.addEventListener('click' button => {
    computer.deletion()
    computer.displayRefresh()
})
*/