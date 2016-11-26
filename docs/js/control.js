// STARTUP /////////////////////////////////////////////////////////////////////

createBackup(core)

// VUE.JS //////////////////////////////////////////////////////////////////////

app = new Vue({
    el: "#app",
    data: {
        core: getLocal()
    },
    watch: {
        core: {
            handler: _.debounce(function() {
                setLocal(app.core)
                console.log("woo?")
            }, 750),
            deep: true
        }
    },
    methods: {
        resetEverything: function() {
            app.core = restoreBackup()
        },
        updateEMT: function(event) {
            target = event.path[0].getAttribute("value")
            app.core.emt_current = target
            app.core.emt.forEach(function(el) {
                el.current = (el.src === target)
            })
            console.log(target)
        }
    }
})

// console.log(app.core.emt_current)
