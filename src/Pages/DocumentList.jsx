import { useNavigate } from "react-router-dom";

export default function DocumentList() {
    const navigate = useNavigate();

    return (
        <div className="doc-list">
            <h3>Document List</h3>
            <p>Select a document to edit.</p>
            <button onClick={() => navigate("edit")}>Edit Document</button>
        </div>
    );
}
