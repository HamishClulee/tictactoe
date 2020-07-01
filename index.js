document.addEventListener("DOMContentLoaded", function() {
    
    const red = "rgb(0, 0, 255)" // player 0
    const blue = "rgb(255, 0, 0)" // player 1
    const white = "rgb(255, 255, 255)" // unset

    let player = 0

    let movecount = 0

    const state = [
        ['#', '#', '#'],
        ['#', '#', '#'],
        ['#', '#', '#']
    ]

    // init!
    const squares = document.getElementsByClassName('square')
    for (let square of squares) {
        square.addEventListener('click', () => {
            playerClicked(getRow(square.id), getCol(square.id))
        })
        square.style.backgroundColor = "#fff"
    }

    // funcky
    const playerClicked = (row, col) => {
        let clicked = document.getElementById(`${row}-${col}`)

        if (unchecked(clicked)) {

            player = player === 0 ? 1 : 0

            clicked.style.backgroundColor = player === 0 ? red : blue

            setState(clicked.id)

            setUserMessage(`player ${player} - go!`)

            checkVictory()

            movecount++
        }

        if (movecount > 8) {
            setUserMessage('Game over bros!')
        }
    }

    const getRow = (id) => {
        return id.split('-')[0]
    }

    const getCol = (id) => {
        return id.split('-')[1]
    }

    const unchecked = (clicked) => {
        return clicked.style.backgroundColor == white
    }

    const checkVictory = () => {
        return true
    }

    const setUserMessage = (msg) => {
        document.getElementById('message').innerHTML = msg
    }

    const setState = (id) => {
        state[getRow(id)][getCol(id)] = player
    }
})