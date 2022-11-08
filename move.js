function move(element) {
    element.style.position = 'fixed'
    
    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }
    
    function moveWithArrowKeys(left, bottom, characterDirectionChange) {
        let direction = null;
        let x = left;
        let y = bottom;
        
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        
        //movecharacter function
        function moveCharacter() {
            if (direction === 'west') {
                if (x > 0) {
                    x = x - 1
                }
            }
            if (direction === 'north') {
                if (y < window.innerHeight - 70) {
                    y = y + 1
                }
            }
            if (direction === 'east') {
                if (x < window.innerWidth - 50) {
                    x = x + 1
                }
            }
            if (direction === 'south') {
                if (y > 105) {
                    y = y - 1
                }
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
            //this z-index change only really works for the pillar in the middle
            if (y > 300 && 350 < x < 400) {
                element.style.zIndex = -1
            }
            if (y <= 300) {
                element.style.zIndex = 1
            }
        }
        
        setInterval(moveCharacter, 1)
        
        document.addEventListener('keydown', function (e) {
            if (e.repeat) return;
            
            if (e.key === 'ArrowLeft') {
                direction = 'west'
            }
            if (e.key === 'ArrowUp') {
                direction = 'north'
            }
            if (e.key === 'ArrowRight') {
                direction = 'east'
            }
            if (e.key === 'ArrowDown') {
                direction = 'south'
            }
            if (characterDirectionChange != null) {
                characterDirectionChange(direction)
            }
        })
        
        document.addEventListener('keyup', function (e) {
            direction = null
            if (characterDirectionChange != null) {
                characterDirectionChange(direction)
            }
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}