function getElementFromString(string) {
    let div = document.createElement("div")//<div></div>
    div.innerHTML = string //<div><div></div></div>
    return div.firstElementChild
}

let addedParamsCount = 1

let parameterBox = document.getElementById("parameterBox")
parameterBox.style.display = 'none'

let paramsRadio = document.getElementById("paramsradio")
let jsonRadio = document.getElementById("jsonradio")

paramsRadio.addEventListener("click", () => {
    document.getElementById("parameterBox").style.display = "block"
    document.getElementById("requestJsonBox").style.display = "none"
    document.getElementById("params").style.display = "block"
})

jsonRadio.addEventListener("click", () => {
    document.getElementById("parameterBox").style.display = "none"
    document.getElementById("params").style.display = "none"
    document.getElementById("requestJsonBox").style.display = "block"
})

let addParam = document.getElementById("addParam")
addParam.addEventListener("click", () => {
    addedParamsCount++
    let params = document.getElementById('params')
    let string = `   <div class="form-row my-2">
                <label for="url" class="col-sm-2 col-form-label">Parameter ${addedParamsCount}</label>
                <div class="col-md-4">
                    <input type="text" class="form-control" id="parameterkey${addedParamsCount}" placeholder="Enter Parameter ${addedParamsCount} Key">
                </div>
                <div class="col-md-4">
                    <input type="text" class="form-control" id="parametervalue${addedParamsCount}" placeholder="Enter Parameter ${addedParamsCount} Value">
                </div>
                <button type="button" id="addParam" class="btn btn-primary">-</button>
            </div>`

    let paramElement = getElementFromString(string)
    params.appendChild(paramElement)
})

let submit = document.getElementById("submit")
submit.addEventListener("click", function () {

    document.getElementById("responseJsonText").value = 'Please Wait....'
    let urlField = document.getElementById("urlField").value
    let requestType = document.querySelector("input[name='requestType']:checked").value
    let contentType = document.querySelector("input[name='contentType']:checked").value
    let data = {}
    if (contentType === 'params') {
        for (let i = 1; i <= addedParamsCount; i++) {
            let key = document.getElementById(`parameterkey${i}`).value
            let value = document.getElementById(`parametervalue${i}`).value
            data[key] = value
        }
        data = JSON.stringify(data)
    } else {
        data = document.getElementById("requestJsonText").value

    }

    if (requestType === 'GET') {
        fetch(urlField)
            .then(res => res.text())
            .then(data => {
                document.getElementById("responseJsonText").value = data
            })
    } else if (requestType === 'DELETE') {
        fetch(urlField, {
            method: "DELETE",
        })
            .then(res => res.text())
            .then(data => {
                document.getElementById("responseJsonText").value = data
            })
    }
    else if (requestType === "PUT") {
        fetch(urlField, {
            method: "PUT",
            body: data,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            }
        })
            .then(res => res.text())
            .then(data => {
                document.getElementById("responseJsonText").value = data
            })
    }
    else {
        console.log(typeof data)
        fetch(urlField, {
            method: "POST",
            body: data,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            }
        })
            .then(res => res.text())
            .then(data => {
                document.getElementById("responseJsonText").value = data
            })
    }

})