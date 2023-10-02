import { useState } from "react";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'Create React App', body: 'Create a folder by opening bash terminal. Give the folder a name. Open in VS code. Open ternal and run npm create-react-app with dot afterwards. Press enter', author: 'laquisha', id: 1},
        { title: 'How to change background color of a button', body: 'Give the button a class name. Create styles file. Put class name to button. Make background color to property of your choice. Link styles file in index file.', author: 'bob', id: 2},
        { title: 'How to create index file', body: 'Open project in vs code. Click on new file. Name the file index.html. Put markup language in it. Start live server.', author: 'laquisha', id: 3}
    ]);

    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author } </p>
                </div>
            ))}
        </div>
        
     );
}
 
export default Home;