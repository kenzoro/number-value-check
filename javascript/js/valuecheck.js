    function isNumber(valueToCheck)
    {
        return !isNaN(valueToCheck);
    }


    window.onload = function()
    {
        var numberField = document.getElementById("myForm").numberField //.element[0]; when you want to add events
        var textField = document.getElementById("myForm").textField
        var submitMyFormButton = document.getElementById("myForm").submitMyFormButton;
        
        var info = document.getElementById("info");
        var i = 0

        numberField.onkeydown = function (e)
        {
            
            if (!isNumber(String.fromCharCode(e.which)) && e.which !== 8 && e.which !== 190)
            {
                info.innerHTML = "Please, type a number";
                this.style.backgroundColor = "red";
                e.preventDefault();
            }
            else
            {
                info.innerHTML = "";
                this.style.backgroundColor = "green";
            }
        };


    };
