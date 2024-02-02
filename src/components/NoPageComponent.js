import "./NoPage.css";


const NoPageComponent = () => {
    return (
        <div className="animal-background">
            <div className="animal-header">
                <h1 className="animal-h1">404 Page Not found</h1>
            </div>
            <div className="nopage-gif">
                <iframe src="https://giphy.com/embed/1bAdvIjqaXCSc" class="nopage-gif-item"></iframe>
            </div>
        </div>
    );
}

export default NoPageComponent;