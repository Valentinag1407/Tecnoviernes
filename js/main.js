const usrnm = document.getElementById("usrname")
const psw = document.getElementById("contra")
const btn = document.getElementById("btnsesion")

btn.addEventListener("click", (e) =>{
    e.preventDefault()


    const datos={
        datauser: usrnm.value,
        datapsw: psw.value
    }

        console.log(datos)  
})