let URL="https://jsonplaceholder.typicode.com/posts";
async function getCard(){
  
    await axios.get(URL).then((res)=>{
        let items=res.data;
        console.log(items);
        items.forEach(item => {
            document.getElementById('cardBody').innerHTML+=`
                <div class="col-4">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">ID: ${item.id}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${item.title}</h6>
                            <p class="card-text" style="max-height: 100px; overflow: hidden;">
                                ${item.body}
                            </p>
                            <a href="#" class="card-link btn btn-danger">Delete</a>
                            <a href="#" class="card-link btn btn-primary">Update</a>
                        </div>
                    </div>
                </div>

            `
        });
    })


}


getCard();