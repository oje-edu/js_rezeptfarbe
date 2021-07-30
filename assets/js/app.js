const btn = document.querySelector('#btn')
const reset = document.querySelector('#reset')

btn.onclick = function (e) {
  e.preventDefault()
  const btmBbs = document.querySelectorAll('input[name="btm"]')
  const verschrBbs = document.querySelectorAll('input[name="verschr"]')
  const gesetzBbs = document.querySelectorAll('input[name="gesetz"]')
  let selBtmVal
  let selVerschrVal
  let selGesetzVal

  for (const btmRb of btmBbs) {
    if (btmRb.checked) {
        selBtmVal = btmRb.value
        break
    }
  }
  for (const verschrRb of verschrBbs) {
    if (verschrRb.checked) {
        selVerschrVal = verschrRb.value
        break
    }
  }
  for (const gesetzRb of gesetzBbs) {
    if (gesetzRb.checked) {
        selGesetzVal = gesetzRb.value
        break
    }
  }

  if (selBtmVal === "ja") {
    document.querySelector('body').style.backgroundColor = 'yellow'
  } else if (selGesetzVal === "ja") {
    if (selVerschrVal == "ja") {
      document.querySelector('body').style.backgroundColor = 'pink'
    } else {
      document.querySelector('body').style.backgroundColor = 'limegreen'
    }
  } else if (selGesetzVal === "nein"){
    document.querySelector('body').style.backgroundColor = 'blue'
  } else {
    document.querySelector('body').style.backgroundColor = ''
  }
}

reset.onclick = function (e) {
  e.preventDefault()
  window.location.assign('/')
}