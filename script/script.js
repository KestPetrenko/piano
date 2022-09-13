let textNota = document.querySelector(".textNota");

let audioA = new Audio("audio/aNota.wav");
let audioW = new Audio("audio/wNota.wav");
let audioS = new Audio("audio/sNota.wav");
let audioE = new Audio("audio/eNota.wav");
let audioD = new Audio("audio/dNota.wav");
let audioF = new Audio("audio/fNota.wav");
let audioT = new Audio("audio/tNota.wav");
let audioG = new Audio("audio/gNota.wav");
let audioY = new Audio("audio/yNota.wav");
let audioH = new Audio("audio/hNota.wav");
let audioU = new Audio("audio/uNota.wav");
let audioJ = new Audio("audio/jNota.wav");
let audioK = new Audio("audio/kNota.wav");
let audioO = new Audio("audio/oNota.wav");
let audioL = new Audio("audio/lNota.wav");
let audioP = new Audio("audio/pNota.wav");
let audioZ = new Audio("audio/zNota.wav");

let a = document.querySelector(".aNota");
let w = document.querySelector(".wNota");
let s = document.querySelector(".sNota");
let e = document.querySelector(".eNota");
let d = document.querySelector(".dNota");

let f = document.querySelector(".fNota");
let t = document.querySelector(".tNota");
let g = document.querySelector(".gNota");
let y = document.querySelector(".yNota");
let h = document.querySelector(".hNota");
let u = document.querySelector(".uNota");
let j = document.querySelector(".jNota");

let k = document.querySelector(".kNota");
let o = document.querySelector(".oNota");
let l = document.querySelector(".lNota");
let p = document.querySelector(".pNota");
let z = document.querySelector(".zNota");

document.addEventListener("keydown", function (e) {
    switch (e.key) {
        case "a":
            audioA.play();
            textNota.textContent = '';
            textNota.append(a.textContent);
            break;
        case "w":
            audioW.play();
            textNota.textContent = '';
            textNota.append(w.textContent);
            break;
        case "s":
            audioS.play();
            textNota.textContent = '';
            textNota.append(s.textContent);
            break;
        case "e":
            audioE.play();
            textNota.textContent = '';
            textNota.append(e.textContent);
            break;
        case "d":
            audioD.play();
            textNota.textContent = '';
            textNota.append(d.textContent);
            break;

        case "f":
            audioF.play();
            textNota.textContent = '';
            textNota.append(f.textContent);
            break;
        case "t":
            audioT.play();
            textNota.textContent = '';
            textNota.append(t.textContent);
            break;
        case "g":
            audioG.play();
            textNota.textContent = '';
            textNota.append(g.textContent);
            break;
        case "y":
            audioY.play();
            textNota.textContent = '';
            textNota.append(y.textContent);
            break;
        case "h":
            audioH.play();
            textNota.textContent = '';
            textNota.append(h.textContent);
            break;
        case "u":
            audioU.play();
            textNota.textContent = '';
            textNota.append(u.textContent);
            break;
        case "j":
            audioJ.play();
            textNota.textContent = '';
            textNota.append(j.textContent);
            break;

        case "k":
            audioK.play();
            textNota.textContent = '';
            textNota.append(k.textContent);
            break;
        case "o":
            audioO.play();
            textNota.textContent = '';
            textNota.append(o.textContent);
            break;
        case "l":
            audioL.play();
            textNota.textContent = '';
            textNota.append(l.textContent);
            break;
        case "p":
            audioP.play();
            textNota.textContent = '';
            textNota.append(p.textContent);
            break;
        case ";":
            audioZ.play();
            textNota.textContent = '';
            textNota.append(z.textContent);
            break;
    }
});

let fileManager = {
    A() {
        audioA.play();
    },
    W() {
        audioW.play();
    },
    S() {
        audioS.play();
    },
    E() {
        audioE.play();
    },
    D() {
        audioD.play();
    },
    F() {
        audioF.play();
    },
    T() {
        audioT.play();
    },
    G() {
        audioG.play();
    },
    Y() {
        audioY.play();
    },
    H() {
        audioH.play();
    },
    U() {
        audioU.play();
    },
    J() {
        audioJ.play();
    },
    K() {
        audioK.play();
    },
    O() {
        audioO.play();
    },
    L() {
        audioL.play();
    },
    P() {
        audioP.play();
    },
    Z() {
        audioZ.play();
    },
};

document.querySelector(".container").addEventListener("click", function (e) {
    const action = e.target.dataset.action;
    if (action) {
        // находим метод с именем, как в атрибуте data-action и вызываем его
        fileManager[action]();
    }
});
