import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App(){
    return (<div>
        <Header />
        <Note 
            title="This is a title"
            content="This is content"
        />
        <Footer />
    </div>
    );
}

export default App