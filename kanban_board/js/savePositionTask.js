const UPDATE_POSITION_TASK = 'https://649127532f2c7ee6c2c7ccc6.mockapi.io/v1/tasks';

const savePositionTask = (currentElement, currentId) => {
    fetch(`${UPDATE_POSITION_TASK}/${currentId}`)
        .then(response => response.json())
        .then(data => {
            const settings = {
                method: 'PUT',
                headers: {
                    "Content-type": "application/json; charset=utf-8"
                },
                body: JSON.stringify({
                    ...data,
                    "colId": currentElement.dataset.id
                })
            }

            fetch(`${UPDATE_POSITION_TASK}/${currentId}`, settings)
                .then(response => response.json())
                .then(data => console.log(data));
        })
}