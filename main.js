const game = () => {
    let p_score = 0;
    let c_score = 0;

    // Match

    const play = () => {

        reset();

        const options = document.querySelectorAll('.controls button');
        const p_hand = document.querySelector('img.p-hand')
        const c_hand = document.querySelector('img.c-hand')

        const hands = document.querySelectorAll('.hands img');
        // Remove Animation
        hands.forEach((hand) => {
            hand.addEventListener('animationend', function () {
                this.style.animation = '';
            });
        });

        //Computer Options
        const c_options = ['Rock', 'Paper', 'Scissor'];

        options.forEach((option) => {
            option.addEventListener('click', function () {

                
                // Player Choice
                const p_choice = this.textContent;
                
                

                // Handling Computer Choice
                const c_num = Math.floor(Math.random() * 3) /// Randomly generate numbers
                const c_choice = options[c_num].innerText;



                setTimeout(() => {
                    // Changing Images
                    p_hand.src = 'pics/hands/' + p_choice + '.png';
                    c_hand.src = 'pics/hands/' + c_choice + '.png';

                    // Call the Compare Function
                    compare(p_choice, c_choice);
                }, 1000);

                // Animation on Click
                p_hand.style.animation = 'handshakePlayer 1s ease';
                c_hand.style.animation = 'handshakeComputer 1s ease';



            });
        });


    };



    // Score 

    const modScore = () => {

        reset();
        
        playerScore = document.querySelector('.game__score .player h4#score');
        computerScore = document.querySelector('.game__score .computer h4#score');

        playerScore.textContent = p_score;
        computerScore.textContent = c_score;
    }



    // Rules

    const compare = (playerChoice, computerChoice) => {

        const msg = document.querySelector('.msg h1');

        // if tie
        if (playerChoice == computerChoice) {
            msg.innerText = 'Still same';
            return;   // this ends a function
        }

        // if player chooses Rock
        if (playerChoice == 'Rock') {
            if (computerChoice == 'Paper') {
                msg.innerText = 'No mercy';
                c_score++;
                modScore();
                return;   // this ends the function
            } else {
                msg.innerText = 'You are on fire';
                p_score++;
                modScore();
                return;   // this ends the function
            }
        }

        // if player chooses Paper
        if (playerChoice == 'Paper') {
            if (computerChoice == 'Scissor') {
                msg.innerText = 'No mercy';

                c_score++;
                modScore();

                return;   // this ends the function
            } else {
                msg.innerText = 'You are on fire';

                p_score++;
                modScore();

                return;   // this ends the function
            }
        }

        // if player chooses Scissor
        if (playerChoice == 'Scissor') {
            if (computerChoice == 'Rock') {
                msg.innerText = 'No mercy';

                c_score++;
                modScore();

                return;   // this ends the function
            } else {
                msg.innerText = 'You are on fire';

                p_score++;
                modScore();

                return;   // this ends the function
            }
        }


        document.querySelector('.player #score').innerText = p_score;
        document.querySelector('.computer #score').innerText = c_score;
    };


    // Reset Score

    const reset = () => {
        var reset = document.querySelector('button#reset');
        reset.addEventListener('click', function () {
            c_score = 0;
            p_score = 0;
            document.querySelector('.player #score').innerText = p_score;
            document.querySelector('.computer #score').innerText = c_score;
            document.querySelector('.p-hand').setAttribute('src', 'pics/hands/Rock.png');
            document.querySelector('.c-hand').setAttribute('src', 'pics/hands/Rock.png');
            document.querySelector('.msg h1').innerText = '';
        });
    }

    


    // Call Functions
    play();

}

game();