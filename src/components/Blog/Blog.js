import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='blogs'>
            <h4>1. How does react works?</h4>
            <p><strong>Ans:</strong> It defines the logical structure of documents and the way a document is accessed and manipulated. So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser's DOM.
                Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements.</p>


            <h4>2.What-are-the-differences-between-props-and-state?</h4>
            <p><strong>Ans: Props </strong>are read-only, It is Immutable (cannot be modified). The Data is passed from one component to another.<br />
                <br />
                <strong>State </strong> is both read and write. It is Mutable ( can be modified). The Data is passed within the component only.
            </p>

            <br />
            <h4>3. what are the reason for use <strong>useEffect</strong>? </h4>
            <p><strong>Ans:</strong> There are many reason for use <strong>useEffect</strong> <br />
                * Dependencies argument:   control when the side-effect runs.
                <br />
                *for side effects:   The component rendering and side-effect logic are independent. It would be a mistake to perform side-effects directly in the body of the component, which is primarily used to compute the output.
                <br />
                *Component Life cycle:  Component did mount. <br />
                Component did update.
            </p>
        </div>
    );
};

export default Blog;