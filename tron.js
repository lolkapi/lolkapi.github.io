n = 60, m = 40
x = 50, y = 20, xd = -1, yd = 0
x2 = 20, y2 = 30, xd2 = 1, yd2 = 0

table = Array(n).fill().map(() => Array(n).fill())
to = document.getElementById('t'), to.innerHTML = `
<table>${Array(m).fill(`
    <tr>
    ${Array(n).fill(`<td/>`).join('')}
    </tr>`).join('')}
</table>`
to = to.children[0].children[0], table[y][x] = 1
to.children[y].children[x].style.backgroundColor = "red"
addEventListener("keydown", e => { switch (e.key) {
    case "ArrowUp"    : [xd, yd] = [ 0,-1]; break
    case "ArrowDown"  : [xd, yd] = [ 0, 1]; break
    case "ArrowLeft"  : [xd, yd] = [-1, 0]; break
    case "ArrowRight" : [xd, yd] = [ 1, 0]; break
}})
iv = setInterval(() => {
    x += xd, y += yd
    if (x >= n || y >= m || x < 0 || y < 0 || table[y][x] == 1)
        clearInterval(iv)
    else
        table[y][x] = 1,
        to.children[y].children[x].style.backgroundColor = "red"
}, 100)

to2 = to.children[0].children[0], table[y][x] = 1
to.children[y2].children[x2].style.backgroundColor = "blue"
addEventListener("keydown", e2 => { switch (e2.key) {
    case "w"    : [xd2, yd2] = [ 0,-1]; break
    case "s"    : [xd2, yd2] = [ 0, 1]; break
    case "a"    : [xd2, yd2] = [-1, 0]; break
    case "d"    : [xd2, yd2] = [ 1, 0]; break
}})
iv2 = setInterval(() => {
    x2 += xd2, y2 += yd2
    if (x2 >= n || y2 >= m || x2 < 0 || y2 < 0 || table[y2][x2] == 1)
        clearInterval(iv2)
    else
        table[y2][x2] = 1,
        to.children[y2].children[x2].style.backgroundColor = "blue"
}, 100)