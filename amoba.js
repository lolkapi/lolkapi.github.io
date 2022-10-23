nx = "O", n = 16
f = e => { if (e.innerHTML == "") {
    nx = nx == "O" ? "X" : "O"
    e.innerHTML = nx, e.setAttribute('class', nx)
    x = e.cellIndex, y = e.parentElement.rowIndex, t[x][y] = nx
    setTimeout(() => [[1,1],[1,0],[0,1],[-1,1]].forEach( d => {
        xp=x, yp=y, maxh=0, [vx, vy] = d
        while (t[xp][yp] === nx) xp += vx, yp += vy, maxh++
        xp=x, yp=y
        while (t[xp][yp] === nx) xp -= vx, yp -= vy, maxh++
        if (maxh > 5) alert(`Nyert: ${nx}`), init()
    }), 100)
}}
(init = () => {
    t = Array(n).fill().map(() => Array(n).fill())
    document.getElementById('t').innerHTML = `
    <table>
        ${Array(n).fill(`
        <tr>
        ${Array(n).fill(`<td onmouseup="f(this)" />`).join('')}
        </tr>
        `).join('')}
    </table>`
})()