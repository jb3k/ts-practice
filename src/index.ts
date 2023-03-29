import { v4 as uuidV4 } from "uuid"

//1 & 2
const list = document.querySelector<HTMLUListElement>('#list')
const form = document.querySelector<HTMLFormElement>('#new-task-form')
const input = document.querySelector<HTMLInputElement>('#new-task-title')

//4
type Task = {
  id: string,
  title: string,
  completed: boolean,
  createdAt: Date
}


form?.addEventListener('submit', e => {
  e.preventDefault()

  // 3
  if (input?.value == "" || input?.value == null) return

  const task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date()
  }


  addListItem(task)

})

// 4
function addListItem(task: Task) {

}
