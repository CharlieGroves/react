import React from 'react'
import ReactDOM from 'react-dom'

/* 
Use Capital Camel Case for this
This needs to return just one element so wrap in an empty element <>Like this</> if you are trying
To return more than one elements
*/

function MyApp() {
    return (
        <>
            <h1>Charlie</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id metus sit amet tellus condimentum laoreet non ut urna. Suspendisse potenti. Donec non libero tellus. Nullam varius congue nisi sit amet accumsan. Cras vel feugiat diam, ut bibendum nibh. Donec ultrices, ante ut efficitur vehicula, ipsum libero faucibus purus, vitae aliquet sem velit id metus. Sed finibus laoreet mi, id mattis tellus dapibus a. Proin quis consectetur lorem, sed porta leo.

            Curabitur mollis ante in maximus sodales. Sed massa purus, finibus eu turpis a, maximus laoreet nisl. Nulla ac nibh odio. Nulla facilisi. Nullam malesuada hendrerit eros, vitae viverra erat eleifend eu. In id consectetur dolor. Nam finibus, lectus at interdum vehicula, risus arcu finibus velit, eget accumsan ipsum mi eu massa. Sed imperdiet lacus sit amet quam vulputate, vitae pharetra velit molestie. Suspendisse commodo ipsum pellentesque, congue enim eleifend, iaculis urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec purus tempus, hendrerit orci id, porttitor nulla.

            Donec eu leo quis sapien egestas ultricies. Nunc fringilla luctus nunc vitae laoreet. Ut sit amet ligula a tortor elementum volutpat. Nunc suscipit fringilla dapibus. Integer eleifend enim arcu, vitae fermentum leo commodo vel. Aliquam tristique tellus et semper suscipit. Integer finibus neque enim, sed suscipit nunc pretium et. Integer euismod, lectus a tempor feugiat, sem justo elementum leo, quis faucibus lorem dui ac metus. Curabitur lorem nulla, tincidunt et venenatis at, efficitur ut lectus. Phasellus ut purus eu magna blandit posuere.

            Ut eget pretium libero. In porta imperdiet diam, eget vulputate ligula condimentum eu. Sed tincidunt faucibus elementum. Nulla a leo nec nibh accumsan porttitor bibendum sit amet ligula. Donec luctus velit quis erat mollis blandit. Ut cursus, massa a porttitor fringilla, eros arcu auctor ex, ac tincidunt felis nulla et mauris. In finibus, ante vel suscipit hendrerit, odio sem elementum nulla, in sagittis lacus augue sed ligula. Fusce imperdiet ac purus ac fringilla. Ut ut congue ante. Praesent eget commodo lorem. Donec et convallis sapien, at interdum purus. Ut euismod eget odio sit amet venenatis.

            Nullam nec dapibus lacus, sit amet rutrum dui. Mauris interdum, massa in scelerisque dapibus, dolor lectus ultrices massa, sed eleifend neque ligula in mi. Nam suscipit ligula placerat nisl molestie iaculis. Nullam a sapien ex. Vivamus pharetra ex est, a auctor neque luctus eget. Donec sed finibus dui. Nullam et nibh vel enim egestas placerat. Maecenas non tincidunt enim. Pellentesque non congue nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet justo enim.
            </p>
            <ol style={{backgroundColor: 'red'}}>
                <li>France</li>
                <li>America</li>
                <li>Japan</li>
            </ol>
        </>
    )
}

// JSX
ReactDOM.render(<MyApp />, document.getElementById('root'))