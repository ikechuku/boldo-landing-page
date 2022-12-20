function solution(n, k) {
    let ans = ""
    n = JSON.stringify(n)
    let n1 = parseInt(n[0])
    let n2 = parseInt(n[1])
    let n3 = parseInt(n[2])
    while (k > 1) {
        // while (n1 < 9) {
        //     n1 += 1
        //     k -= 1
        // }
    }

    console.log("S")


    return parseInt(ans + n1 + n2 + n3)

}


let x = solution(512, 10)
console.log(x)