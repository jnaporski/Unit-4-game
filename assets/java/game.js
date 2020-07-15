$(document).ready(function() {  
    var currentNumber = 0;
    var min = 19;
    var max = 120;
    var wins = 0;
    var losses = 0;
    
    function randomNumber() {
        randomNumber = [Math.floor(Math.random() * (max - min) + min)];
        $("#randomNumber").html(randomNumber);
    }

    // randomNumber();
        //generate random value between 1 and 12 
        function crystals() {
            var crystal = Math.floor(Math.random() * (12 - 1) + 1);
            console.log("From Function crystals(): " + crystal);
            return crystal;    
        }
    
            //assign each gem a random value from function crystals()
            var ruby = crystals(); 
            var sapphire = crystals();
            var goldenOnyx = crystals();
            var emerald = crystals();
    
        randomNumber();
        $("#button-ruby").on("click", function() {
            currentNumber = currentNumber + ruby;
            $("#scoreFinal").html(currentNumber);
            console.log("ruby: " + ruby);
            console.log("Score: " + currentNumber);
            result(currentNumber);
        })
    
        $("#button-sapphire").on("click", function() {
            currentNumber = currentNumber + sapphire;
            $("#scoreFinal").html(currentNumber);
            console.log("sapphire: " + sapphire);
            console.log("Score: " + currentNumber);
            result(currentNumber);
        })
        $("#button-goldenOnyx").on("click", function() {
            currentNumber = currentNumber + goldenOnyx;
            $("#scoreFinal").html(currentNumber);
            console.log("Golden Onyx: " + goldenOnyx);
            console.log("Score: " + currentNumber);
            result(currentNumber);
        })
        $("#button-emerald").on("click", function() {
            currentNumber = currentNumber + emerald;
            $("#scoreFinal").html(currentNumber);
            console.log("emerald: " + emerald);
            console.log("Score: " + currentNumber);
            result(currentNumber);
        })


    function reset() {
        currentNumber = 0;
        ruby = crystals(); 
        sapphire = crystals();
        goldenOnyx = crystals();
        emerald = crystals();
        randomNumber = [Math.floor(Math.random() * (max - min) + min)];
        $("#randomNumber").html(randomNumber);
        $("#scoreFinal").empty();
    }
    
    //determind win or loss
    function result(){
        //if we win
        if (currentNumber == randomNumber) {
            wins++;
            console.log("wins: " + wins);
            $("#wins").html(wins);
            console.log(wins);
            reset();
        }

        //if we lose
        else if (currentNumber > randomNumber) {
            losses++;
            console.log("losses: " + losses);
            $("#losses").html(losses);
            reset();
        }

    }
    
})
