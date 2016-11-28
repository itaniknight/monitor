// FUNCTIONS ///////////////////////////////////////////////////////////////////

function getLocal() {
    return JSON.parse(localStorage.getItem("pm_core"))
}

function setLocal(data) {
    localStorage.setItem("pm_core", JSON.stringify(data))
}

function createBackup(data) {
    localStorage.setItem("pm_core_backup", JSON.stringify(data))
}

function restoreBackup() {
    return JSON.parse(localStorage.getItem("pm_core_backup"))
}

// VARIABLES ///////////////////////////////////////////////////////////////////

emt = [
    { id: "xx", src: "img/xx.png",  name: "Empty", current: true },
    { id: "af", src: "img/af.png",  name: "Atrial Fibrillation", current: false },
    { id: "as", src: "img/as.png",  name: "Asystole", current: false },
    { id: "sr", src: "img/sr.png",  name: "Sinus Rhythm", current: false },
    { id: "stc", src: "img/st.png", name: "Sinus Tachycardia", current: false },
    { id: "ste", src: "img/se.png", name: "ST Elevation", current: false },
    { id: "vf", src: "img/vf.png",  name: "Ventricular Fibrillation", current: false },
    { id: "vt", src: "img/vt.png",  name: "Ventricular Tachycardia", current: false },
    // { id: "xxvid", src: "mp4/sinus-rhythm.mp4", name: "Sinus Rhythm (Video)", current: false, video: true }
]

input = [
    { id: "cr", name: "Cap Refill",  data: null, visible: false },
    { id: "bs", name: "Blood Sugar", data: null, visible: false },
    { id: "rs", name: "Respiration", data: null, visible: false },
    { id: "sp", name: "SpO2",        data: null, visible: false },
    { id: "pl", name: "Pulse",       data: null, visible: false },
    { id: "nb", name: "NIBP",        data: null, visible: false },
    { id: "bt", name: "Body Temp",   data: null, visible: false },
    { id: "yy", name: "Custom",      data: null, visible: false },
]

core = {
    emt: emt,
    emt_current: {
        src: "img/xx.png",
        type: "image"
    },
    input: input
}
