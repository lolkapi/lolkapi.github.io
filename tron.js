psz = [0, 0], maxpsz = 5
start = () => {
    n = 60, m = 40, x = [50, 10], y = [20, 20], xd = [-1, 1], yd = [0, 0]
    color = ["darkred", "darkblue"], 
    gi = [[ {key: "ArrowUp", ir: [0, -1]}, {key: "ArrowDown", ir: [0, 1]}, 
            {key: "ArrowLeft", ir: [-1, 0]}, {key: "ArrowRight", ir: [1, 0]}],[
            {key: "w", ir: [0, -1]}, {key: "s", ir: [0, 1]}, 
            {key: "a", ir: [-1, 0]}, {key: "d", ir: [1, 0]}]]
    table = Array(n).fill(0).map(() => Array(n).fill(0))
    to = document.getElementById('t'), to.innerHTML = `
    <table class="main">${Array(m).fill(`
        <tr>
        ${Array(n).fill(`<td class="o" />`).join('')}
        </tr>`).join('')}
    </table>`, to = to.children[0].children[0]
    color.forEach( (c, i) => {
        table[y[i]][x[i]] = i+1
        to.children[y[i]].children[x[i]].style.backgroundColor = c
    })
    iv = setInterval(() => {
        eg = false
        color.forEach( (c, i) => {
            x[i] += xd[i], y[i] += yd[i], f = (x[i] >= n || y[i] >= m || x[i] < 0 || y[i] < 0)
            if (f || table[y[i]][x[i]] != 0) {
                if ( (( xd[0] + xd[1] != 0 ) || x[0] != x[1]) &&
                    (( yd[0] + yd[1] != 0 ) || y[0] != y[1]) ) {
                        psz[i]++
                        if (!f) to.children[y[i]].children[x[i]].style.backgroundColor = "darkblue"
                }
                eg = true
            } else 
                table[y[i]][x[i]] = i + 1,
                to.children[y[i]].children[x[i]].style.backgroundColor = c
        })
        if (eg) {
            clearInterval(iv)
            document.getElementById("psz").innerHTML = `
            <span class="g">${psz[0]}</span> : <span class="r">${psz[1]}</span>`
            if ( (psz[0] < maxpsz) && (psz[1] < maxpsz)) setTimeout(start, 1000)
        }
    }, 100)
}
addEventListener("keydown", e => gi.forEach( (pl, i) => pl.forEach( ire => {
        if (e.key == ire.key) [xd[i], yd[i]] = ire.ir
})))
start()