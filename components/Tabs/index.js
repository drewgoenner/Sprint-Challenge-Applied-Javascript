// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then((response) => {
console.log(response)
    response.data.topics.forEach(topic => {
        const newTab = createTab(topic);
        console.log(newTab)        
        })
});

function createTab(newTab) {
    //create elements
    const topic1 = document.createElement('div');
    topic1.classList.add("tab");
    topic1.textContent = newTab;
    const tab = document.querySelector('.topics');
    tab.appendChild(topic1)

    return topic1
}