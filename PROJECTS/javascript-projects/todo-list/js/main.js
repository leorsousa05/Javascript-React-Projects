const addTask = $('#submit')
const btn = $('.shownegocio')
const taskList = $('#tasks-container')

let count = taskList.children().length
let num = taskList.children()[0]

const createChecker = () => {
    const checker = document.createElement('input')
    checker.setAttribute('class', 'checker')
    checker.setAttribute('type', 'checkbox')
    
    return checker
}

const createTask = (search) => {
    if(search != '') {
        const div = document.createElement('div')
        const p = document.createElement('p')
        const checker = document.createElement('input')
        count = taskList.children().length

        div.setAttribute('class', 'task')
        div.setAttribute('index', count)

        p.innerText = search
    
        div.appendChild(createChecker())
        div.appendChild(p)
        div.appendChild(createDeleteBtn(count))

        taskList.append(div)
        
        return count
    }
}

const deleter = (itemId) => {
    if(count != 0) {
        for(i = 0; i <  count; i++) {
            const task = taskList.children()
            if(task[i].getAttribute("index") == itemId) {
                task[i].remove()
            }
        }
    }
}

const createDeleteBtn = (itemId) => {
    let btn = document.createElement("button")
    btn.setAttribute('onclick', "deleter("+itemId+")")
    btn.innerText = 'X'
    return btn
}



const handleClick = () => {
    const search = $('#search').val()
    createTask(search)
}

addTask.on('click', () => handleClick())