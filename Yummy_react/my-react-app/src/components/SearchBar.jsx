import search from "../image/search.svg"
import "../style/SearchBar.css"
const CoverImage = () => {
    return (
        <section className="cover-image">
            <div className="cover-image-content">
                <h1>Delicious recipes just click away</h1>
            </div>
            <form action="" className="input-box">
                <input type="text" placeholder="Search" />
            </form>
        </section>
    );
}

export default CoverImage;