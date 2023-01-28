import axios from 'axios'

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).

  const divWrapper = document.createElement('div');
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const div3 = document.createElement('div');
  const div4 = document.createElement('div');
  const div5 = document.createElement('div');

  divWrapper.appendChild(div1);
  divWrapper.appendChild(div2);
  divWrapper.appendChild(div3);
  divWrapper.appendChild(div4);
  divWrapper.appendChild(div5);

  divWrapper.classList.add('topics');
  div1.classList.add('tab')
  div2.classList.add('tab')
  div3.classList.add('tab')
  div4.classList.add('tab')
  div5.classList.add('tab')
 
  

  return divWrapper;
  
  


  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}

const tabsAppender = (selector) => {

  axios.get(`http://localhost:5001/api/topics`)
  .then(res => {
  
  })
  .catch(err => {
    console.error(err);
  })
  .finally(() => console.log("Complete"));



  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
