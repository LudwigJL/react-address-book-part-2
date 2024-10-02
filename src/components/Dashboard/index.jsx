import { Link } from "react-router-dom";

export default function Dashboard() {
    return(
        <section>
            <h1>Menu</h1>
            <Link to={'/contacts'}> Contacts List</Link>
            <p>Add New Contact</p>
        </section>
    )
}