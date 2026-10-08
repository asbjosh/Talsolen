const grid = document.getElementById('grid'); 
    const rows = 10, cols = 10; 

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            grid.appendChild(cell);
        }
    }